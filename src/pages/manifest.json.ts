import type { APIRoute, ImageMetadata } from "astro";
import icon from "@/img/favicon/icon.png";
import maskableIcon from "@/img/favicon/icon-maskable.png";

interface Favicon {
  purpose: "any" | "maskable" | "monochrome";
  src: ImageMetadata;
  sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: "any",
    src: icon,
    sizes,
  },
  {
    purpose: "maskable",
    src: maskableIcon,
    sizes,
  },
];

export const GET: APIRoute = async () => {
  const icons = favicons.flatMap((favicon) =>
    sizes.map((size) => ({
      src: `/icons/${favicon.purpose}-${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
      purpose: favicon.purpose,
    })),
  );

  const manifest = {
    short_name: "Corner Lot",
    name: "Dublin Corner Lot",
    icons,
    display: "minimal-ui",
    id: "/",
    start_url: "/",
    theme_color: "#bae3b5",
    background_color: "#214a1c",
  };

  return new Response(JSON.stringify(manifest));
};
