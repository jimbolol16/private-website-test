<template>
  <div id="storageSolutionPage">
    <h1 class="page-title">La soluzione per ogni esigenza di stoccaggio</h1>
    <ImageCarousel :slides="slides" />
    <button @click="handleButtonClick" class="primary-button">
      La soluzione per ogni esigenza di stoccaggio
    </button>
  </div>
</template>

<script>
import ImageCarousel from '@/components/common/ImageCarousel.vue';

export default {
  name: "StorageSolutionPage",
  components: {
    ImageCarousel,
  },
  data() {
    return {
      slides: [
        {
          image: '/aboutus/Depósito BOX2BOX.jpg',
          title: 'attrezzatura',
          description: 'Garantiamo la sicurezza e l\'integrità di materiale fragile o tecnico durante il trasporto e durante la permanenza nel nostro deposito.',
        },
        {
          image: '/aboutus/Transporte BOX2BOX.jpg',
          title: 'Conservazioni Archivi',
          description: 'Custodiamo vari tipi di documentazioni cartacee, classificando ogni articolo per facilitarne la riconsegna e la consultazione.',
        },
        {
          image: '/aboutus/Montaje y desmontaje BOX2BOX.jpg',
          title: 'Stoccaggio Prodotti Finiti',
          description: 'Offriamo soluzioni di stoccaggio per prodotti finiti, garantendo l\'ottimizzazione dello spazio e l\'efficienza logistica.',
        },
        {
          image: '/aboutus/Trasloco BOX2BOX.jpg',
          title: 'Stoccaggio Prodotti Finiti',
          description: 'Offriamo soluzioni di stoccaggio per prodotti finiti, garantendo l\'ottimizzazione dello spazio e l\'efficienza logistica.',
        },
        {
          image: '/aboutus/10.jpg',
          title: 'Stoccaggio Prodotti Finiti',
          description: 'Offriamo soluzioni di stoccaggio per prodotti finiti, garantendo l\'ottimizzazione dello spazio e l\'efficienza logistica.',
        },
        {
          image: '/aboutus/Reconocer parciales - BOX2BOX.jpg',
          title: 'Stoccaggio Prodotti Finiti',
          description: 'Offriamo soluzioni di stoccaggio per prodotti finiti, garantendo l\'ottimizzazione dello spazio e l\'efficienza logistica.',
        },
      ],
    };
  },
  methods: {
    handleButtonClick() {
      this.$router.push('/contact');
    },
  },
};
</script>

<style scoped>
#storageSolutionPage {
  padding: 1rem;
  text-align: center;
  background-color: #fff;
}

.page-title {
  font-size: 2.25rem;
  color: #333333;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.primary-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: #ffffff;
  background-color: #0056b3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.primary-button:hover {
  background-color: #003a80;
}
</style>
