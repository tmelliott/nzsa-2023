import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://tomelliott.co.nz",
  base: "/nzsa-2023",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
