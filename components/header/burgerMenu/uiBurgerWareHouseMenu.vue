<template>
  <div v-click-outside="handleClose">
    <div
      class="flex flex-row items-center gap-x-1 font-extrabold text-[34px] leading-[38px] font-manrope hover:cursor-pointer"
      @click="handleChange"
      :id="whatIs"
    >
      {{ $t(`hea_drop_${whatIs}`) }}
      <div>
        <chevron-icon
          class="fill-dark w-[32px] h-[32px]"
          :class="[openedMenu ? 'rotate-180' : '']"
        ></chevron-icon>
      </div>
    </div>
    <ul v-if="openedMenu" class="list-none flex flex-col mt-[22px]">
      <nuxt-link
        v-for="(city, index) in cities"
        :key="index"
        :class="city.key === currentCity ? 'text-electric' : ''"
        class="font-manrope capitalize px-4 hover:text-electric border-l-2 border-dark font-bold text-[20px] leading-[29px] cursor-pointer"
        :to="localePath(`/${whatIs}/${city.key}`)"
      >
        {{ city.name }}
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import warehouseFetchMixin from "@/mixins/warehouseFetch";
import ClickOutside from "vue-click-outside";

export default {
  name: "uiBurgerWareHouseMenu",
  directives: {
    ClickOutside,
  },
  components: {
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
  },
  props: {
    openedDropdown: {
      type: Boolean,
      default: false,
    },
    whatIs: {
      type: String,
      default: "warehouses",
    },
  },
  mixins: [warehouseFetchMixin],
  data() {
    return {
      openedMenu: this.openedDropdown,
    };
  },
  computed: {
    ...mapState("landingCities", {
      currentCity: (state) => state.city.city,
    }),
  },
  methods: {
    handleChange() {
      this.openedMenu = !this.openedMenu;
    },

    /**
     * With openedDropdown watch, allow the component to handle outside clicks closing sibling instances of itself
     * only if the user clicks in another dropdown menu
     */
    handleClose(ev) {
      if (ev.target.id) this.$emit("clicked");
    },
  },
  watch: {
    /**
     * Handle active tab on route path change for localized page
     */
    "$route.path": function () {
      // Close the popup menu
      this.$emit("close");
    },
    openedDropdown: function (newValue) {
      if (this.openedMenu !== newValue) {
        setTimeout(() => {
          this.openedMenu = newValue;
        }, 100);
      }
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
  src="@/i18n/components/uiBurgerWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiBurgerWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiBurgerWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiBurgerWarehouseMenu.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiBurgerWarehouseMenu.yaml"
></i18n>
