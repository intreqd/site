// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // or `vercel/edge` for edge functions
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "server",
  build: {
    inlineStylesheets: "auto",
  },
  outDir: './docs', // relative to project root
  adapter: vercel(),
});
