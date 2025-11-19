import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import minify from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import icon from "astro-icon";

export default defineConfig({
	site: "https://dublincornerlot.org/",
	output: "static",
	prefetch: {
		prefetchAll: true,
	},
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap({
			filter: (page) => {
				const url = new URL(page);
				if (
					url.pathname.includes("/thank-you-for-donating") ||
					url.pathname.includes("/submission-received")
				)
					return false;
				return true;
			},
		}),
		icon(),
		minify({
			CSS: false,
			HTML: true,
			Image: false,
			JavaScript: false,
			SVG: true,
		}),
		compressor({
			gzip: false,
			brotli: true,
		}),
	],
	adapter: vercel({
		imageService: true,
	}),
});
