<template>
  <div>
    <ui-header :displayCitySelector="false"></ui-header>
    <transition name="fade">
      <div id="ciudadelaPage" v-show="areFullLoaded">
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
                    src="/promo/ciudadela/ciudadela.webp"
                    alt="ciudadela"
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
                    <li v-html="$t('feature_2')"></li>
                    <li v-html="$t('feature_3')"></li>
                  </ul>
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

export default {
  name: "ciudadelaView",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "hero-section": async () =>
      await import("@/components/sections/heroSection.vue"),
    "section-one": async () =>
      await import("@/components/sections/sectionOne.vue"),
    "form-section": async () =>
      await import("@/components/sections/formSection.vue"),
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
    locales: ["es", "es-en"],
  },
  meta: {
    pageName: "ciudadelaPage",
  },
  middleware({ redirect, app }) {
    // Check if we are in a valid domain to display ciudadela page
    if (["es"].indexOf(app.i18n.localeProperties.country) === -1) {
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
title: "Ciudadela | Box2box alquiler de trasteros a domicilio"
meta_description: "Aprovecha la promoción de alquiler de trasteros de box2box con Ciudadela. Almacenamiento seguro y excelentes tarifas en nuestros espacios. ¡Llámanos!"
feature_1_title: "Colaboración ciudadela con box2box"
feature_1_body: "
Box2box ofrece un servicio de almacenaje puerta a puerta de alta calidad:
recogemos, almacenamos y te devolvemos tus cosas sin necesidad de que te muevas de casa,
¡nos adaptamos a tus necesidades!
Gracias al inventario online, podrás tener todas tus cosas en casa
¡en un solo clic!<br><br>
Además, como cliente de ciudadela, recibirás una tarifa especial en todos los servicios de box2box.
Esto significa que puedes disfrutar de la comodidad y la seguridad de un servicio de almacenamiento de primera clase a un precio asequible."
feature_2_title: "¿Qué incluye la promoción?"
feature_2: "<b>Trastero <span class='text-electric'>un mes gratis</span></b> (con un periodo mínimo de contratación de 3 meses)"
feature_3: "<b>Recogida <span class='text-electric'>gratis</span> hasta 6m²</b> (hasta un 50% de descuento para espacios superiores)"

</i18n>
<i18n lang="yaml" locale="fr">
title: " "
meta_description: " "
feature_1_title: " "
feature_1_body: " "
feature_2_title: " "
feature_2: " "
feature_3: " "
</i18n>
<i18n lang="yaml" locale="it">
title: " "
meta_description: " "
feature_1_title: " "
feature_1_body: " "
feature_2_title: " "
feature_2: " "
feature_3: " "
</i18n>
<i18n lang="yaml" locale="pt">
title: " "
meta_description: " "
feature_1_title: " "
feature_1_body: " "
feature_2_title: " "
feature_2: " "
feature_3: " "
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/ciudadelaPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/ciudadelaPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/ciudadelaPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/ciudadelaPage.yaml"></i18n>
