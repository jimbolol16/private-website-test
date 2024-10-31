<template>
  <div class="our-clients-section max-w-7xl mx-auto">
    <h2 class="text-center mb-6">{{ $t("our_clients_title") }}</h2>
    <div class="carousel-wrapper">
      <div
        class="carousel"
        :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`, transitionDuration: isResetting ? '0s' : '0.5s' }"
        @transitionend="onTransitionEnd"
      >
        <div class="carousel-item" v-for="(logo, index) in infiniteLogos" :key="index">
          <nuxt-img :src="logo.src" :alt="logo.alt" class="client-logo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurClients",
  data() {
    return {
      currentIndex: 0,
      visibleItems: 3, // Mostrar 3 elementos a la vez
      isResetting: false, // Para evitar la animación cuando reseteamos el carrusel
      logos: [
        { src: '/aboutus/logoBricodepot.png', alt: 'BricoDepot' },
        { src: '/aboutus/logoCBRE.png', alt: 'CBRE' },
        { src: '/aboutus/logociudadela.png', alt: 'Ciudadela' },
        { src: '/aboutus/logocreand.png', alt: 'Creand' },
        { src: '/aboutus/logolivensa.png', alt: 'Livensa' },
        { src: '/aboutus/logosanitas.png', alt: 'Sanitas' },
        { src: '/aboutus/logosuperdry.png', alt: 'Superdry' },
        { src: '/aboutus/logowework.png', alt: 'WeWork' }
      ],
      intervalId: null // Guardar la referencia del intervalo para detenerlo si es necesario
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // Limpiar el intervalo cuando el componente se destruye
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        if (!this.isResetting) {
          this.currentIndex++;
        }
      }, 2000); // Cambia cada 2 segundos
    },
    onTransitionEnd() {
      // Si llegamos al final de la primera lista de logos (cuando `currentIndex` supera la longitud real de los logos)
      if (this.currentIndex >= this.logos.length) {
        this.isResetting = true; // Deshabilitar transición
        this.currentIndex = 0;   // Reiniciar el índice a 0
        setTimeout(() => {
          this.isResetting = false; // Rehabilitar transición después de que se haga el reset
        }, 50); // Esperar un pequeño tiempo para aplicar el cambio
      }
    },
  },
  computed: {
    // Crea una lista "infinita" duplicando los logos
    infiniteLogos() {
      return [...this.logos, ...this.logos]; // Duplicar los logos para un efecto de scroll infinito
    },
  },
};
</script>

<style scoped>
.our-clients-section {
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 33.33%; /* Mostrar 3 logos a la vez */
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-logo {
  max-width: 150px;
  object-fit: contain;
}
</style>

<i18n lang="yaml" locale="es">
our_clients_title: "Estás en buenas manos"
</i18n>
<i18n lang="yaml" locale="fr">
our_clients_title: ""
</i18n>
<i18n lang="yaml" locale="it">
our_clients_title: ""
</i18n>
<i18n lang="yaml" locale="pt">
our_clients_title: ""
</i18n>
<i18n lang="yaml" locale="mx">
our_clients_title: ""
</i18n>
