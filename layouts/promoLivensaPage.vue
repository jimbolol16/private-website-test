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

export default {
  name: "promoLivensaPage",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
  },
  mixins: [injectGclid],
};
</script>
