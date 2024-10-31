<template>
  <hero-section
    :hero_prefix="$t('hero_prefix')"
    :hero_highlight_1="$t('hero_highlight_1')"
    :displayButtons="false"
  >
  </hero-section>
</template>
<script>
export default {
  name: "logisticsHero",
  components: {
    "hero-section": async () =>
      await import("@/components/common/uiHeroLandingSection.vue"),
  },
};
</script>

<i18n lang="yaml" locale="es">
hero_prefix: "Logística eficaz para"
hero_highlight_1: "pymes"
</i18n>
</i18n>
<i18n lang="yaml" locale="fr">
hero_prefix: ""
hero_highlight_1: ""
</i18n>
<i18n lang="yaml" locale="it">
hero_prefix: ""
hero_highlight_1: ""
</i18n>
<i18n lang="yaml" locale="pt">
hero_prefix: ""
hero_highlight_1: ""
</i18n>
<i18n lang="yaml" locale="mx">
hero_prefix: ""
hero_highlight_1: ""
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/logistics/hero.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/logistics/hero.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/logistics/hero.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/logistics/hero.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/logistics/hero.yaml"
></i18n>
