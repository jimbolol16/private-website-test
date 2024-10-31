require("dotenv").config({
  path: ".env",
});
import { createRoutes } from "./utils/sitemapRoutes";
import { excludeRoute } from "./utils/excludeRobots";
import { locales } from "./i18n/index";
import esMessages from "./i18n/es.json";
import frMessages from "./i18n/fr.json";
import itMessages from "./i18n/it.json";
import ptMessages from "./i18n/pt.json";
import enMessages from "./i18n/en.json";
import { load } from "cheerio";

export default {
  modern: process.env.NUXT_APP_ENVIRONMENT !== "development",
  asyncScripts: process.env.NUXT_APP_ENVIRONMENT !== "development",
  extractCSS: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Box2box",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "box2box" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/toast.client.js",
      mode: "client",
    },
    {
      src: "~/plugins/scroll.client.js",
      mode: "client",
    },
    {
      src: "~/plugins/intersect.client.js",
      mode: "client",
    },
    {
      src: "~/plugins/axios.js",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/google-fonts",
    "@nuxtjs/critters",
    "@nuxtjs/pwa",
    "@/modules/i18n",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/google-gtag",
    "@/modules/meta",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://i18n.nuxtjs.org/
    "@nuxtjs/i18n",
    "@nuxtjs/redirect-module",
    "@nuxt/image",
    "@nuxtjs/gtm",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap", // must be the last one
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        prettify: false,
      },
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
          ...(process.env.NUXT_APP_ENVIRONMENT !== "development"
            ? { cssnano: {} }
            : {}),
        },
      },
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        name: false,
        maxSize: 300000,
      },
    },
    // transpile: [/^vue2-google-maps($|\/)/],
  },

  // Enable server side rendering
  ssr: true,

  // Server middlewares
  serverMiddleware:
    process.env.NUXT_APP_ENVIRONMENT === "development"
      ? [{ path: "/api", handler: "~/api/index" }]
      : [],

  publicRuntimeConfig: {
    mapKey: process.env.GOOGLE_MAPS_KEY,
    siteURL: process.env.NUXT_HOSTNAME,
    baseURL: process.env.NUXT_APP_ROOT_API,
    environment: process.env.NUXT_APP_ENVIRONMENT,
    adyen_key_es: process.env.ADYEN_CLIENT_KEY_ES,
    adyen_key_fr: process.env.ADYEN_CLIENT_KEY_FR,
    adyen_key_it: process.env.ADYEN_CLIENT_KEY_IT,
    adyen_key_pt: process.env.ADYEN_CLIENT_KEY_PT,
    adyen_key_mx: process.env.ADYEN_CLIENT_KEY_MX,
    chargebee_site_es: process.env.CHARGEBEE_SITE_ES,
    chargebee_site_fr: process.env.CHARGEBEE_SITE_FR,
    chargebee_site_it: process.env.CHARGEBEE_SITE_IT,
    chargebee_site_pt: process.env.CHARGEBEE_SITE_PT,
    chargebee_site_mx: process.env.CHARGEBEE_SITE_MX,
    chargebee_api_key_es: process.env.CHARGEBEE_API_KEY_ES,
    chargebee_api_key_fr: process.env.CHARGEBEE_API_KEY_FR,
    chargebee_api_key_it: process.env.CHARGEBEE_API_KEY_IT,
    chargebee_api_key_pt: process.env.CHARGEBEE_API_KEY_PT,
    chargebee_api_key_mx: process.env.CHARGEBEE_API_KEY_MX,
    gatewayKey: process.env.NUXT_APP_API_GATEWAY_BACKEND_API_KEY,
    gatewayUri: process.env.NUXT_APP_API_GATEWAY_URL,
    backendURL: process.env.NUXT_APP_BACKEND_API_URL,
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
    img_provider:
      process.env.NUXT_APP_ENVIRONMENT !== "production" ? "static" : "imgix",
  },

  gtm: {
    pageTracking: true,
    scriptDefer: true,
  },

  privateRuntimeConfig: {
    mongoUri: process.env.MONGO_DB_URI,
  },

  i18n: {
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: "en",
      silentFallbackWarn: true,
      messages: {
        es: esMessages,
        fr: frMessages,
        pt: ptMessages,
        it: itMessages,
        mx: esMessages,
        "es-en": enMessages,
        "fr-en": enMessages,
        "pt-en": enMessages,
        "it-en": enMessages,
        "mx-en": enMessages,
      },
    },
    strategy: "prefix",
    defaultLocale: "es",
    locales: locales,
    differentDomains: false,
    baseUrl: process.env.NUXT_HOSTNAME,
    detectBrowserLanguage: {
      useCookie: false, // redirect always on
      redirectOn: "root",
      // alwaysRedirect: true,
      fallbackLocale: "es",
    },
    rootRedirect: {
      statusCode: 999, // Handle this using our custom module with middleware to handle 301
      path: "es",
    },
  },

  router: {
    middleware: ["i18n"],
    extendRoutes(routes, resolve) {
      routes.push({
        name: "storages-city",
        path: "/storages/:city?",
        component: resolve(__dirname, "pages/warehouses/_city.vue"),
      });
    },
  },

  // Look this: https://stackoverflow.com/questions/68165911/how-to-efficiently-load-google-fonts-in-nuxt
  googleFonts: {
    display: "swap",
    families: {
      Roboto: {
        wght: [300, 400, 500, 700],
      },
      Poppins: true,
      Manrope: {
        wght: [400, 500, 700, 800],
      },
    },
  },

  sitemap: {
    hostname: process.env.NUXT_HOSTNAME,
    gzip: true,
    cacheTime: 1000 * 60 * 60 * 24 * 7, // 7 days
    // filter: filteredRoutes,
    i18n: true,
    defaults: {
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
    },
    exclude: [
      "/**/collaborate",
      "/**/collaborate/**",
      "/**/calculator",
      "/**/calculator/**",
      "/**/booking/resume",
      "/**/prices/resume",
      "/**/resume",
      "/**/promo",
      "/**/promo/**",
    ],
    routes: createRoutes,
  },

  robots: {
    Disallow: () => {
      let routes = ["/api"];
      routes = routes.concat([
        ...excludeRoute("collaborate"),
        ...excludeRoute("collaborate/lead"),
        ...excludeRoute("booking/resume"),
        ...excludeRoute("prices/resume"),
        ...excludeRoute("resume"),
      ]);
      return routes;
    },
    Sitemap: (req) => {
      const schema =
        process.env.NUXT_APP_ENVIRONMENT !== "production" ? "http" : "https";
      const host = req.headers.host;

      return [
        `${schema}://${host}/sitemap.xml`,
        `${schema}://${host}/blog/sitemap.xml`,
      ];
    },
  },

  image: {
    provider: "static",
    imgix: {
      baseURL: "https://box2box.imgix.net",
      modifiers: {
        auto: "format,compress",
      },
    },
    dir: "static",
    screens: {
      xs: 360,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1920,
    },
  },

  // Handle trailing slash redirections
  redirect: [
    {
      from: "(?!^/$|^/[?].*$)(.*/[?](.*)$|.*/$)",
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/+$/, "");
        const search = req._parsedUrl.search;
        return base + (search != null ? search : "");
      },
      statusCode: 301,
    },
  ],

  hooks: {
    render: {
      route(url, result, context) {
        const userAgents = new RegExp(
          "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot|Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2|GTmetrix|Phantomas",
          "i"
        );
        const lightHouse = new RegExp("lighthouse", "i");
        const userAgent = (context.req.headers["user-agent"] || "").substr(
          0,
          500
        );

        const shouldPrune =
          userAgents.test(userAgent) || lightHouse.test(userAgent);
        if (shouldPrune) {
          // Prune html
          const $ = load(result.html);
          for (const s of [
            'link[rel="preload"][as="script"]',
            'script:not([type="application/ld+json"])',
          ]) {
            $(s).remove();
          }

          // Display data
          for (const selector of [
            "#scrollableHeader",
            "#indexPage",
            "#legalLayout",
            "#aboutPage",
            "#businessPage",
            "#faqPage",
            "#bookingPage",
            "#indexPromoPage",
            "#leadPromoPage",
            "#indexPricePage",
            "#bricodepotPage",
            "#livensaPage",
            "#landingPage",
            "#ciudadelaPage",
            "#c200Page",
            "#weWorkPage",
            "#studentsPage",
            "#resaPage",
            "#logisticsPage",
          ]) {
            $(selector).css("display", "");
          }

          result.html = $.html();
        }
      },
    },
  },

  "google-gtag": {
    id: process.env.GOOGLE_TAG_ID,
    disableAutoPageTrack: true,
    additionalAccounts: [
      {
        id: process.env.GOOGLE_TAG_ADWORDS_ID,
        config: {
          phone_conversion_number: "919 033 033",
        },
      },
    ],
  },
};
