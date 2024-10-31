<template>
  <div>
    <transition name="fade">
      <div id="logisticsPage" v-show="areFullLoaded">
        <div class="flex flex-col">
          <hero-section
            @hook:mounted="
              $store.dispatch(
                'loading/ADD_LOADED_COMPONENT', 
                'logisticsHero'
              )
            "
          ></hero-section>
          <our-clients
            @hook:mounted="
              $store.dispatch(
                'loading/ADD_LOADED_COMPONENT', 
                'ourClients'
              )
            "
          ></our-clients>
          
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
          </section>
          <testimonials-page
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'testimonialsPage')
              "
          ></testimonials-page>
          <carousel-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'carouselSection')
            "
          ></carousel-section>
          <article-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'articlePage')
            "
          ></article-section>
          <our-guarantee
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'ourGuarantee')
              "
            ></our-guarantee>
            <!-- <section-five
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'logisticsSectionFive'
                )
              "
            ></section-five> -->
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
          <!-- </section> -->
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
  name: "logistics-view",
  layout: "logisticsPage",
  components: {
  "hero-section": async () =>
    await import("@/components/views/logistics/hero.vue"),
  "form-section": async () =>
    await import("@/components/sections/formSection.vue"),
  "testimonials-page": async () => 
    await import("@/components/views/logistics/TestimonialsPage.vue"),
  "our-clients": async () =>
    await import("@/components/views/logistics/ourClients.vue"),
  "logistics-general-description": async () =>
    await import("@/components/views/logistics/generalDescription.vue"),
  "carousel-section": async () =>
    await import("@/components/views/logistics/carouselSection.vue"),
  "section-three": async () =>
    await import("@/components/views/logistics/sectionThree.vue"),
  "our-guarantee": async () =>
    await import("@/components/views/logistics/ourGuarantee.vue"),
  // "section-five": async () =>
  //   await import("@/components/views/logistics/sectionFive.vue"),
  "footer-section": async () =>
    await import("@/components/sections/footerSection.vue"),
  "article-section": async () =>
    await import("@/components/views/logistics/article.vue"), // Import the new page component
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
      articlePage: (state) => state.pageSection?.articlePage,
      ourClients: (state) => state.pageSection?.ourClients, 
      logisticsGeneralDescription: (state) =>
        state.pageSection?.logisticsGeneralDescription,
      carouselSection: (state) => state.pageSection?.carouselSection,
      logisticsSectionThree: (state) =>
        state.pageSection?.logisticsSectionThree,
      formSection: (state) => state.pageSection?.formSection,
      ourGuarantee: (state) => state.pageSection?.ourGuarantee,
      // logisticsSectionFive: (state) => state.pageSection?.logisticsSectionFive,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    areFullLoaded() {
      return (
        this.logisticsHero &&
        this.articlePage &&
        this.ourClients &&
        this.logisticsGeneralDescription &&
        this.carouselSection &&
        this.logisticsSectionThree &&
        this.formSection &&
        this.ourGuarantee &&
        // this.logisticsSectionFive &&
        this.footerSection
      );
    },
  },
  beforeDestroy() {
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "logisticsHero");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "articlePage");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "ourClients");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "logisticsGeneralDescription"
    );
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "carouselSection");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "logisticsSectionThree"
    );
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "formSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "ourGuarantee");
    // this.$store.dispatch(
    //   "loading/REMOVE_LOADED_COMPONENT",
    //   "logisticsSectionFive"
    // );
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