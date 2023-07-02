// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: true },

  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-anime",
  ],

  tailwindcss: {
    viewer: false,
    configPath: "./tailwind.config.js",
  },
});
