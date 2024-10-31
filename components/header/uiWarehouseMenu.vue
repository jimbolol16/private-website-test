<template>
  <ui-popup-base-menu ref="popupMenu">
    <template v-slot:selected="{ openedMenu }">
      <div class="flex flex-row items-center gap-x-1">
        {{ $t(`hea_drop_${whatIs}`) }}
        <chevron-icon
          class="w-4 h-4"
          :class="[openedMenu ? 'rotate-180' : '', parentClass || 'fill-dark']"
        ></chevron-icon>
      </div>
    </template>
    <template slot="list">
      <ul class="space-y-2 list-none flex flex-col">
        <nuxt-link
          v-for="(city, index) in cities"
          :key="index"
          class="capitalize px-4 hover:bg-soft/50"
          :to="localePath(`/${whatIs}/${city.key}`)"
        >
          {{ city.name }}
        </nuxt-link>
      </ul>
    </template>
  </ui-popup-base-menu>
</template>

<script>
import warehouseFetchMixin from "@/mixins/warehouseFetch";

export default {
  name: "uiWarehouseMenu",
  components: {
    "ui-popup-base-menu": async () =>
      await import("@/components/uiPopupMenu/uiPopupBaseMenu.vue"),
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
  },
  props: {
    parentClass: {
      type: String,
      default: null,
    },
    whatIs: {
      type: String,
      default: "warehouses",
    },
  },
  mixins: [warehouseFetchMixin],
  watch: {
    /**
     * Handle active tab on route path change for localized page
     */
    "$route.path": function () {
      // Close the popup menu
      this.$refs.popupMenu.handleClose();
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
hea_drop_warehouses: "Trasteros"
hea_drop_storages: "Guardamuebles"
</i18n>
<i18n lang="yaml" locale="fr">
hea_drop_warehouses: "Stockage"
hea_drop_storages: "Garde-meubles"
</i18n>
<i18n lang="yaml" locale="it">
hea_drop_warehouses: "Depositi"
hea_drop_storages: "Magazzino"
</i18n>
<i18n lang="yaml" locale="pt">
hea_drop_warehouses: "Armazéns"
hea_drop_storages: "Guarda-móveis"
</i18n>
<i18n lang="yaml" locale="mx">
hea_drop_warehouses: "Mini bodegas"
hea_drop_storages: "Mini bodegas"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiWarehouseMenu.yaml"
></i18n>
