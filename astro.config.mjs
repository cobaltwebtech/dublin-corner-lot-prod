import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import minify from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://dublincornerlot.org/",
  prefetch: true,
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        mdi: [
          "facebook",
          "instagram",
          "close",
          "white-balance-sunny",
          "weather-night",
          "tree",
          "about",
          "menu",
          "arrow-up-bold",
        ],
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
});
