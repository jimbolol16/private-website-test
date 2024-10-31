<template>
  <div class="grid-layout col-span-full h-screen">
    <div class="flex flex-col fixed w-full left-0 h-full">
      <!-- Background image -->
      <div class="absolute left-0 top-0 z-0 right-0 h-full">
        <div class="relative">
          <div class="overflow-hidden top-0">
            <nuxt-img
              :provider="$config.img_provider"
              src="/background/grad-hero.svg"
              class="w-full"
              alt="errorbackground"
            />
          </div>
        </div>
      </div>
      <div class="z-50 flex flex-col items-center justify-center h-full">
        <nuxt-img :provider="$config.img_provider" src="/404.svg" alt="404" />
        <div class="mt-[34px] mobile:text-center">
          <h3>{{ $t("error_title") }}</h3>
        </div>
        <div class="px-3 mt-12">
          <ui-button @click="handleClick">{{ $t("error_cta") }}</ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "errorPage",
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  head() {
    return this.nuxtI18nHeadFixer();
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/") });
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
error_title: "¡Ups!... Página no encontrada"
error_cta: "Página principal"
</i18n>
<i18n lang="yaml" locale="fr">
error_title: "Oups ! Page non trouvée"
error_cta: "Page principale"
</i18n>
<i18n lang="yaml" locale="it">
error_title: "Ops! Non troviamo la pagina che hai richiesto."
error_cta: "Home"
</i18n>
<i18n lang="yaml" locale="pt">
error_title: "Oops! Página não encontrada"
error_cta: "Página inicial"
</i18n>
<i18n lang="yaml" locale="mx">
error_title: "¡Ups!... Página no encontrada"
error_cta: "Página principal"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/layouts/error.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/layouts/error.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/layouts/error.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/layouts/error.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/layouts/error.yaml"></i18n>
