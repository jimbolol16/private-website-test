<template>
  <div>
    <transition name="fade">
      <div id="indexPage" v-show="areFullLoaded">
        <section class="grid-layout">
          <hero-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'heroSection')
            "
          ></hero-section>
          <section-one
            :renderVideo="true"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionOne')
            "
          ></section-one>
          <section-two
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionTwo')
            "
          ></section-two>
          <review-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'reviewSection')
            "
          ></review-section>
          <section-four
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionFour')
            "
          ></section-four>
        </section>

        <section-five
          @hook:mounted="
            $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionFive')
          "
        ></section-five>

        <!-- Map section outside the grid layout -->
        <!-- <client-only> -->
        <map-section
          @hook:mounted="
            $store.dispatch('loading/ADD_LOADED_COMPONENT', 'mapSection')
          "
        ></map-section>
        <!-- </client-only> -->

        <section class="grid-layout">
          <faq-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'faqSection')
            "
          ></faq-section>
          <client-only>
            <form-section
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'formSection')
              "
              ref="formSection"
            ></form-section>

            <template #placeholder>
              <form-section></form-section>
            </template>
          </client-only>
          <section-nine
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionNine')
            "
          ></section-nine>
        </section>

        <!-- Footer and last section outside the grid -->
        <section-ten
          @hook:mounted="
            $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionTen')
          "
        ></section-ten>
        <footer-section
          @hook:mounted="
            $store.dispatch('loading/ADD_LOADED_COMPONENT', 'footerSection')
          "
        ></footer-section>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  hydrateNever,
  hydrateOnInteraction,
  hydrateWhenIdle,
  hydrateWhenVisible,
} from "vue-lazy-hydration";

export default {
  name: "index",
  layout: "landingPage",
  components: {
    "hero-section": hydrateWhenVisible(
      async () => await import("@/components/sections/heroSection.vue")
    ),
    "section-one": hydrateWhenVisible(
      async () => await import("@/components/sections/sectionOne.vue")
    ),
    "section-two": hydrateOnInteraction(
      async () => await import("@/components/sections/sectionTwo.vue"),
      { event: "click" }
    ),
    "review-section": async () =>
      await import("@/components/sections/reviewSection.vue"),
    "section-four": hydrateNever(
      async () => await import("@/components/sections/sectionFour.vue")
    ),
    "section-five": hydrateOnInteraction(
      async () => await import("@/components/sections/sectionFive.vue"),
      { event: "click" }
    ),
    "map-section": hydrateWhenVisible(
      async () =>
        await import("@/components/sections/mapSection/homeMapSection.vue")
    ),
    "faq-section": hydrateWhenVisible(
      async () => await import("@/components/sections/faqSection.vue")
    ),
    "form-section": hydrateNever(
      async () => await import("@/components/sections/formSection.vue")
    ),
    "section-nine": hydrateWhenIdle(
      async () => await import("@/components/sections/sectionNine.vue")
    ),
    "section-ten": hydrateNever(
      async () => await import("@/components/sections/sectionTen.vue")
    ),
    "footer-section": hydrateWhenVisible(
      async () => await import("@/components/sections/footerSection.vue")
    ),
  },
  meta: {
    pageName: "home",
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
      ],
      script: [this.faqContentJsonId()],
    };
  },
  computed: {
    ...mapState("loading", {
      heroSection: (state) => state.pageSection?.heroSection,
      sectionOne: (state) => state.pageSection?.sectionOne,
      sectionTwo: (state) => state.pageSection?.sectionTwo,
      reviewSection: (state) => state.pageSection?.reviewSection,
      sectionFour: (state) => state.pageSection?.sectionFour,
      sectionFive: (state) => state.pageSection?.sectionFive,
      mapSection: (state) => state.pageSection?.mapSection,
      faqSection: (state) => state.pageSection?.faqSection,
      formSection: (state) => state.pageSection?.formSection,
      sectionNine: (state) => state.pageSection?.sectionNine,
      sectionTen: (state) => state.pageSection?.sectionTen,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    ...mapState("seo", {
      faqContent: (state) => state.faqContent,
    }),
    areFullLoaded() {
      return (
        this.heroSection &&
        this.sectionOne &&
        this.sectionTwo &&
        this.reviewSection &&
        this.sectionFour &&
        this.sectionFive &&
        this.mapSection &&
        this.faqSection &&
        this.formSection &&
        this.sectionNine &&
        this.sectionTen &&
        this.footerSection
      );
    },
  },
  methods: {
    faqContentJsonId() {
      const mainEntity =
        this.faqContent?.map((question) => ({
          "@type": "Question",
          name: question.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: question.body,
          },
        })) || [];

      return {
        type: "application/ld+json",
        json: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: mainEntity,
        },
      };
    },
  },
  beforeDestroy() {
    // Clear rendering page state
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "heroSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionOne");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionTwo");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "reviewSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionFour");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionFive");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "mapSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "faqSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "formSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionNine");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionTen");
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
title: "🥇 Alquiler de trasteros a Domicilio | Box2box"
meta_description: "✅Alquiler de Trasteros y Guardamuebles a Domicilio. ✅Recogemos tus cosas Gratis, las Guardamos y te las devolvemos donde y cuando las necesites."
</i18n>
<i18n lang="yaml" locale="fr">
title: "🥇 Location de stockage à domicile | Box2box"
meta_description: "✅Location de garde-meubles et stockages à Paris. ✅Chercher vos affaires gratuitement, les stockons et vous les rendons où et quand vous en avez besoin."
</i18n>
<i18n lang="yaml" locale="it">
title: "🥇Affitto il deposito a domicilio | Box2box"
meta_description: "✅Affitto di deposito e magazzino a domicilio a Milano. ✅ Ritiriamo gratuitamente i vostri oggetti, li immagazziniamo e li restituiamo dove e quando ne avete bisogno."
</i18n>
<i18n lang="yaml" locale="pt">
title: "🥇 Aluguer de armazém a domicilio | Box2box"
meta_description: "✅ Aluguer de armazém e guardamóveis a domicilio. ✅ Recolhemos as suas coisas de gratis, armazenamo-las e devolvemo-las onde e quando precisar delas."
</i18n>
<i18n lang="yaml" locale="mx">
title: "🥇 Renta de mini bodegas a Domicilio | Box2box"
meta_description: "✅Renta de mini bodegas a Domicilio. ✅Recogemos tus cosas Gratis, las Guardamos y te las devolvemos donde y cuando las necesites."
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/homePage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/homePage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/homePage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/homePage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/homePage.yaml"></i18n>
