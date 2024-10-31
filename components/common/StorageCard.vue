<template>
  <div class="carousel-card">
    <img :src="slide.image" alt="Slide Image" />
    <div class="slide-info">
      <h2>{{ slide.title }}</h2>
      <p>{{ slide.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StorageCard",
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.carousel-card {
  flex: 0 0 100%;
  text-align: center;
  padding: 0;
  background: none;
  border: none;
}

.carousel-card img {
  width: 100%;
  border-radius: 8px;
}

.slide-info {
  margin-top: 1rem;
}

.slide-info h2 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
}

.slide-info p {
  font-size: 0.9rem;
  color: #666666;
}
</style>
