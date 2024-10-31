<template>
  <hero-section-about
    :hero_prefix="$t('hero_prefix')"
    :hero_highlight_1="$t('hero_highlight_1')"
    :hero_suffix="$t('hero_suffix')"
    :hero_highlight_2="$t('hero_highlight_2')"
  >
  </hero-section-about>
</template>

<script>
export default {
  name: "aboutHero",
  components: {
    "hero-section-about": async () =>
      await import("@/components/common/uiHeroLandingSection.vue"),
  },
};
</script>

<i18n lang="yaml" locale="es">
hero_prefix: "Expertos en soluciones de"
hero_highlight_1: "almacenaje"
hero_suffix: "y"
hero_highlight_2: "transporte"
</i18n>
<i18n lang="yaml" locale="fr">
hero_prefix: "Experts en solutions de"
hero_highlight_1: "stockage"
hero_suffix: "et"
hero_highlight_2: "transport"
</i18n>
<i18n lang="yaml" locale="it">
hero_prefix: "Esperti in soluzioni di"
hero_highlight_1: "Immagazzinamento "
hero_suffix: "e"
hero_highlight_2: "trasporto"
</i18n>
<i18n lang="yaml" locale="pt">
hero_prefix: "Especialistas em soluções para"
hero_highlight_1: "armazenagem"
hero_suffix: "e"
hero_highlight_2: "transporte"
</i18n>
<i18n lang="yaml" locale="mx">
hero_prefix: "Expertos en soluciones de"
hero_highlight_1: "almacenaje"
hero_suffix: "y"
hero_highlight_2: "transporte"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/aboutHeroSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/aboutHeroSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/aboutHeroSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/aboutHeroSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/aboutHeroSection.yaml"
></i18n>
