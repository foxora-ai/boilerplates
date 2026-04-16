export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "/api",
    },
  },
});
