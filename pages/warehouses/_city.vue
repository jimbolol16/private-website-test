<template>
  <div>
    <ui-error v-if="$fetchState.error"></ui-error>
    <transition name="fade">
      <div id="landingPage" v-show="areFullLoaded">
        <section class="grid-layout" v-if="!$fetchState.error">
          <hero-section
            :isGeneralHero="false"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'heroSection')
            "
          ></hero-section>
          <section-one
            :key="city.display_name"
            :context="city.display_name"
            :renderVideo="true"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionOne')
            "
          ></section-one>
          <div class="col-span-full section-vertical-padding">
            <hiring-section
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'hiringSectionOne'
                )
              "
            ></hiring-section>
          </div>
          <review-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'reviewSection')
            "
          ></review-section>

          <!-- SEO text - block one -->
          <div
            class="col-start-1 col-span-full mobile:col-start-1 mobile:col-span-full z-[1] space-y-14 section-vertical-padding"
            v-if="city.seo_text_one"
          >
            <div
              class="font-roboto font-normal text-dark/60 text-[18px] leading-[27px] mobileL:text-[18px] mobileL:leading-[25px] tablet:text-[18px] tablet:leading-[27px] desktop:text-[18px] desktop:leading-[27px] desktopL:text-[18px] desktopL:leading-[27px] text-justify"
              v-html="city.seo_text_one"
            ></div>
            <hiring-section
              :displayTitle="false"
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'hiringSectionTwo'
                )
              "
            ></hiring-section>
          </div>

          <div class="col-start-1 col-span-full mb-20 z-[1]">
            <ui-plans
              store="pricesWizard"
              :isLandingLayout="true"
              @click="handlePlanClick"
            ></ui-plans>
          </div>

          <!-- SEO text -->
          <div
            class="col-start-2 col-span-10 mobileL:col-start-1 mobileL:col-span-full mobileL:py-16 mobile:col-start-1 mobile:col-span-full mobile:py-16 section-vertical-padding z-[1]"
            v-if="!hideContent && city.text"
          >
            <div
              class="py-16 px-24 mobileL:py-10 mobileL:px-4 mobile:py-10 mobile:px-4 bg-white shadow-input"
            >
              <div
                class="font-roboto font-normal text-dark/60 text-[18px] leading-[27px] mobileL:text-[18px] mobileL:leading-[25px] tablet:text-[18px] tablet:leading-[27px] desktop:text-[18px] desktop:leading-[27px] desktopL:text-[18px] desktopL:leading-[27px] text-justify"
                v-html="city.text"
              ></div>
            </div>
          </div>

          <section-four
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionFour')
            "
          ></section-four>

          <!-- SEO text - block two -->
          <div
            class="col-start-1 col-span-full mobileL:py-16 mobile:col-start-1 mobile:col-span-full section-vertical-padding z-[1]"
            v-if="city.seo_text_two"
          >
            <div
              class="font-roboto font-normal text-dark/60 text-[18px] leading-[27px] mobileL:text-[18px] mobileL:leading-[25px] tablet:text-[18px] tablet:leading-[27px] desktop:text-[18px] desktop:leading-[27px] desktopL:text-[18px] desktopL:leading-[27px] text-justify"
              v-html="city.seo_text_two"
            ></div>
          </div>

          <section-nine
            :class="{ 'section-vertical-padding': !hideContent }"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionNine')
            "
          ></section-nine>

          <!-- Most searched locations -->
          <div
            class="col-start-1 col-span-full subgrid-layout"
            v-if="neighborhoods?.length > 0"
          >
            <div class="flex col-span-full w-full justify-center">
              <h5>{{ $t("loc_title") }}</h5>
            </div>

            <neighborhood-links
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'neighborhoodLinks'
                )
              "
            ></neighborhood-links>
          </div>

          <!-- SEO text - block zones -->
          <div
            class="col-start-1 col-span-full mobileL:py-16 mobile:col-start-1 mobile:col-span-full z-[1] pt-[152px] mobile:pt-[96px]"
            v-if="city.seo_text_zones"
          >
            <div
              class="font-roboto font-normal text-dark/60 text-[18px] leading-[27px] mobileL:text-[18px] mobileL:leading-[25px] tablet:text-[18px] tablet:leading-[27px] desktop:text-[18px] desktop:leading-[27px] desktopL:text-[18px] desktopL:leading-[27px] text-justify"
              v-html="city.seo_text_zones"
            ></div>
          </div>
        </section>

        <!-- Map section -->
        <map-section></map-section>

        <div class="grid-layout pt-[152px] mobile:pt-[96px]">
          <div class="col-start-1 col-span-full">
            <hiring-section
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'hiringSectionThree'
                )
              "
            ></hiring-section>
          </div>
        </div>

        <section-ten
          v-if="!$fetchState.error"
          @hook:mounted="
            $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionTen')
          "
        ></section-ten>
        <footer-section
          v-if="!$fetchState.error"
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
import localesMetadata from "@/mixins/localesMetadata";
import nuxtI18nHeadFixer from "@/mixins/canonicals";
import { mapStyles, getMarker } from "@/utils/mapData";
import {
  hydrateNever,
  hydrateWhenIdle,
  hydrateWhenVisible,
} from "vue-lazy-hydration";
import capitalizeFirstLetter from "@/utils/capitalize";

export default {
  name: "index",
  layout: "cityLandingPage",
  components: {
    "hero-section": hydrateWhenVisible(
      async () => await import("@/components/sections/heroSection.vue")
    ),
    "section-one": hydrateWhenVisible(
      async () => await import("@/components/landings/sectionOne.vue")
    ),
    "hiring-section": hydrateWhenVisible(
      async () => await import("@/components/sections/hiringSection.vue")
    ),
    "review-section": async () =>
      await import("@/components/sections/reviewSection.vue"),
    "section-four": hydrateNever(
      async () => await import("@/components/sections/sectionFour.vue")
    ),
    "section-nine": hydrateWhenIdle(
      async () => await import("@/components/sections/sectionNine.vue")
    ),
    "section-ten": hydrateNever(
      async () => await import("@/components/sections/sectionTen.vue")
    ),
    "neighborhood-links": hydrateWhenVisible(
      async () =>
        await import("@/components/views/cityLanding/neighborhoodLinks.vue")
    ),
    "footer-section": hydrateWhenVisible(
      async () => await import("@/components/sections/footerSection.vue")
    ),
    "ui-error": async () => await import("@/components/uiError.vue"),
    "map-section": hydrateWhenVisible(
      async () =>
        await import("@/components/sections/mapSection/landingMapSection.vue")
    ),
    "ui-plans": async () =>
      await import("@/components/wizard/uiWizardPlans.vue"),
    // [process.client && "leaflet-map"]: async () =>
    //   await import("@/components/leafletMap.vue"),
  },
  async fetch() {
    try {
      const response = await this.$api.$get("/api/cities", {
        params: {
          city: this.$route.params.city,
          lang: this.localeMetadata.simplifiedLang,
          type: this.$route.name.split("-")[0],
          site: this.localeMetadata.country,
        },
      });

      // Update dom
      this.$store.dispatch("landingCities/SET_CITY", response.city);
      this.$store.dispatch(
        "landingCities/SET_NEIGHBORHOODS",
        response.neighborhoods
      );

      // Set current city for price carrousel
      this.$store.dispatch(
        "pricesWizard/SET_CITY_ON_LANDING",
        response.city.city
      );
      this.$store.dispatch("pricesWizard/SET_CITY", response.city.city);
    } catch (error) {
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404;
      }
      throw new Error(error);
    }
  },
  head() {
    const nuxtI18nHead = this.nuxtI18nHeadFixer();

    // Replace default canonical with fetched from server
    const link = nuxtI18nHead.link.map((x) =>
      x.hid === "i18n-can"
        ? {
            ...x,
            href: `${x.href
              .split("/")
              .splice(0, x.href.split("/").length - 1)
              .join("/")}/${this.city.canonical}`,
          }
        : x
    );

    return {
      title: this.city.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.city.meta_description,
        },
      ],
      link: [...link],
      script: [this.faqContentJsonId()],
    };
  },
  meta: {
    pageName: "landingCity",
  },
  mixins: [localesMetadata, nuxtI18nHeadFixer],
  data() {
    return {
      zoom: 9,
      mapStyles: mapStyles,
    };
  },
  computed: {
    ...mapState("landingCities", {
      city: (state) => state.city,
      neighborhoods: (state) => state.neighborhoods,
    }),
    ...mapState("loading", {
      heroSection: (state) => state.pageSection?.heroSection,
      sectionOne: (state) => state.pageSection?.sectionOne,
      sectionFour: (state) => state.pageSection?.sectionFour,
      sectionNine: (state) => state.pageSection?.sectionNine,
      sectionTen: (state) => state.pageSection?.sectionTen,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    areFullLoaded() {
      return (
        this.heroSection &&
        this.sectionOne &&
        this.sectionFour &&
        this.sectionNine &&
        this.sectionTen &&
        this.footerSection
      );
    },
    hideContent() {
      return this.neighborhoods && this.neighborhoods.length === 0;
    },
    marker() {
      return getMarker(this.localeMetadata.country, this.$route.params.city);
    },
  },
  methods: {
    faqContentJsonId() {
      let jsonBody = {
        "@context": "https://schema.org",
        "@type": "SelfStorage",
        name: `Box2Box ${this.city.display_name}`,
        url: `${this.$config.siteURL}${this.$route.path}`,
      };

      if (this.city.address) {
        jsonBody["address"] = {
          "@type": "PostalAddress",
          streetAddress: this.city.address,
          addressLocality: this.city.store_city,
          postalCode: this.city.postal_code,
          addressCountry: this.city.country,
        };
      }

      // Populate opening hours
      const daysOfWeek = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ];
      let openingDays = [];

      daysOfWeek.forEach((day) => {
        const openDate = this.city[`${day}_open`];
        const closeDate = this.city[`${day}_close`];

        if (openDate && closeDate) {
          openingDays.push({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: capitalizeFirstLetter(day),
            opens: openDate,
            closes: closeDate,
          });
        }
      });

      if (openingDays.length > 0) {
        jsonBody["openingHoursSpecification"] = openingDays;
      }

      return {
        type: "application/ld+json",
        json: jsonBody,
      };
    },
    handlePlanClick() {
      this.$store.dispatch("pricesWizard/SET_FROM_LANDING_PAGE", true);
      this.$router.push({ path: this.localePath("/prices") });
    },
  },
  beforeDestroy() {
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "heroSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionOne");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionFour");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionNine");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionTen");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "footerSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "hiringSectionOne");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "hiringSectionTwo");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "hiringSectionThree"
    );
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "neighborhoodLinks"
    );
  },
  beforeRouteLeave(to, from, next) {
    // Reset pricesWizard store if we are navigating to not allowed url
    const allowedToPath = `/${this.$i18n.locale}/prices`;
    if (to.path !== allowedToPath) {
      this.$store.dispatch("pricesWizard/RESET_ALL");
    }

    // Reset landing cities to avoid display store address
    this.$store.dispatch("landingCities/RESET_ALL");
    next();
  },
};
</script>
<style lang="scss" scoped>
:deep(.h3-custom) {
  @apply mb-6 leading-10;
}
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
loc_title: "Las ubicaciones más buscadas"
</i18n>
<i18n lang="yaml" locale="fr">
loc_title: "Les emplacements les plus recherchés"
</i18n>
<i18n lang="yaml" locale="it">
loc_title: "I piu cercati"
</i18n>
<i18n lang="yaml" locale="pt">
loc_title: "Locais mais procurados"
</i18n>
<i18n lang="yaml" locale="mx">
loc_title: "Las ubicaciones más buscadas"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/_city.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/_city.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/_city.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/_city.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/_city.yaml"></i18n>
