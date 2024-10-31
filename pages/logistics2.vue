<template>
  <div>
    <transition name="fade">
      <div id="logisticsPage" v-show="areFullLoaded">
        <div class="flex flex-col">
          <hero-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'logisticsHero')
            "
          ></hero-section>
          <logistics-general-description
            @hook:mounted="
              $store.dispatch(
                'loading/ADD_LOADED_COMPONENT',
                'logisticsGeneralDescription'
              )
            "
          ></logistics-general-description>
          <section class="grid-layout">
            <section-three
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'logisticsSectionThree'
                )
              "
            ></section-three>
            <section-five
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'logisticsSectionFive'
                )
              "
            ></section-five>
            <our-guarantee
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'ourGuarantee')
              "
            ></our-guarantee>
            <client-only>
              <form-section
                :femalePerson="true"
                @hook:mounted="
                  $store.dispatch('loading/ADD_LOADED_COMPONENT', 'formSection')
                "
              ></form-section>

              <template #placeholder>
                <form-section></form-section>
              </template>
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
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "logisticsView",
  layout: "logisticsPage",
  components: {
    "hero-section": async () =>
      await import("@/components/views/logistics/hero.vue"),
    "form-section": async () =>
      await import("@/components/sections/formSection.vue"),
    "logistics-general-description": async () =>
      await import("@/components/views/logistics/generalDescription.vue"),
    "section-three": async () =>
      await import("@/components/views/logistics/sectionThree.vue"),
    "our-guarantee": async () =>
      await import("@/components/views/logistics/ourGuarantee.vue"),
    "section-five": async () =>
      await import("@/components/views/logistics/sectionFive.vue"),
    "footer-section": async () =>
      await import("@/components/sections/footerSection.vue"),
  },
  head() {
    const locales = [this.$i18n.localeProperties.code];
    const nuxtI18nHead = this.nuxtI18nHeadFixer(locales);
    const meta = nuxtI18nHead.meta || {};
    delete nuxtI18nHead.meta;

    return {
      title: this.$t("title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta_description"),
        },
        ...meta,
      ],
      ...nuxtI18nHead,
    };
  },
  meta: {
    pageName: "logisticsPage",
  },
  nuxtI18n: {
    locales: ["es"],
  },
  mixins: [nuxtI18nHeadFixer],
  middleware({ redirect, app }) {
    // Check if we are in a valid domain to display the page (only ES)
    if (["es"].indexOf(app.i18n.localeProperties.code) === -1) {
      redirect(app.localePath("/"));
    }
  },
  computed: {
    ...mapState("loading", {
      logisticsHero: (state) => state.pageSection?.logisticsHero,
      logisticsGeneralDescription: (state) =>
        state.pageSection?.logisticsGeneralDescription,
      logisticsSectionThree: (state) =>
        state.pageSection?.logisticsSectionThree,
      formSection: (state) => state.pageSection?.formSection,
      ourGuarantee: (state) => state.pageSection?.ourGuarantee,
      logisticsSectionFive: (state) => state.pageSection?.logisticsSectionFive,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    areFullLoaded() {
      return (
        this.logisticsHero &&
        this.logisticsGeneralDescription &&
        this.logisticsSectionThree &&
        this.formSection &&
        this.ourGuarantee &&
        this.logisticsSectionFive &&
        this.footerSection
      );
    },
  },
  beforeDestroy() {
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "logisticsHero");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "logisticsGeneralDescription"
    );
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "logisticsSectionThree"
    );
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "formSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "ourGuarantee");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "logisticsSectionFive"
    );
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
title: "Logística eficaz para pymes | Box2box"
meta_description: "Servicios integrados de transporte y almacenaje para pequeñas, medianas y grandes empresas. Precios adaptados a todas las necesidades y presupuestos. ¡Entra!"
</i18n>
<i18n lang="yaml" locale="fr">
title: ""
meta_description: ""
</i18n>
<i18n lang="yaml" locale="it">
title: ""
meta_description: ""
</i18n>
<i18n lang="yaml" locale="pt">
title: ""
meta_description: ""
</i18n>
<i18n lang="yaml" locale="mx">
title: ""
meta_description: ""
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/faqPage.yaml"></i18n>
