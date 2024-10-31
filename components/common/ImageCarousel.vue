<template>
  <div class="carousel-container">
    <button class="carousel-control left" @click="prevSlide">&#10094;</button>
    <div class="carousel-wrapper">
      <div class="carousel" :style="carouselStyle" @transitionend="handleTransitionEnd">
        <SingleCard
          v-for="(slide, index) in slides"
          :key="index"
          :slide="slide"
          :class="{ active: index >= currentIndex && index < currentIndex + 3 }"
        />
      </div>
    </div>
    <button class="carousel-control right" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script>
import SingleCard from '@/components/common/SingleCard.vue';

export default {
  name: "ImageCarousel",
  components: {
    SingleCard,
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      transitioning: false,
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * (100 / 3)}%)`, // Adjusted for 3 cards at a time
        transition: this.transitioning ? "transform 0.5s ease-in-out" : "none",
      };
    },
  },
  methods: {
    nextSlide() {
      if (!this.transitioning && this.currentIndex < this.slides.length - 3) {
        this.currentIndex++;
        this.transitioning = true;
      }
    },
    prevSlide() {
      if (!this.transitioning && this.currentIndex > 0) {
        this.currentIndex--;
        this.transitioning = true;
      }
    },
    handleTransitionEnd() {
      this.transitioning = false;
    },
  },
};
</script>

<style scoped>
.carousel-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel {
  display: flex;
  width: 300%; /* Width for 3 cards at a time */
}

.carousel-card {
  flex: 0 0 31.7%; /* Show 3 cards in one view */
  text-align: center;
  padding: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.carousel-control.left {
  left: 2px; /* Position the left button outside the carousel images */
}

.carousel-control.right {
  right: 2px; /* Position the right button outside the carousel images */
}
</style>
