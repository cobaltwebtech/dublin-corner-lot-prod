import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://dublincornerlot.org/",
  prefetch: true,
  integrations: [
    tailwind(), 
    icon(),
    //astro-compressor must be last config in the integrations parameters
    compressor({ 
      gzip: false,
      brotli: true
    })
  ],
});
