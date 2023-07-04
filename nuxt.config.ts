// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },

  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-anime",
    ["@pinia/nuxt", ["defineStore"]],
    "@vueuse/nuxt",
  ],

  css: ["element-plus/theme-chalk/dark/css-vars.css"],

  tailwindcss: {
    viewer: false,
    configPath: "./tailwind.config.js",
  },
  imports: {
    autoImport: true,
    dirs: ["stores"],
  },
});
