import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => ({
  plugins: [qwikCity(), qwikVite(), tailwindcss()],
  preview: { headers: { "Cache-Control": "public, max-age=600" } },
}));
