<template>
  <div>
    <transition name="fade">
      <div id="businessPage" v-show="areFullLoaded">
        <div class="flex flex-col">
          <hero-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'businessHero')
            "
          ></hero-section>
          <business-general-description
            @hook:mounted="
              $store.dispatch(
                'loading/ADD_LOADED_COMPONENT',
                'businessGeneralDescription'
              )
            "
          ></business-general-description>
          <section class="grid-layout">
            <section-three
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'businessSectionThree'
                )
              "
            ></section-three>
            <section-five
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'businessSectionFive'
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

export default {
  name: "businessView",
  layout: "businessPage",
  components: {
    "hero-section": async () =>
      await import("@/components/views/business/hero.vue"),
    "form-section": async () =>
      await import("@/components/sections/formSection.vue"),
    "business-general-description": async () =>
      await import(
        "@/components/views/business/businessGeneralDescription.vue"
      ),
    "section-three": async () =>
      await import("@/components/views/business/businessSectionThree.vue"),
    "our-guarantee": async () =>
      await import("@/components/views/business/ourGuarantee.vue"),
    "section-five": async () =>
      await import("@/components/views/business/sectionFive.vue"),
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
      ],
    };
  },
  computed: {
    ...mapState("loading", {
      businessHero: (state) => state.pageSection?.businessHero,
      businessGeneralDescription: (state) =>
        state.pageSection?.businessGeneralDescription,
      businessSectionThree: (state) => state.pageSection?.businessSectionThree,
      formSection: (state) => state.pageSection?.formSection,
      ourGuarantee: (state) => state.pageSection?.ourGuarantee,
      businessSectionFive: (state) => state.pageSection?.businessSectionFive,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    areFullLoaded() {
      return (
        this.businessHero &&
        this.businessGeneralDescription &&
        this.businessSectionThree &&
        this.formSection &&
        this.ourGuarantee &&
        this.businessSectionFive &&
        this.footerSection
      );
    },
  },
  beforeDestroy() {
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "businessHero");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "businessGeneralDescription"
    );
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "businessSectionThree"
    );
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "formSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "ourGuarantee");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "businessSectionFive"
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
title: "Alquiler de trasteros a Domicilio para empresas| Box2box"
meta_description: "Alquiler de Trasteros para pequeñas, medianas y grandes empresas. Guardamuebles con transporte incluido que facilita la logística empresarial. Precios adaptados a todas las necesidades y presupuestos, ahorro en costes de almacenaje y transporte. ¡Entra!"
</i18n>
<i18n lang="yaml" locale="fr">
title: "Location de stockage à domicile pour les entreprises | Box2box"
meta_description: "Location d'entrepôts pour les petites, moyennes et grandes entreprises. Stockage avec transport inclus pour faciliter la logistique des affaires. Des prix adaptés à tous les besoins et budgets, des économies sur les frais de stockage et de transport. Entrez !"
</i18n>
<i18n lang="yaml" locale="it">
title: "Affitto di depositi a domicilio per aziende | Box2box"
meta_description: "Aluguer de armazenamento para pequenas, médias e grandes empresas. Armazenamento com transporte incluído para facilitar a logística comercial. Preços adaptados a todas as necessidades e orçamentos, poupando nos custos de armazenamento e transporte. Entre!	Affitto di depositi a domicilio per aziende | Box2box	Noleggio di magazzini per piccole, medie e grandi aziende. Stoccaggio con trasporto incluso per facilitare la logistica aziendale. Prezzi adatti a tutte le esigenze e a tutti i budget, risparmiando sui costi di stoccaggio e di trasporto. Entrate!"
</i18n>
<i18n lang="yaml" locale="pt">
title: "Aluguer de Armazenamento para Empresas | Box2box"
meta_description: "Aluguer de armazenamento para pequenas, médias e grandes empresas. Armazenamento com transporte incluído para facilitar a logística comercial. Preços adaptados a todas as necessidades e orçamentos, poupando nos custos de armazenamento e transporte. Entre!"
</i18n>
<i18n lang="yaml" locale="mx">
title: "Renta de mini bodegas a Domicilio para empresas| Box2box"
meta_description: "Renta de mini bodegas para pequeñas, medianas y grandes empresas con transporte incluido que facilita la logística empresarial. Precios adaptados a todas las necesidades y presupuestos, ahorro en costes de almacenaje y transporte. ¡Entra!"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/faqPage.yaml"></i18n>
