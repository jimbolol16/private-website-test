<template>
  <nuxt-child />
</template>
<script>
export default {
  name: "calculatorIndex",
  layout({ route }) {
    if (route.meta.some((value) => value.is === "child")) {
      return "landingPage";
    }
    return "calculatorPage";
  },
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
    pageName: "calculator",
  },
  middleware({ isDev, redirect, app }) {
    // TODO: drop this when calculator is fully finished
    if (!isDev) redirect(app.localePath("/"));
  },
  beforeRouteLeave(to, from, next) {
    // Before leave the calculator paths, reset vuex state
    this.$store.dispatch("calculatorWizard/RESET_ALL");

    // Go to the next path
    next();
  },
};
</script>
<i18n lang="yaml" locale="es">
title: "Calculadora de Espacio para Trasteros o Guardamuebles | Box2box"
meta_description: "Tenemos la Mejor Calculadora de Espacio para Trasteros o Guardamuebles. Entra y calcula cuanto espacio necesitas para tu Trastero o guardamuebles de la forma más simple. Calculadora Gratis Online de Espacio para Trasteros. ¡Entra!"
</i18n>
<i18n lang="yaml" locale="fr">
title: "Calculateur d'espace de stockage | Box2box"
meta_description: "Nous avons le meilleur calculateur d'espace de stockage. Saisissez et calculez l'espace dont vous avez besoin pour votre pièce de stockage ou votre garde-meubles de la manière la plus simple qui soit. Calculateur d'espace de stockage en ligne gratuit - Entrez !"
</i18n>
<i18n lang="yaml" locale="it">
title: "Calcolatore di spazio per magazzini e depositi | Box2box"
meta_description: "Abbiamo il miglior calcolatore di spazio di archiviazione. Inserite e calcolate lo spazio necessario per il vostro ripostiglio o deposito di mobili nel modo più semplice. Calcolatore gratuito dello spazio di archiviazione online - Entrate!"
</i18n>
<i18n lang="yaml" locale="pt">
title: "Calculadora de espaço de armazenamento : | Box2box"
meta_description: "Temos a melhor calculadora de espaço de armazenamento. Introduza e calcule quanto espaço precisa para o seu armazém ou repositório de mobiliário da forma mais simples. Calculadora de Espaço de Armazenamento Online Gratuito - Entre!"
</i18n>
<i18n lang="yaml" locale="mx">
title: "Calculadora de Espacio para Mini bodegas | Box2box"
meta_description: "Tenemos la Mejor Calculadora de Espacio para Mini bodegas. Entra y calcula cuanto espacio necesitas para tu Mini bodega de la forma más simple. Calculadora Gratis Online de Espacio para Mini bodegas. ¡Entra!"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/calculatorPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/calculatorPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/calculatorPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/calculatorPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/calculatorPage.yaml"></i18n>
