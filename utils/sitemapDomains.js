const sitemapDomains = {
  es: {
    hostname: process.env.NUXT_ES_HOSTNAME,
    paths: {
      es: "/",
      en: "/en/",
    },
  },
  fr: {
    hostname: process.env.NUXT_FR_HOSTNAME,
    paths: {
      fr: "/",
      en: "/en/",
    },
  },
  pt: {
    hostname: process.env.NUXT_PT_HOSTNAME,
    paths: {
      pt: "/",
      en: "/en/",
    },
  },
  it: {
    hostname: process.env.NUXT_IT_HOSTNAME,
    paths: {
      it: "/",
      en: "/en/",
    },
  },
};

export { sitemapDomains };
