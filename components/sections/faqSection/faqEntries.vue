<template>
  <div class="flex flex-col w-full spacing">
    <faq-content
      v-for="(item, index) in entries"
      :key="item._id"
      :title="item.title"
      :expanded="index === 0"
    >
      {{ item.body }}
    </faq-content>
  </div>
</template>
<script>
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "faqSectionEntries",
  components: {
    "faq-content": async () =>
      await import("@/components/sections/faqSection/faqContent.vue"),
  },
  async fetch() {
    // Bring subset of faq data from server
    try {
      const response = await this.$api.$get("/api/home-faqs", {
        params: {
          site: this.localeMetadata.country,
          lang: this.localeMetadata.simplifiedLang,
        },
      });

      // Update dom
      this.entries = response;

      // Save the content for SEO purposes
      this.$store.dispatch("seo/SET_FAQ_CONTENT", response);
    } catch (error) {
      throw new Error(error);
    }
  },
  mixins: [localesMetadata],
  data() {
    return {
      entries: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.spacing > div:not(:first-child) {
  @apply pt-5;
}
</style>
