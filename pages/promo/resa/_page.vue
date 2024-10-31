<template>
  <div>
    <div class="fixed top-0 w-full z-[40]">
      <ui-header :displayCitySelector="false"></ui-header>
    </div>
    <transition name="fade">
      <div id="resaPage" v-show="areFullLoaded">
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

            <div
              class="col-start-2 col-span-10 mobileL:col-start-1 mobileL:col-span-full mobileL:py-16 mobile:col-start-1 mobile:col-span-full mobile:py-16 section-vertical-padding z-[1]"
            >
              <div
                class="py-9 px-24 mobileL:py-10 mobileL:px-8 mobile:py-10 mobile:px-8 bg-white shadow-input rounded-xl border-solid border-[1px] border-[#EDEDED]"
              >
                <div class="flex w-full justify-center pb-12">
                  <nuxt-img
                    :provider="$config.img_provider"
                    src="/promo/resa/resa.webp"
                    alt="resa"
                    class="w-[194px]"
                  ></nuxt-img>
                </div>
                <div class="flex flex-col w-full gap-y-4 text-justify">
                  <h1
                    class="text-[35px] leading-[40px] tablet:text-[29px] tablet:leading-[36px] mobileL:text-[26px] mobileL:leading[30px] mobile:text-[21px] mobile:leading-[24px] font-bold -tracking-[0.03em]"
                  >
                    {{ $t("feature_1_title") }}
                  </h1>
                  <p class="p2" v-html="$t('feature_1_body')"></p>
                  <h1
                    class="text-[35px] leading-[40px] tablet:text-[29px] tablet:leading-[36px] mobileL:text-[26px] mobileL:leading[30px] mobile:text-[21px] mobile:leading-[24px] font-bold -tracking-[0.03em]"
                  >
                    {{ $t("feature_2_title") }}
                  </h1>
                  <ul
                    class="list-disc pl-7 font-roboto font-normal text-[18px] leading-[25px] text-dark/60"
                  >
                    <li>{{ $t("feature_2_1") }}</li>
                    <li>{{ $t("feature_2_2") }}</li>
                    <li>
                      {{
                        $t("feature_2_3", {
                          amount: insurance[$i18n.localeProperties.country],
                        })
                      }}
                    </li>
                    <li>{{ $t("feature_2_4") }}</li>
                    <li>{{ $t("feature_2_5") }}</li>
                  </ul>
                  <h2
                    class="font-roboto not-italic font-medium text-[24px] leading-[25px] tablet:text-[21px] tablet:leading-[24px] mobileL:text-[19px] mobileL:leading[23px] mobile:text-[18px] mobile:leading-[22px] pt-3 pb-5"
                    v-html="
                      $t('feature_3', { price: prices[$route.params.page] })
                    "
                  ></h2>
                </div>
              </div>
            </div>
            <client-only>
              <form-section
                ref="form"
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
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "resaView",
  layout: "promoResaPage",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "hero-section": async () =>
      await import("@/components/sections/heroSection.vue"),
    "section-one": async () =>
      await import("@/components/promo/livensa/sectionOne.vue"),
    "form-section": async () =>
      await import("@/components/sections/formSection.vue"),
    "footer-section": async () =>
      await import("@/components/sections/footerSection.vue"),
  },
  head() {
    const availableLocales =
      this.$i18n.localeProperties.availableLocales[0].code;
    const locales = [this.$i18n.localeProperties.code, availableLocales];
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
        {
          hid: "robots",
          name: "robots",
          content: "noindex, nofollow",
        },
        ...meta,
      ],
      ...nuxtI18nHead,
    };
  },
  nuxtI18n: {
    locales: ["es", "es-en"],
  },
  meta: {
    pageName: "resaPage",
  },
  mixins: [nuxtI18nHeadFixer],
  middleware({ store, params, redirect, app }) {
    // Check if we are in a valid domain to display bricodepot page
    if (["es"].indexOf(app.i18n.localeProperties.country) === -1) {
      redirect(app.localePath("/"));
    }

    /* Ensure we are in a valid route */
    const validRoutes =
      store.state.promoResa.routesPerSite[app.i18n.localeProperties.country];
    if (
      !validRoutes ||
      (validRoutes && validRoutes.indexOf(params.page) === -1)
    ) {
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
    ...mapState("promoResa", {
      prices: (state) => state.prices,
      insurance: (state) => state.insurance,
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
title: "Pack Verano RESA Residencias - box2box"
meta_description: "Alquila tu trastero puerta a puerta para estudiantes. Recogemos tus cosas, las guardamos y te las devolvemos antes de empezar el nuevo curso."
feature_1_title: "\"Pack de verano\" RESA Residencias"
feature_1_body: "
Box2box te ofrece servicio de almacenaje puerta a puerta
para estudiantes, pudiendo almacenar hasta 20 objetos (cajas y maletas). <br />
Al ser residente en RESA Residencias, ¡disfrutas de un
descuento exclusivo! Al reservar a través de la residencia
no pagarás nada por el transporte."
feature_2_title: "¿Qué va incluido en el \"pack de verano\"?"
feature_2_1: "Inventario digital"
feature_2_2: "Almacenaje durante todo el verano"
feature_2_3: "Un seguro que cubre hasta {amount}€"
feature_2_4: "Recogida en la residencia en las fechas indicadas"
feature_2_5: "Devolución de las cosas en la misma residencia, en fechas indicadas"
feature_3: "El precio total de los 3 meses de almacenamiento es de <span class='text-electric'>{price}€</span>"
</i18n>
<i18n lang="yaml" locale="fr">
title: " "
meta_description: " "
feature_1_title: " "
feature_1_body: " "
feature_2_title: " "
feature_2_1: " "
feature_2_2: " "
feature_2_3: " "
feature_2_4: " "
feature_2_5: " "
feature_3: " "
</i18n>
<i18n lang="yaml" locale="it">
title: " "
meta_description: " "
feature_1_title: " "
feature_1_body: " "
feature_2_title: " "
feature_2_1: " "
feature_2_2: " "
feature_2_3: " "
feature_2_4: " "
feature_2_5: " "
feature_3: " "
</i18n>
<i18n lang="yaml" locale="pt">
title: " "
meta_description: " "
feature_1_title: " "
feature_1_body: " "
feature_2_title: " "
feature_2_1: " "
feature_2_2: " "
feature_2_3: " "
feature_2_4: " "
feature_2_5: " "
feature_3: " "
</i18n>
<i18n lang="yaml" locale="mx">
title: " "
meta_description: " "
feature_1_title: " "
feature_1_body: " "
feature_2_title: " "
feature_2_1: " "
feature_2_2: " "
feature_2_3: " "
feature_2_4: " "
feature_2_5: " "
feature_3: " "
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/resa/_page.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/resa/_page.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/resa/_page.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/resa/_page.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/resa/_page.yaml"></i18n>
