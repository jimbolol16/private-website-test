<template>
  <nuxt />
</template>

<script>
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "defaultLayout",
  head() {
    return this.nuxtI18nHeadFixer();
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
};
</script>
