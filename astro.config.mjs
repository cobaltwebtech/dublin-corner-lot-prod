import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import minify from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import compressor from "astro-compressor";

export default defineConfig({
	site: "https://dublincornerlot.org/",
	output: "static",

	prefetch: {
		prefetchAll: true,
	},

	fonts: [
		{
			provider: fontProviders.local(),
			name: "Avenir",
			cssVariable: "--default-font-family",
			options: {
				variants: [
					{
						weight: "200",
						style: "normal",
						src: ["./public/fonts/Avenir-Light.woff2"],
					},
					{
						weight: "400",
						style: "normal",
						src: ["./public/fonts/Avenir-Medium.woff2"],
					},
					{
						weight: "800",
						style: "normal",
						src: ["./public/fonts/Avenir-Heavy.woff2"],
					},
					{
						weight: "900",
						style: "normal",
						src: ["./public/fonts/Avenir-Black.woff2"],
					},
				],
			},
		},
	],

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

	adapter: netlify(),
});
