<template>
  <hero-section
    :hero_prefix="$t('hero_prefix')"
    :hero_highlight_1="$t('hero_highlight_1')"
    :hero_subtitle="$t('hero_subtitle')"
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
hero_subtitle: "Ofrecemos a empresas y profesionales soluciones a medida para satisfacer las necesidades logísticas de su negocio"
form_main_title: "Formulario de contacto"
form_subtitle: "Solicita tu presupuesto"
form_name: "Nombre"
form_lastname: "Apellidos"
form_email: "Correo electrónico"
form_phone: "Teléfono"
form_comment: "Comentario"
form_cta: "Enviar solicitud"
error_first_name: "El nombre es obligatorio"
error_last_name: "El apellido es obligatorio"
error_email: "Correo electrónico no válido"
error_phone: "Número de teléfono no válido"
</i18n>
<i18n lang="yaml" locale="fr">
hero_prefix: ""
hero_highlight_1: ""
hero_subtitle: ""
form_main_title: ""
form_subtitle: ""
form_name: ""
form_lastname: ""
form_email: ""
form_phone: ""
form_comment: ""
form_cta: ""
error_first_name: ""
error_last_name: ""
error_email: ""
error_phone: ""
</i18n>
<i18n lang="yaml" locale="it">
hero_prefix: ""
hero_highlight_1: ""
hero_subtitle: ""
form_main_title: ""
form_subtitle: ""
form_name: ""
form_lastname: ""
form_email: ""
form_phone: ""
form_comment: ""
form_cta: ""
error_first_name: ""
error_last_name: ""
error_email: ""
error_phone: ""
</i18n>
<i18n lang="yaml" locale="pt">
hero_prefix: ""
hero_highlight_1: ""
hero_subtitle: ""
form_main_title: ""
form_subtitle: ""
form_name: ""
form_lastname: ""
form_email: ""
form_phone: ""
form_comment: ""
form_cta: ""
error_first_name: ""
error_last_name: ""
error_email: ""
error_phone: ""
</i18n>
<i18n lang="yaml" locale="mx">
hero_prefix: ""
hero_highlight_1: ""
hero_subtitle: ""
form_main_title: ""
form_subtitle: ""
form_name: ""
form_lastname: ""
form_email: ""
form_phone: ""
form_comment: ""
form_cta: ""
error_first_name: ""
error_last_name: ""
error_email: ""
error_phone: ""
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
