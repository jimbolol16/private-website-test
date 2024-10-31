<!-- ArticlePage.vue -->
<template>
  <div class="article-page">
    <h1 class="page-title">Featured Publications</h1>
    <publication-carousel />
  </div>
</template>

<script>
import PublicationCarousel from "@/components/common/PublicationCarousel.vue";

export default {
  name: "ArticlePage",
  components: {
    PublicationCarousel,
  },
};
</script>

<style scoped>
.article-page {
  text-align: center;
  padding: 2rem;
  padding-bottom: 85px;
  background-color: #f9f9f9;
}

.page-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}
</style>
