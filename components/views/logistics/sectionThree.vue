<template>
  <ui-card-viewer
    :headerTitle="$t('sec3_main_title')"
    :title="$t('sec3_title')"
    class="bg-white w-full"
  >
    <template v-slot:card1>
      <ui-card-section-three
        :title="$t('sec3_card_1_title')"
        :body="$t('sec3_card_1_body')"
        :imageSrc="'/aboutus/9.jpg'" 
        :imageAlt="'Imagen de Madrid'"
        class="hoverable-card"
      >
        <!-- Añadimos el botón en la parte inferior de la Card 1 -->
        <div class="mt-4 flex justify-center">
          <ui-button @click="scrollToTop">
            Saber más
          </ui-button>
        </div>
      </ui-card-section-three>
    </template>

    <template v-slot:card2>
      <ui-card-section-three
        :title="$t('sec3_card_2_title')"
        :body="$t('sec3_card_2_body')"
        :imageSrc="'/aboutus/13.jpg'"
        :imageAlt="'Entregas flexibles'"
        class="hoverable-card" 
      >
        <!-- Añadimos el botón en la parte inferior de la Card 2 -->
        <div class="mt-4 flex justify-center">
          <ui-button @click="scrollToTop">
            Saber más
          </ui-button>
        </div>
      </ui-card-section-three>
    </template>

    <template v-slot:card3>
      <ui-card-section-three
        :title="$t('sec3_card_3_title')"
        :body="$t('sec3_card_3_body')"
        :imageSrc="'/aboutus/5.jpg'"
        :imageAlt="'Seguimiento de stocks'"
        class="hoverable-card"
      >
        <!-- Añadimos el botón en la parte inferior de la Card 3 -->
        <div class="mt-4 flex justify-center">
          <ui-button @click="scrollToTop">
            Saber más
          </ui-button>
        </div>
      </ui-card-section-three>
    </template>
  </ui-card-viewer>
</template>

<script>
export default {
  name: "businessSectionThree",

  components: {
    "ui-card-section-three": async () =>
      await import("@/components/common/sectionThree/uiCardSectionThree.vue"),
    "ui-card-viewer": async () =>
      await import("@/components/common/sectionThree/uiCardViewer.vue"),
    "ui-button": async () =>
      await import("@/components/uiButton.vue"), // Añadir el componente del botón
  },
  methods: {
    scrollToTop() {
      // Hace scroll hacia la parte superior de la página
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Para un desplazamiento suave
      });
    },
  },
};
</script>

<style scoped>
/* Añadimos estilos para los efectos de hover */
.hoverable-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hoverable-card:hover {
  transform: translateY(-10px); /* Eleva la tarjeta hacia arriba */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Añade sombra */
}
</style>

<i18n lang="yaml" locale="es">
sec3_main_title: "Logística integral"
sec3_title: "Nuestros servicios"
sec3_card_1_title: "Almacenaje flexible"
sec3_card_1_body: "Adapta el espacio de almacenamiento según las variaciones estacionales de tu inventario. Paga por el espacio que utilizas."
sec3_card_2_title: "Entregas flexibles"
sec3_card_2_body: "Programa entregas según tus necesidades, con opciones que van desde envíos inmediatos hasta planificaciones a largo plazo."
sec3_card_3_title: "Seguimiento de stocks"
sec3_card_3_body: "Monitorea tu inventario en tiempo real con nuestra plataforma digital, accesible desde cualquier dispositivo y en cualquier momento"
</i18n>
<i18n lang="yaml" locale="fr">
sec3_main_title: ""
sec3_title: ""
sec3_card_1_title: ""
sec3_card_1_body: ""
sec3_card_2_title: ""
sec3_card_2_body: ""
sec3_card_3_title: ""
sec3_card_3_body: ""
</i18n>
<i18n lang="yaml" locale="it">
sec3_main_title: ""
sec3_title: ""
sec3_card_1_title: ""
sec3_card_1_body: ""
sec3_card_2_title: ""
sec3_card_2_body: ""
sec3_card_3_title: ""
sec3_card_3_body: ""
</i18n>
<i18n lang="yaml" locale="pt">
sec3_main_title: ""
sec3_title: ""
sec3_card_1_title: ""
sec3_card_1_body: ""
sec3_card_2_title: ""
sec3_card_2_body: ""
sec3_card_3_title: ""
sec3_card_3_body: ""
</i18n>
<i18n lang="yaml" locale="mx">
sec3_main_title: ""
sec3_title: ""
sec3_card_1_title: ""
sec3_card_1_body: ""
sec3_card_2_title: ""
sec3_card_2_body: ""
sec3_card_3_title: ""
sec3_card_3_body: ""
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/logistics/sectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/logistics/sectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/logistics/sectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/logistics/sectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/logistics/sectionThree.yaml"
></i18n>