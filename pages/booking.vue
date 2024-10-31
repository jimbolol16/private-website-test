<template>
  <nuxt-child />
</template>
<script>
export default {
  name: "bookingIndex",
  layout: "wizardPage",
  meta: {
    pageName: "booking",
  },
  head() {
    return {
      title: this.$t("title"),
      meta: [
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow",
        },
      ],
    };
  },
  beforeDestroy() {
    // Before leave the price wizard paths, reset vuex state
    this.$store.dispatch("bookingWizard/RESET_ALL");
  },
};
</script>
<i18n lang="yaml" locale="es">
title: "Formaliza la reserva • Box2box"
</i18n>
<i18n lang="yaml" locale="fr">
title: "Effectuer la réservation"
</i18n>
<i18n lang="yaml" locale="it">
title: "Completare la prenotazione"
</i18n>
<i18n lang="yaml" locale="pt">
title: "Formaliza a reserva"
</i18n>
<i18n lang="yaml" locale="mx">
title: "Formaliza la reserva • Box2box"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/bookingPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/bookingPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/bookingPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/bookingPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/bookingPage.yaml"></i18n>
