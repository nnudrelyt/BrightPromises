import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  base: "/2025-impact-report",
  output: "server",
  trailingSlash: "never",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
