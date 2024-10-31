<template>
  <div class="h-full">
    <div class="fixed top-0 w-full z-[40]">
      <ui-header
        headerColor="header-white"
        :displayCitySelector="false"
        :displayBurgerMenu="false"
        redirectPath="/logistics"
        :displayStorages="false"
        :displayWarehouses="false"
        :displayLocaleMenu="false"
        :displayPrivateArea="false"
      ></ui-header>
    </div>
    <nuxt />
    <ui-whatsapp-widget></ui-whatsapp-widget>
  </div>
</template>
<script>
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "logisticsPage",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "ui-whatsapp-widget": async () =>
      await import("@/components/uiWhatsappWidget.vue"),
  },
  head() {
    return this.nuxtI18nHeadFixer();
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
};
</script>
