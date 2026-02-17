// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/sitemap"],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://avh-garden.be",
  },

  // Runtime config (server + public)
  runtimeConfig: {
    // ===== Server only =====
    smtp: {
      host: process.env.NUXT_SMTP_HOST || "",
      port: Number(process.env.NUXT_SMTP_PORT) || 587,
      user: process.env.NUXT_SMTP_USER || "",
      pass: process.env.NUXT_SMTP_PASS || "",
    },

    mail: {
      from: process.env.NUXT_MAIL_FROM || "",
      to: process.env.NUXT_MAIL_TO || "",
    },

    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,

    // ===== Public (client) =====
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://avh-garden.be",
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
    },
  },

  /* =========================
   SEO GLOBAL (BASE) – Nuxt Starter
   ========================= */
  app: {
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      htmlAttrs: {
        lang: "fr",
      },

      titleTemplate: "%s – AVH Garden",

      meta: [
        {
          name: "description",
          content:
            "AVH Garden est spécialisé en aménagement extérieur, pavage et rénovations en Brabant Wallon et Province de Namur. Devis gratuit et accompagnement personnalisé.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "AVH Garden" },
      ],

      script: [
        {
          src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
});
