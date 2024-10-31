<template>
  <hero-section
    :hero_prefix="$t('hero_prefix')"
    :hero_highlight_1="$t('hero_highlight_1')"
  >
  </hero-section>
</template>
<script>
export default {
  name: "businessHero",
  components: {
    "hero-section": async () =>
      await import("@/components/common/uiHeroLandingSection.vue"),
  },
};
</script>

<i18n lang="yaml" locale="es">
hero_prefix: "Alquiler de trasteros para"
hero_highlight_1: "empresas"
</i18n>
<i18n lang="yaml" locale="fr">
hero_prefix: "Location de stockage pour"
hero_highlight_1: "entreprises"
</i18n>
<i18n lang="yaml" locale="it">
hero_prefix: "Depositi in locazione ad"
hero_highlight_1: "aziende"
</i18n>
<i18n lang="yaml" locale="pt">
hero_prefix: "Aluguer de armazéns para"
hero_highlight_1: "empresas"
</i18n>
<i18n lang="yaml" locale="mx">
hero_prefix: "Renta de mini bodegas para"
hero_highlight_1: "empresas"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/businessHero.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/businessHero.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/businessHero.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/businessHero.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/businessHero.yaml"></i18n>
