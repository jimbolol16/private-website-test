<template>
  <div
    class="fixed z-50 w-full bg-gray-50 left-0 top-0 m-auto mt-[64px] h-full bg-white/95 backdrop-blur-md flex items-center mobileL:col-span-8 mobile:col-span-4 col-span-12"
  >
    <div class="grid-layout w-full">
      <div
        class="space-y-8 col-start-2 mobile:col-start-1 mobile:col-span-3 col-span-4"
      >
        <ui-burger-menu-warehouse
          :openedDropdown="openedDropDown === 1"
          whatIs="warehouses"
          @close="$emit('close')"
          @clicked="openedDropDown = 2"
        ></ui-burger-menu-warehouse>
        <ui-burger-menu-warehouse
          :openedDropdown="openedDropDown === 2"
          whatIs="storages"
          @close="$emit('close')"
          @clicked="openedDropDown = 1"
          v-if="localeMetadata.country !== 'mx'"
        ></ui-burger-menu-warehouse>
        <ui-header-link
          :text="$t('bur_drop_1')"
          :to="$t('bur_drop_1_link')"
          :externalLink="true"
          class="headerBurgerFont"
        >
        </ui-header-link>
      </div>
      <div class="col-start-2 mobile:col-start-1 row-start-2">
        <ui-locale-menu
          dropdownPosition="top"
          class="absolute bottom-0 mb-[96px]"
        ></ui-locale-menu>
      </div>
      <div
        class="col-start-12 mobileL:hidden mobile:hidden col-span-1 flex justify-center"
      >
        <nuxt-img
          :provider="$config.img_provider"
          src="/calculator/close-button.svg"
          alt="closebutton"
          class="absolute cursor-pointer w-[32px] h-[32px] top-0 mt-[28px]"
          @click="$emit('close')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "uiBurguerMenu",
  components: {
    "ui-burger-menu-warehouse": async () =>
      await import("@/components/header/burgerMenu/uiBurgerWareHouseMenu.vue"),
    "ui-header-link": async () =>
      await import("@/components/header/uiHeaderLink.vue"),
    "ui-locale-menu": async () =>
      await import("@/components/header/uiLocaleMenu.vue"),
  },
  mixins: [localesMetadata],
  data() {
    return {
      openedDropDown: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.headerBurgerFont {
  @apply font-manrope font-extrabold text-[34px] leading-[38px];
}
</style>
<i18n lang="yaml" locale="es">
bur_drop_1: "Área personal"
bur_drop_1_link: "https://app.box2box.es/"
</i18n>
<i18n lang="yaml" locale="fr">
bur_drop_1: "Espace personnel"
bur_drop_1_link: "https://app.box2box.io/"
</i18n>
<i18n lang="yaml" locale="it">
bur_drop_1: "Area personale"
bur_drop_1_link: "https://app.box2box.it/"
</i18n>
<i18n lang="yaml" locale="pt">
bur_drop_1: "Área pessoal"
bur_drop_1_link: "https://app.box2box.net/"
</i18n>
<i18n lang="yaml" locale="mx">
bur_drop_1: "Área personal"
bur_drop_1_link: "https://app.box2box.es/"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiBurguerMenu/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiBurguerMenu/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiBurguerMenu/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiBurguerMenu/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiBurguerMenu/en_mx.yaml"
></i18n>
