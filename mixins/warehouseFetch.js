import { mapState } from "vuex";
const warehouseCities = {
  async fetch() {
    try {
      const currentSite = this.$i18n.locales.find(
        (i) => i.code === this.$i18n.locale
      );

      // Load warehouses only if we don't have them on the store yet
      if (this.cities?.length === 0) {
        const response = await this.$api.$get("/api/footer-cities", {
          params: {
            site: currentSite.country,
            lang: currentSite.simplifiedLang,
            type: "warehouses",
          },
        });

        // Update dom
        this.$store.dispatch("homeMetadata/SET_CITIES", response.cities);
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  computed: {
    ...mapState("homeMetadata", {
      cities: (state) => state.cities,
    }),
  },
};
export default warehouseCities;
