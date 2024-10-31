const nuxtI18nHeadFixer = {
  methods: {
    /**
     * Workaround to add trailing slashes into canonical if it is present in the url
     * because nuxtI18nHead does not inject it by default
     */
    nuxtI18nHeadFixer(addedLocales = null) {
      const headMetadata = this.$nuxtI18nHead({ addSeoAttributes: true });
      const locales = addedLocales || this.$route.meta?.nuxtI18n?.locales;

      // Check if current path ends with slash
      const endsRouteWithSlash = this.$route.path.endsWith("/");

      // Find canonical link on array
      const canonicalIndex = headMetadata.link.findIndex(
        (link) => link.hid === "i18n-can"
      );
      const canonicalHref = headMetadata.link[canonicalIndex].href;

      // Check if canonicalHref ends with slash
      const endsCanonicalWithSlash = canonicalHref.endsWith("/");

      // Check if canonical link is consistent with trailing slashes
      if (endsRouteWithSlash) {
        if (!endsCanonicalWithSlash) {
          // Replace it
          headMetadata.link[canonicalIndex].href = `${canonicalHref}/`;
        }
      } else {
        if (endsCanonicalWithSlash) {
          // Replace it
          headMetadata.link[canonicalIndex].href = `${canonicalHref.slice(
            0,
            -1
          )}`;
        }
      }

      // Remove only country hreflangs (4.5 auditory workaround)
      headMetadata.link = headMetadata.link.filter((entry) => {
        const isOnlyCountryHrefLang =
          entry.hid.startsWith("i18n-alt") &&
          entry.hreflang.split("-")[0] === entry.hreflang;

        // Filter links if locales meta variable is in component
        if (locales) {
          const localeSplit = entry.hreflang?.toLowerCase().split("-") || [];
          const isSameLocale =
            localeSplit.length > 1 && localeSplit[0] === localeSplit[1]; // es-ES, it-IT, etc.
          const isValidLocale =
            locales.indexOf(localeSplit[0]) !== -1
              ? isSameLocale
              : locales.indexOf(localeSplit.reverse().join("-")) !== -1;
          return (
            !isOnlyCountryHrefLang &&
            (isValidLocale ||
              (!isValidLocale && entry.hreflang === "x-default"))
          );
        }

        return !isOnlyCountryHrefLang;
      });

      headMetadata.meta = headMetadata.meta.filter((entry) => {
        // Filter links if locales meta variable is in component
        if (locales && entry.hid.indexOf("i18n-og") !== -1) {
          const localeSplit = entry.content?.toLowerCase().split("_") || [];
          const isSameLocale =
            localeSplit.length > 1 && localeSplit[0] === localeSplit[1]; // es-ES, it-IT, etc.
          const isValidLocale =
            locales.indexOf(localeSplit[0]) !== -1
              ? isSameLocale
              : locales.indexOf(localeSplit.reverse().join("-")) !== -1;

          return isValidLocale;
        }

        return true;
      });
      return headMetadata;
    },
  },
};

export default nuxtI18nHeadFixer;
