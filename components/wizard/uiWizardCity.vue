<template>
  <div class="bg-white h-full">
    <section
      class="grid-layout mobile:pt-20 pt-32 pb-8 desktopL:my-auto desktop:my-auto"
    >
      <h2
        class="wizard-title desktopL:col-span-6 desktopL:col-start-2 desktop:col-span-6 desktop:col-start-2 tablet:col-span-8 tablet:col-start-3 mobile:col-end-5 mobile:col-start-1 mobileL:col-start-1 mobileL:col-span-8"
      >
        {{ $t("step_1_title") }}
        <span class="text-electric">{{ $t("step_1_title_highlight") }}</span>
      </h2>

      <div
        class="desktopL:col-start-3 desktop:col-start-3 desktopL:col-span-4 desktop:col-span-4 pt-10 mobile:pt-16 mobileL:pt-16 tablet:col-start-4 tablet:col-span-6 mobile:col-start-1 mobile:col-span-4 mobileL:col-start-2 mobileL:col-span-6 z-20"
      >
        <ui-city-selector
          :store="store"
          @click="$emit('click')"
          size="large"
          alignment="vertical"
          :buttonText="$t('step_1_cta')"
        ></ui-city-selector>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "uiWizardCity",
  props: {
    store: {
      type: String,
      default: null,
    },
  },
  components: {
    "ui-city-selector": async () =>
      await import("@/components/uiCitySelector/uiCitySelector.vue"),
  },
};
</script>
<i18n lang="yaml" locale="es">
step_1_title: "Elige"
step_1_title_highlight: "ciudad"
step_1_cta: "Ver precios"
</i18n>
<i18n lang="yaml" locale="fr">
step_1_title: "Choisissez"
step_1_title_highlight: "ville"
step_1_cta: "Voir les prix"
</i18n>
<i18n lang="yaml" locale="it">
step_1_title: "Scegli"
step_1_title_highlight: "città "
step_1_cta: "Vedere i prezzi"
</i18n>
<i18n lang="yaml" locale="pt">
step_1_title: "Escolha"
step_1_title_highlight: "cidade"
step_1_cta: "Ver preços"
</i18n>
<i18n lang="yaml" locale="mx">
step_1_title: "Elige"
step_1_title_highlight: "ciudad"
step_1_cta: "Ver precios"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiWizardCity.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiWizardCity.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiWizardCity.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiWizardCity.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiWizardCity.yaml"
></i18n>
