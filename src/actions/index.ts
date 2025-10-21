import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Validate form inputs with Zod
const contactFormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  "volunteer-location": z.string().optional(),
  "volunteer-reason": z.string().optional(),
  abilities: z.string().optional(),
  availability: z.string().optional(),
  message: z.string().optional(),
  "cf-turnstile-response": z
    .string()
    .min(1, "CAPTCHA verification is required"),
});

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;

  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);

  try {
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    const outcome = await result.json();
    return outcome.success;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export const server = {
  sendContactForm: defineAction({
    accept: "form",
    input: contactFormSchema,
    handler: async (input) => {
      // Verify Turnstile token server-side
      const isValidToken = await verifyTurnstileToken(
        input["cf-turnstile-response"],
      );

      if (!isValidToken) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "CAPTCHA verification failed. Please try again.",
        });
      }

      // Prepare email content
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> ${input.firstname} ${input.lastname}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Phone:</strong> ${input.phone}</p>
        
        <h3>Volunteer Information:</h3>
        <p><strong>Volunteer Location:</strong> ${input["volunteer-location"] || "Not specified"}</p>
        <p><strong>Volunteer Reason:</strong> ${input["volunteer-reason"] || "Not specified"}</p>
        <p><strong>Skills/Abilities:</strong></p>
        <p>${input.abilities || "Not provided"}</p>
        <p><strong>Availability:</strong></p>
        <p>${input.availability || "Not provided"}</p>
        
        ${
          input.message
            ? `
          <h3>Additional Message:</h3>
          <p>${input.message}</p>
        `
            : ""
        }
      `;

      // Send email via Resend
      const { data, error } = await resend.emails.send({
        from: "Corner Lot Website <notifications@contact.cobaltweb.tech>",
        to: "dublinflowerlady@yahoo.com",
        cc: "info@cobaltweb.tech",
        subject: `New Contact Submission: ${input.firstname} ${input.lastname}`,
        html: emailHtml,
        replyTo: input.email,
      });

      if (error) {
        console.error("Resend error:", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send email. Please try again later.",
        });
      }

      return {
        success: true,
        message: "Your message has been sent successfully!",
        emailId: data?.id,
      };
    },
  }),
};
