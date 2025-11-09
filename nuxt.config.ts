// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "/style/plugin.css" },
        { rel: "stylesheet", href: "/style/style.scss.css" },
      ],
      script: [
        { src: "/script/plugin.js", defer: true },
        { src: "/script/option_selection.js", defer: true },
        { src: "/script/api.jquery.js", defer: true },
        { src: "/script/main.js", defer: true },
      ],
    },
  },
  devtools: { enabled: true },
});
