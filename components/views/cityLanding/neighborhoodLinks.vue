<template>
  <div
    class="flex w-full justify-center items-center flex-col space-y-8 col-span-full"
  >
    <div
      :style="cssNeighborhoods"
      class="grid grid-cols-3 col-span-4 gap-x-6 mobileL:grid-cols-1 mobileL:col-span-full mobile:grid-cols-1 mobile:col-span-full z-[1] slide w-full"
      :class="{ 'slide-expanded': isExpanded }"
    >
      <nuxt-link
        class="first-letter:uppercase locations hover:underline mt-9 h-8 z-[1]"
        :to="localePath(`/${routePath}/${item.search_key}`)"
        v-for="(item, neighborhoodsIndex) in neighborhoods"
        :key="neighborhoodsIndex"
      >
        {{ $t(`loc_prefix_${routePath}`) }}
        <span class="capitalize">
          {{ item.display_name }}
        </span>
      </nuxt-link>
    </div>

    <div
      class="flex w-full items-center justify-center"
      v-if="neighborhoods.length > minItemsToShow"
    >
      <div
        class="cursor-pointer"
        :class="{ 'rotate-180': isExpanded }"
        @click="isExpanded = !isExpanded"
      >
        <chevron-icon
          class="fill-electric w-6 h-6 animate-bounce"
        ></chevron-icon>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "neighborhoodLinks",
  components: {
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
  },
  data() {
    return {
      isExpanded: false,
      minItemsToShow: 9,
    };
  },
  computed: {
    ...mapState("landingCities", {
      neighborhoods: (state) => state.neighborhoods,
    }),
    routePath() {
      return this.$route.name.split("-")[0];
    },
    cssNeighborhoods() {
      return {
        "--neighborhood-size": this.neighborhoods.length,
        "--neighborhood-desktop":
          this.neighborhoods.length / 3 + (this.neighborhoods.length % 3),
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.slide {
  @apply transition-all ease-in-out duration-1000 overflow-hidden max-h-[calc(68px*3)] mobileL:max-h-[calc(68px*9)] mobile:max-h-[calc(68px*9)];
}
.slide-expanded {
  @apply transition-all ease-in-out duration-[1.4s] max-h-[calc(68px*var(--neighborhood-desktop))] mobileL:max-h-[calc(68px*var(--neighborhood-size))] mobile:max-h-[calc(68px*var(--neighborhood-size))];
}
</style>
<i18n lang="yaml" locale="es">
loc_prefix_warehouses: "Trasteros en"
loc_prefix_storages: "Guardamuebles en"
</i18n>
<i18n lang="yaml" locale="fr">
loc_prefix_warehouses: "Stockage dans"
loc_prefix_storages: "Gardemuebles dans"
</i18n>
<i18n lang="yaml" locale="it">
loc_prefix_warehouses: "Deposito in"
loc_prefix_storages: "Deposito mobili in "
</i18n>
<i18n lang="yaml" locale="pt">
loc_prefix_warehouses: "Armazéns em "
loc_prefix_storages: "Guarda-móveis em "
</i18n>
<i18n lang="yaml" locale="mx">
loc_prefix_warehouses: "Mini Bodegas en"
loc_prefix_storages: "Mini Bodegas en"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/views/neighborhoodLinks.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/views/neighborhoodLinks.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/views/neighborhoodLinks.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/views/neighborhoodLinks.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/views/neighborhoodLinks.yaml"
></i18n>
