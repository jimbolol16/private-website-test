export const locales = [
  {
    code: "es",
    iso: "es-ES",
    flag: "es",
    label: {
      name: "es",
      format: "svg",
    },
    country: "es",
    simplifiedLang: "es",
    complementary: false,
    availableLocales: [
      {
        code: "es-en",
        flag: "en",
      },
    ],
  },
  {
    code: "es-en",
    iso: "en-ES",
    flag: "en",
    label: {
      name: "en",
      format: "svg",
    },
    country: "es",
    simplifiedLang: "en",
    complementary: true,
    availableLocales: [
      {
        code: "es",
        flag: "es",
      },
    ],
  },
  {
    code: "pt",
    iso: "pt-PT",
    flag: "pt",
    label: {
      name: "pt",
      format: "svg",
    },
    country: "pt",
    simplifiedLang: "pt",
    complementary: false,
    availableLocales: [
      {
        code: "pt-en",
        flag: "en",
      },
    ],
  },
  {
    code: "pt-en",
    iso: "en-PT",
    flag: "en",
    label: {
      name: "en",
      format: "svg",
    },
    country: "pt",
    simplifiedLang: "en",
    complementary: true,
    availableLocales: [
      {
        code: "pt",
        flag: "pt",
      },
    ],
  },
  {
    code: "fr",
    iso: "fr-FR",
    flag: "fr",
    label: {
      name: "fr",
      format: "svg",
    },
    country: "fr",
    simplifiedLang: "fr",
    complementary: false,
    availableLocales: [
      {
        code: "fr-en",
        flag: "en",
      },
    ],
  },
  {
    code: "fr-en",
    iso: "en-FR",
    flag: "en",
    label: {
      name: "en",
      format: "svg",
    },
    country: "fr",
    simplifiedLang: "en",
    complementary: true,
    availableLocales: [
      {
        code: "fr",
        flag: "fr",
      },
    ],
  },
  {
    code: "it",
    iso: "it-IT",
    flag: "it",
    label: {
      name: "it",
      format: "svg",
    },
    country: "it",
    simplifiedLang: "it",
    complementary: false,
    availableLocales: [
      {
        code: "it-en",
        flag: "en",
      },
    ],
  },
  {
    code: "it-en",
    iso: "en-IT",
    flag: "en",
    label: {
      name: "en",
      format: "svg",
    },
    country: "it",
    simplifiedLang: "en",
    complementary: true,
    availableLocales: [
      {
        code: "it",
        flag: "it",
      },
    ],
  },
  {
    code: "mx",
    iso: "es-MX",
    flag: "mx",
    label: {
      name: "mx",
      format: "svg",
    },
    country: "mx",
    simplifiedLang: "mx",
    derivedLang: "es", // Needed for accept-language header to fetch countries
    complementary: false,
    availableLocales: [
      {
        code: "mx-en",
        flag: "us",
      },
    ],
  },
  {
    code: "mx-en",
    iso: "en-MX",
    flag: "us",
    label: {
      name: "us",
      format: "svg",
    },
    country: "mx",
    simplifiedLang: "en",
    complementary: true,
    availableLocales: [
      {
        code: "mx",
        flag: "mx",
      },
    ],
  },
];
