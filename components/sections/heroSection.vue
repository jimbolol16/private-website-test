<template>
  <div
    class="desktopL:h-screen desktop:h-screen desktopL:min-h-[720px] desktop:min-h-[720px] tablet:pb-16 mobileL:pb-10 mobile:pb-10 h-fit mobileL:col-span-8 mobile:col-span-4 col-span-12 flex justify-center"
    :class="{
      'desktopL:mt-32': displayBanner,
      'desktopL:mt-16': !displayBanner,
      'desktop:mt-32': displayBanner,
      'desktop:mt-16': !displayBanner,
      'tablet:pt-48': displayBanner,
      'tablet:pt-32': !displayBanner,
      'mobileL:pt-56': displayBanner,
      'mobileL:pt-24': !displayBanner,
      'mobile:pt-56': displayBanner,
      'mobile:pt-24': !displayBanner,
    }"
  >
    <!-- Background image -->
    <div class="absolute left-0 top-0 z-0 right-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-hero.svg"
            alt="herobackground"
            class="w-full"
            sizes="xl:920px lg:1405px"
            width="1405"
          />
        </div>
      </div>
    </div>

    <div class="subgrid-layout h-fit my-auto z-[1]">
      <h1
        class="desktopL:col-span-5 desktop:col-span-6 tablet:col-span-6 mobileL:col-span-8 mobile:col-span-4 col-start-1 mb-4 mobile:mb-2 mobileL:mb-2 tablet:min-w-[416px] desktopL:font-manrope desktopL:font-extrabold desktopL:text-[80px] desktopL:leading-[83px]"
      >
        {{ $t(`hero_prefix_${routePath}`) }}
        <span v-if="!isGeneralHero && !goToForm">
          {{ $t("hero_landing_city_suffix") }}
          <span class="text-electric">{{ landingCity.display_name }}</span>
        </span>
        {{ $t("hero_suffix") }}
        <span class="text-electric">{{ $t("hero_main") }}</span>
      </h1>
      <p
        class="hero-subheading desktopL:col-span-6 desktopL:col-end-7 desktop:col-span-6 desktop:col-end-7 tablet:col-span-6 tablet:col-end-7 mobileL:col-span-8 mobile:col-span-4 mobile:col-end-5 col-start-1 row-start-2 desktopL:mb-12 desktop:mb-12 tablet:mb-10 mobileL:mb-10 mobile:mb-4 desktopL:max-w-[740px]"
      >
        {{ $t("hero_subheader") }}
      </p>
      <nuxt-img
        :provider="$config.img_provider"
        src="/hero-arrow.svg"
        alt="heroarrow"
        class="z-[1] w-[128px] h-[56px] mobileL:hidden mobile:hidden row-start-2 col-start-6 col-span-3 mt-5 tablet:self-center desktopL:w-[168px] desktopL:mt-2"
      />

      <ui-city-selector
        size="large"
        :buttonText="$t('hero_cta')"
        @click="handleCityClick"
        class="desktopL:col-span-6 desktop:col-span-6 tablet:col-span-6 mobile:col-span-5 mobileL:col-span-8 row-start-3 col-start-1 desktopL:mb-12 desktop:mb-12 tablet:mb-8 mobileL:mb-8 mobile:mb-8"
        v-if="isGeneralHero"
      ></ui-city-selector>
      <div
        class="desktopL:col-span-6 desktop:col-span-6 tablet:col-span-6 mobileL:col-span-full mobile:col-span-full row-start-3 col-start-1 desktop:mb-12 tablet:mb-8 mobile:mb-8 desktopL:mb-12"
        v-else
      >
        <div class="flex mobileL:w-fit w-full">
          <ui-button
            v-if="!isGeneralHero && !goToForm"
            :arrow="true"
            @click="handleClick"
          >
            {{ $t("hero_cta") }}
          </ui-button>
          <ui-button v-if="goToForm" @click="goToFormSection()">
            {{ $t("hero_promo_quote") }}
          </ui-button>
        </div>
      </div>
      <nuxt-img
        :provider="$config.img_provider"
        src="/hero-people.png"
        alt="heropeople"
        class="desktopL:row-start-4 desktop:row-start-4 tablet:row-start-4 mobileL:row-start-5 mobile:row-start-5 col-start-1 desktopL:col-span-2 desktop:col-span-3 tablet:col-span-3 mobileL:col-span-6 mobile:col-span-4 mb-2 tablet:mb-4 desktop:mb-4 desktopL:mb-4"
        sizes="xl:225px lg:225px md:225px sm:225px xs:225px"
        width="225"
        height="46"
      />
      <p
        class="hero-sub-subheading desktopL:row-start-5 desktop:row-start-5 tablet:row-start-5 mobileL:row-start-6 mobile:row-start-6 col-start-1 tablet:col-span-6 desktopL:col-span-4 desktop:col-span-6 mobile:col-span-4 mobileL:col-span-8"
      >
        {{ $t("hero_audience") }}
      </p>

      <div
        class="mobileL:row-start-4 mobile:row-start-4 tablet:row-start-1 desktop:row-start-1 desktop:row-end-6 desktopL:row-start-1 desktopL:row-end-7 tablet:row-end-4 tablet:col-start-7 tablet:col-end-13 desktop:col-start-7 desktop:col-end-13 desktopL:col-start-7 desktopL:col-end-13 mobileL:col-start-2 mobileL:col-end-8 mobile:col-start-1 mobile:col-end-5 flex justify-center desktop:justify-end mobile:py-4 mobileL:py-4"
      >
        <div
          class="relative desktopL:translate-y-[-40px] mobile:translate-x-[18px]"
        >
          <nuxt-img
            :provider="$config.img_provider"
            src="/hero-image.webp"
            alt="heromainimage"
            class="desktopL:w-[632px] desktopL:h-[616px] desktop:w-[500px] desktop:h-[492px] tablet:w-[383px] tablet:h-[376px] w-full h-full"
            format="webp"
          />
          <nuxt-img
            class="z-3 scale-[1.5] absolute top-8 -left-10 mobileL:-left-8 tablet:top-4 max-w-[calc(100%/6)] tablet:max-w-[calc(100%/5)] mobileL:scale-[1.4] mobileBase:scale-[1.8] mobileBase:-left-3 mobileBase:top-4 mobileBasePlusOne:scale-[1.6] mobileBasePlusOne:top-7 mobileBasePlusOne:-left-4 mobileBasePlusTwo:scale-[1.7] mobileBasePlusTwo:top-7 mobileBasePlusTwo:-left-2 mobileBasePlusThree:scale-[1.6] mobileBasePlusThree:top-7 mobileBasePlusThree:-left-2 mobileBasePlusFour:scale-[1.5] mobileBasePlusFour:top-7 mobileBasePlusFour:-left-2"
            :provider="$config.img_provider"
            :src="`/labels/label_${localeMetadata.label.name}.${localeMetadata.label.format}`"
            alt="labelpromo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "heroSection",
  components: {
    "ui-city-selector": async () =>
      await import("@/components/uiCitySelector/uiCitySelector.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  props: {
    isGeneralHero: {
      type: Boolean,
      default: true,
    },
    goToForm: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [localesMetadata],
  computed: {
    ...mapState("landingCities", {
      landingCity: (state) => state.city,
    }),
    ...mapState("pricesWizard", {
      city: (state) => state.city,
    }),
    ...mapState("site", {
      displayBanner: (state) => state.displayBanner,
    }),
    routePath() {
      const routeName = this.$route.name.split("-")[0];
      return ["warehouses", "storages"].indexOf(routeName) !== -1
        ? routeName
        : "warehouses";
    },
  },
  methods: {
    handleClick() {
      // Set the selected city
      this.$store.dispatch(
        `pricesWizard/SET_CITY_ON_LANDING`,
        this.landingCity.city
      );
      this.$store.dispatch("pricesWizard/SET_CITY", this.landingCity.city);
      this.$store.dispatch("pricesWizard/SET_ORIGIN", this.routePath);
      this.handleCityClick();
    },
    goToFormSection() {
      this.$emit("scrollToForm");
    },
    handleCityClick() {
      this.$router.push({ path: this.localePath("/prices") });
    },
  },
  beforeDestroy() {
    if (this.isGeneralHero) {
      this.$store.dispatch("landingCities/RESET_ALL");
    }
  },
};
</script>

<style lang="scss" scoped>
.hero-subheading {
  @apply font-roboto font-normal text-dark/60 text-[18px] leading-[25px] mobileL:text-[16px] mobileL:leading-[25px] tablet:text-[16px] tablet:leading-[25px] desktop:text-[18px] desktop:leading-[27px];
}

.hero-sub-subheading {
  @apply font-roboto font-normal text-dark/60 desktopL:text-dark/50 text-[14px] leading-[20px] mobileL:text-[16px] mobileL:leading-[25px] tablet:text-[16px] tablet:leading-[25px] desktop:text-[18px] desktop:leading-[25px];
}
</style>

<i18n lang="yaml" locale="es">
hero_prefix_warehouses: "Alquiler de Trasteros"
hero_prefix_storages: "Alquiler de Guardamuebles"
hero_main: "Domicilio"
hero_suffix: "a"
hero_subheader: "Recogemos tus cosas, las guardamos y entregamos lo que necesites cuando quieras."
hero_audience: "12,000 personas ya han ahorrado tiempo y dinero con box2box"
hero_cta: "Precios"
hero_landing_city_suffix: "en"
hero_prefix_promo: "Alquiler de Trasteros"
hero_promo_quote: "Solicita presupuesto"
</i18n>
<i18n lang="yaml" locale="fr">
hero_prefix_warehouses: "Louez votre Box de stockage"
hero_prefix_storages: "Louez votre Garde meuble"
hero_main: "Domicile"
hero_suffix: "à"
hero_subheader: "Nous transportons vos affaires, nous les stockons et nous vous livrons ce dont vous avez besoin quand vous le souhaitez."
hero_audience: "12.000 personnes ont déjà économisé du temps et de l'argent avec box2box"
hero_cta: "Prix"
hero_landing_city_suffix: "dans"
hero_prefix_promo: "Location de stockage"
hero_promo_quote: "Demander un devis"
</i18n>
<i18n lang="yaml" locale="it">
hero_prefix_warehouses: "Depositi in affitto"
hero_prefix_storages: "Deposito mobili in affitto"
hero_main: "Domicilio"
hero_suffix: "a"
hero_subheader: "Ritiriamo a domicilio le tue cose, le custodiremo e ti riconsegneremo quello che ti serve quando vorrai"
hero_audience: "12.000 persone hanno deciso di risparmiare tempo e denaro con noi"
hero_cta: "Tariffe"
hero_landing_city_suffix: "in"
hero_prefix_promo: "Depositi in affitto"
hero_promo_quote: "Richiedi un preventivo"
</i18n>
<i18n lang="yaml" locale="pt">
hero_prefix_warehouses: "Aluguer de Armazéns"
hero_prefix_storages: "Aluguer de guarda-móveis"
hero_main: "Domicilio"
hero_suffix: "a"
hero_subheader: "Recolhemos as tuas coisas na tua morada, guardamos e entregamos o que precises quando queiras"
hero_audience: "12.000 pessoas já pouparam tempo e dinheiro com a box2box"
hero_cta: "Preços"
hero_landing_city_suffix: "em"
hero_prefix_promo: "Aluguer de armazéns"
hero_promo_quote: "Solicite um orçamento"
</i18n>
<i18n lang="yaml" locale="mx">
hero_prefix_warehouses: "Renta de Mini Bodegas"
hero_prefix_storages: "Renta de Mini Bodegas"
hero_main: "Domicilio"
hero_suffix: "a"
hero_subheader: "Recogemos tus cosas, las guardamos y entregamos lo que necesites cuando quieras."
hero_audience: "12,000 personas ya han ahorrado tiempo y dinero con box2box"
hero_cta: "Precios"
hero_landing_city_suffix: "en"
hero_prefix_promo: "Renta de Mini Bodegas"
hero_promo_quote: "Solicita presupuesto"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/hero.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/hero.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/hero.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/hero.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/hero.yaml"></i18n>
