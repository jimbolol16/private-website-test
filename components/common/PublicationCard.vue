<!-- PublicationCard.vue -->
<template>
  <div class="publication-card">
    <!-- SVG logos are loaded with `nuxt-img` or `img` based on your setup -->
    <nuxt-img
      :src="`/aboutus/${publication.logo}`"
      :alt="publication.alt"
      class="logo"
      loading="lazy"
    />
    <p class="text">{{ publication.text }}</p>
  </div>
</template>

<script>
export default {
  name: "PublicationCard",
  props: {
    publication: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.publication-card {
  width: 500px;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 120px; /* Ensure all logos have the same width */
  height: 120px; /* Set a fixed height for consistent sizing */
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain; /* Ensures the logo scales while maintaining aspect ratio */
}

.text {
  font-size: 0.9rem;
  color: #666;
}
</style>
