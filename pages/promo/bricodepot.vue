<template>
  <div>
    <div class="fixed top-0 w-full z-[40]">
      <ui-header :displayCitySelector="false"></ui-header>
    </div>
    <transition name="fade">
      <div id="bricodepotPage" v-show="areFullLoaded">
        <div class="flex flex-col">
          <section class="grid-layout">
            <hero-section
              :isGeneralHero="false"
              :goToForm="true"
              @scrollToForm="scrollToForm()"
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'heroSection')
              "
            ></hero-section>
            <section-one
              :renderVideo="false"
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionOne')
              "
            ></section-one>
            <bricodepot-banner
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'bricodepot')
              "
            ></bricodepot-banner>
            <client-only>
              <form-section
                ref="form"
                displayInputCode="bricodepot"
                @hook:mounted="
                  $store.dispatch('loading/ADD_LOADED_COMPONENT', 'formSection')
                "
              ></form-section>
            </client-only>
          </section>
          <footer-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'footerSection')
            "
          ></footer-section>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "bricodepotView",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "hero-section": async () =>
      await import("@/components/sections/heroSection.vue"),
    "section-one": async () =>
      await import("@/components/sections/sectionOne.vue"),
    "form-section": async () =>
      await import("@/components/sections/formSection.vue"),
    "bricodepot-banner": async () =>
      await import("@/components/sections/promo/bricodepot.vue"),
    "footer-section": async () =>
      await import("@/components/sections/footerSection.vue"),
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
        {
          hid: "robots",
          name: "robots",
          content: "noindex, nofollow",
        },
      ],
    };
  },
  nuxtI18n: {
    locales: ["es", "es-en", "pt", "pt-en"],
  },
  meta: {
    pageName: "bricodepotPage",
  },
  middleware({ redirect, app }) {
    // Check if we are in a valid domain to display bricodepot page
    if (["es", "pt"].indexOf(app.i18n.localeProperties.country) === -1) {
      redirect(app.localePath("/"));
    }
  },
  methods: {
    scrollToForm() {
      this.$refs.form.$el.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  computed: {
    ...mapState("loading", {
      heroSection: (state) => state.pageSection?.heroSection,
      sectionOne: (state) => state.pageSection?.sectionOne,
      formSection: (state) => state.pageSection?.formSection,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    areFullLoaded() {
      return (
        this.heroSection &&
        this.sectionOne &&
        this.formSection &&
        this.footerSection
      );
    },
  },
  beforeDestroy() {
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "heroSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionOne");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "formSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "footerSection");
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 0s;
  opacity: 0;
}
</style>
<i18n lang="yaml" locale="es">
title: "Descuento de Brico Depôt y Box2box "
meta_description: "¿Quieres beneficiarte de descuentos exclusivos para tu alquiler de trasteros y tu tienda Brico Depôt? ¡Entra y descubre nuestras promociones!"
</i18n>
<i18n lang="yaml" locale="fr">
title: " "
meta_description: " "
</i18n>
<i18n lang="yaml" locale="it">
title: " "
meta_description: " "
</i18n>
<i18n lang="yaml" locale="pt">
title: "Desconto de Brico Depôt e Box2box"
meta_description: "Deseja beneficiar de descontos exclusivos para o aluguer do seu armazém e da sua loja Depôt Brico? Entre e descubra as nossas promoções!"
</i18n>
<i18n lang="yaml" locale="mx">
title: " "
meta_description: " "
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/bricodepotPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/bricodepotPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/bricodepotPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/bricodepotPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/bricodepotPage.yaml"></i18n>
