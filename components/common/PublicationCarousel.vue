<!-- PublicationCarousel.vue -->
<template>
  <div class="carousel-container">
    <!-- Wrapper for the carousel cards -->
    <div class="carousel-wrapper">
      <div class="carousel">
        <publication-card
          v-for="(publication, index) in publications"
          :key="index"
          :publication="publication"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PublicationCard from "@/components/common/PublicationCard.vue";

export default {
  name: "PublicationCarousel",
  components: {
    PublicationCard,
  },
  data() {
    return {
      publications: [
        { logo: "elreferente.svg", alt: "El Referente", text: "Box2box realiza la recogida y entrega de objetos a domicilio y reduce en un 30% el precio comparado con un trastero clásico." },
        { logo: "elpais.svg", alt: "EL PAÍS", text: "¿Y si además de almacenar, recogen los enseres y los devuelven cuando el cliente los necesita? Es lo que hace la start-up Box2box," },
        { logo: "elmundo.svg", alt: "EL MUNDO", text: "En Box2box cuidan mucho el trato al usuario para romper esa imagen fría e impersonal de los transportistas." },
        { logo: "diarioqueretaro.svg", alt: "Diario de Querétaro", text: "Con Box2box, el usuario únicamente paga por los m2 que realmente necesita para resguardar sus cosas por el tiempo que desee." },
        { logo: "efe.svg", alt: "EFE", text: "The quick and safe solution to leave your objects, furniture, and furnishings for any period of time." },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel-wrapper {
  overflow: visible; /* Allows the full set of cards to show */
  width: 100%;
}

.carousel {
  display: flex;
}
</style>
