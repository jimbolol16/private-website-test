<template>
  <div>
    <div class="fixed top-0 w-full z-[40]">
      <ui-header :displayCitySelector="false"></ui-header>
    </div>
    <transition name="fade">
      <div id="studentsPage" v-show="areFullLoaded">
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
                    src="/promo/students/students.webp"
                    alt="students"
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
                      {{ $t("feature_2_3") }}
                    </li>
                    <li>{{ $t("feature_2_4") }}</li>
                    <li>{{ $t("feature_2_5") }}</li>
                  </ul>
                  <div v-html="$t('feature_3')"></div>
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
  name: "studentView",
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
    pageName: "studentsPage",
  },
  middleware({ redirect, app }) {
    // Check if we are in a valid domain to display bricodepot page
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
title: "Pack Verano Residencias - box2box"
meta_description: "Alquila tu trastero puerta a puerta para estudiantes. Recogemos tus cosas, las guardamos y te las devolvemos antes de empezar el nuevo curso."
feature_1_title: "¡El Verano es Tuyo con Box2box!"
feature_1_body: "Prepárate para las vacaciones sin estrés. Con Box2box, los estudiantes pueden almacenar sus cosas con facilidad. Te ofrecemos un espacio seguro para tus cosas en el que puedes almacenar hasta 20 cajas/bolsas/maletas, con un seguro de 3.000€. Y lo mejor ¡no pagas nada por el transporte!"
feature_2_title: "Tu pack de verano incluye:"
feature_2_1: "Un inventario digital para que tengas control total."
feature_2_2: "Almacenaje seguro durante 3 meses."
feature_2_3: "Un seguro que cubre hasta 3.000€."
feature_2_4: "Recogida y devolución en tu residencia en las fechas indicadas."
feature_2_5: "Devolución en tu residencia en las fechas indicadas."
feature_3: "<p class='font-roboto font-medium text-[24px] leading-[25px]'>Oferta: <span class='text-electric'>189€</span> <span class='font-roboto font-normal text-[21px] leading-[25px] text-dark/60 flex w-full pt-3'>¡Libera tu mente y tu habitación este verano!</span></p>"
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

<i18n lang="yaml" locale="es-en" src="@/i18n/views/students.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/students.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/students.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/students.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/students.yaml"></i18n>
