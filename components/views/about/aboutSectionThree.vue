<template>
  <ui-card-viewer
    :headerTitle="$t('sec3_main_title')"
    :title="$t('sec3_title')"
  >
    <template v-slot:card1>
      <ui-card-section-three
        :title="$t('sec3_card_1_title')"
        :header="$t('sec3_card_1_subtitle')"
        :body="$t('sec3_card_1_body')"
      >
      </ui-card-section-three>
    </template>

    <template v-slot:card2>
      <ui-card-section-three
        :title="$t('sec3_card_2_title')"
        :header="$t('sec3_card_2_subtitle')"
        :body="$t('sec3_card_2_body')"
        class="shadow-input"
      >
      </ui-card-section-three>
    </template>

    <template v-slot:card3>
      <ui-card-section-three
        :title="$t('sec3_card_3_title')"
        :header="$t('sec3_card_3_subtitle')"
        :body="$t('sec3_card_3_body')"
      >
      </ui-card-section-three>
    </template>
  </ui-card-viewer>
</template>

<script>
export default {
  name: "aboutSectionThree",

  components: {
    "ui-card-section-three": async () =>
      await import("@/components/common/sectionThree/uiCardSectionThree.vue"),
    "ui-card-viewer": async () =>
      await import("@/components/common/sectionThree/uiCardViewer.vue"),
  },
};
</script>

<i18n lang="yaml" locale="es">
sec3_main_title: "Los valores de nuestro equipo profesional"
sec3_title: "Nuestra misión empresarial"
sec3_card_1_title: "Transparencia"
sec3_card_1_subtitle: "Te informamos de todo"
sec3_card_1_body: "Nuestro equipo se define por garantizar un servicio profesional y transparente. "
sec3_card_2_title: "Sostenibilidad"
sec3_card_2_subtitle: "1 árbol por cada 6 clientes"
sec3_card_2_body: "Optimizamos nuestros servicios para reducir la huella de carbono."
sec3_card_3_title: "Flexibilidad"
sec3_card_3_subtitle: "Vamos dónde tú nos digas"
sec3_card_3_body: "Ahorra tiempo y espacio: nuestros transportistas hacen el trabajo por ti."
</i18n>
<i18n lang="yaml" locale="fr">
sec3_main_title: "Les qualités de notre équipe professionnelle"
sec3_title: "Notre mission d'entreprise"
sec3_card_1_title: "Transparence"
sec3_card_1_subtitle: "Nous vous informons de tout"
sec3_card_1_body: "Notre équipe se caractérise par la garantie d'un service professionnel et transparent. "
sec3_card_2_title: "Durabilité"
sec3_card_2_subtitle: "1 arbre pour 6 clients"
sec3_card_2_body: "Nous optimisons nos services pour réduire notre empreinte carbone."
sec3_card_3_title: "Flexibilité"
sec3_card_3_subtitle: "Nous allons où vous nous dites d'aller"
sec3_card_3_body: "Gagnez du temps et de l'espace : nos transporteurs font le travail pour vous."
</i18n>
<i18n lang="yaml" locale="it">
sec3_main_title: "Le qualità del nostro professionale staff "
sec3_title: "La nostra missione"
sec3_card_1_title: "Trasparenti"
sec3_card_1_subtitle: "Ti informiamo di tutto"
sec3_card_1_body: "Il nostro staff si differenzia per il suo servizio professionale e trasparente "
sec3_card_2_title: "Sostenibilità "
sec3_card_2_subtitle: "1 albero ogni 6 clienti "
sec3_card_2_body: "Otimizziamo il nostro servizio per ridurre l'impatto ambientale"
sec3_card_3_title: "Flessibilità "
sec3_card_3_subtitle: "Andiamo dove ci dirai"
sec3_card_3_body: "Risparmia tempo e spazio: i nostri trasportisti faranno il lavoro al posto tuo "
</i18n>
<i18n lang="yaml" locale="pt">
sec3_main_title: "Os valores da nossa equipa profissional"
sec3_title: "A nossa missão empresarial"
sec3_card_1_title: "Transparência"
sec3_card_1_subtitle: "Informamo-lo de tudo"
sec3_card_1_body: "A nossa equipa é definida garantindo um serviço profissional e transparente. "
sec3_card_2_title: "Sustentabilidade"
sec3_card_2_subtitle: "1 árvore por cada 6 clientes"
sec3_card_2_body: "Optimizamos os nossos serviços para reduzir a nossa pegada de carbono."
sec3_card_3_title: "Flexibilidade"
sec3_card_3_subtitle: "Vamos onde nos disser para ir"
sec3_card_3_body: "Poupe tempo e espaço: os nossos transportadores fazem o trabalho por si."
</i18n>
<i18n lang="yaml" locale="mx">
sec3_main_title: "Los valores de nuestro equipo profesional"
sec3_title: "Nuestra misión empresarial"
sec3_card_1_title: "Transparencia"
sec3_card_1_subtitle: "Te informamos de todo"
sec3_card_1_body: "Nuestro equipo se define por garantizar un servicio profesional y transparente. "
sec3_card_2_title: "Sostenibilidad"
sec3_card_2_subtitle: "1 árbol por cada 6 clientes"
sec3_card_2_body: "Optimizamos nuestros servicios para reducir la huella de carbono."
sec3_card_3_title: "Flexibilidad"
sec3_card_3_subtitle: "Vamos dónde tú nos digas"
sec3_card_3_body: "Ahorra tiempo y espacio: nuestros transportistas hacen el trabajo por ti."
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/aboutSectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/aboutSectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/aboutSectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/aboutSectionThree.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/aboutSectionThree.yaml"
></i18n>
