<template>
  <ui-descriptive-section
    :mainTitle="$t('who_title')"
    :secondaryTitle="$t('who_title_suffix')"
    :subTitle="$t('who_subtitle')"
    :body="$t('who_body')"
  >
  </ui-descriptive-section>
</template>

<script>
export default {
  name: "whoWeAreSection",
  components: {
    "ui-descriptive-section": async () =>
      await import("@/components/common/uiDescriptiveSection.vue"),
  },
};
</script>

<i18n lang="yaml" locale="es">
who_title: "Quiénes"
who_title_suffix: "somos"
who_subtitle: "¡Somos un equipo de apasionados de la logística que quiere hacer la vida más fácil a la gente!"
who_body: "En box2box, hemos desarrollado un servicio digital que permite transportar y almacenar objetos en un clic, sin dedicarle tiempo ni esfuerzo. <br><br> Nuestro equipo de profesionales busca siempre las soluciones más personalizadas para ayudar a nuestros clientes. Además, estamos comprometidos con el medioambiente, por eso, plantamos 1 árbol por cada 6 clientes que confían en nosotros, utilizamos materiales reciclados y optimizamos al máximo la ruta de nuestros equipos. Así, intentamos mejorar las cosas con nuestro granito de arena."
</i18n>
<i18n lang="yaml" locale="fr">
who_title: "Qui"
who_title_suffix: "nous sommes"
who_subtitle: "Nous sommes une équipe de logisticiens passionnés qui souhaite faciliter la vie des gens !"
who_body: "Chez box2box, nous avons développé un service digital qui permet de transporter et de stocker en 2 clic, sans perte de temps ni d'efforts. <br><br> Notre équipe de professionnels est toujours à la recherche des solutions les plus personnalisées pour aider nos clients. Nous nous engageons également en faveur de l'environnement, ainsi nous plantons 1 arbre pour 6 clients qui nous font confiance, nous utilisons des matériaux recyclés et nous optimisons au maximum le trajet de nos équipes. De cette façon, nous essayons de faire notre part pour améliorer les choses."
</i18n>
<i18n lang="yaml" locale="it">
who_title: "Chi"
who_title_suffix: "siamo"
who_subtitle: "Siamo una squadra di apassionati di logistica che sogna rendere piu facile la vita alla gente"
who_body: "In box2box, abbiamo sviluppato un servizio digitale che permette trasportare e immagazzinare oggetti con un click, senza perdere tempo e senza sforzi. <br><br> Il nostro staff di professionisti cerca sempre le migliori soluzioni per poter aiutare i nostri clienti. Siamo anche compromessi con la compensazione del nostro impatto ambientale, per questo piantiamo 1 albero ogni 6 clienti che hanno creduto in noi, utiliziamo materiale riciclato e ottimiziamo al massimo le risorse a disposizione dei nostri trasportisti. In questo modo ci cerchiamo di migliorare le cose."
</i18n>
<i18n lang="yaml" locale="pt">
who_title: "Quiénes"
who_title_suffix: "somos"
who_subtitle: "Somos uma equipa de logísticas apaixonados que querem tornar a vida das pessoas mais fácil!"
who_body: "Na box2box, desenvolvemos um serviço digital que lhe permite transportar e armazenar objectos com um clique, sem tempo ou esforço. <br><br> A nossa equipa de profissionais está sempre à procura das soluções mais personalizadas para ajudar os nossos clientes. Também estamos comprometidos com o ambiente, por isso plantamos 1 árvore para cada 6 clientes que confiam em nós, utilizamos materiais reciclados e optimizamos ao máximo o percurso das nossas equipas. Desta forma, tentamos fazer a nossa parte para tornar as coisas melhores."
</i18n>
<i18n lang="yaml" locale="mx">
who_title: "Quiénes"
who_title_suffix: "somos"
who_subtitle: "¡Somos un equipo de apasionados de la logística que quiere hacer la vida más fácil a la gente!"
who_body: "En box2box, hemos desarrollado un servicio digital que permite transportar y almacenar objetos en un clic, sin dedicarle tiempo ni esfuerzo. <br><br> Nuestro equipo de profesionales busca siempre las soluciones más personalizadas para ayudar a nuestros clientes. Además, estamos comprometidos con el medioambiente, por eso, plantamos 1 árbol por cada 6 clientes que confían en nosotros, utilizamos materiales reciclados y optimizamos al máximo la ruta de nuestros equipos. Así, intentamos mejorar las cosas con nuestro granito de arena."
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/whoWeAreSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/whoWeAreSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/whoWeAreSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/whoWeAreSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/whoWeAreSection.yaml"
></i18n>
