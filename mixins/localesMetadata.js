const currentSite = {
  computed: {
    localeMetadata() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale);
    },
  },
};
export default currentSite;
