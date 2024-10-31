<template>
  <div class="h-full">
    <div class="fixed top-0 w-full z-[40]">
      <ui-site-switcher class="relative"></ui-site-switcher>
      <ui-header headerColor="header-white"></ui-header>
    </div>
    <nuxt />
    <ui-whatsapp-widget></ui-whatsapp-widget>
  </div>
</template>
<script>
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "aboutPage",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "ui-whatsapp-widget": async () =>
      await import("@/components/uiWhatsappWidget.vue"),
    "ui-site-switcher": async () =>
      await import("@/components/uiSiteSwitcher.vue"),
  },
  head() {
    return this.nuxtI18nHeadFixer();
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
};
</script>
