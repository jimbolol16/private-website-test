<template>
  <nuxt-child />
</template>
<script>
export default {
  name: "pricesWizardIndex",
  layout: "wizardPage",
  head() {
    return {
      title: this.$t("title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta_description"),
        },
      ],
    };
  },
  meta: {
    pageName: "prices",
  },
  beforeDestroy() {
    // Before leave the price wizard paths, reset vuex state
    this.$store.dispatch("pricesWizard/RESET_ALL");
  },
};
</script>
<i18n lang="yaml" locale="es">
title: "🥇 Calcular precio - Trasteros | Box2box"
meta_description: "Consigue Aquí los Precios más Competitivos para Alquiler tu Trastero Online Con Recogida a Domicilio Gratis. Transporte Incluido en el servicio.✅✅"
</i18n>
<i18n lang="yaml" locale="fr">
title: "🥇 Calculer le prix - Stockage | Box2box"
meta_description: "Obtenez ici les prix les plus compétitifs pour la location de votre espace de stockage en ligne avec la collecte gratuite à domicile. Transport Inclus dans le service. ✅✅"
</i18n>
<i18n lang="yaml" locale="it">
title: "🥇 Calcolo del prezzo - Deposito | Box2box"
meta_description: "Qui trovate i prezzi più competitivi per l'affitto del vostro deposito online con ritiro gratuito a domicilio. Trasporto Incluso nel servizio. ✅✅"
</i18n>
<i18n lang="yaml" locale="pt">
title: "🥇 Calcular preço - Armazem | Box2box"
meta_description: "Obtenha aqui os preços mais competitivos para alugar o seu Armazém Online com colecção a domicilio gratuita. Transporte Incluído no serviço. ✅✅"
</i18n>
<i18n lang="yaml" locale="mx">
title: "🥇 Renta de mini bodegas a Domicilio, precios | Box2box"
meta_description: "Consigue Aquí los Precios más Competitivos para Rentar tu Mini Bodega Online Con Recogida a Domicilio Gratis. Transporte Incluido en el servicio.✅✅"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/pricesPage.yaml"></i18n>
