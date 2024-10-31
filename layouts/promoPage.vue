<template>
  <div class="bg-white h-full">
    <div class="fixed top-0 w-full z-[40]">
      <ui-header :displayCitySelector="false"></ui-header>
    </div>
    <nuxt />
  </div>
</template>
<script>
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "landingPage",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
  },
  head() {
    return this.nuxtI18nHeadFixer();
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
};
</script>
