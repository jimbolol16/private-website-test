<template>
  <div>
    <transition name="fade">
      <div id="aboutPage" v-show="areFullLoaded">
        <div class="flex flex-col">
          <hero-section
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'aboutHero')
            "
          ></hero-section>
          <who-we-are
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'whoWeAreSection')
            "
          ></who-we-are>
          <section-three
            @hook:mounted="
              $store.dispatch(
                'loading/ADD_LOADED_COMPONENT',
                'aboutSectionThree'
              )
            "
          ></section-three>
          <section-two
            :inHome="false"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'sectionTwo')
            "
          ></section-two>
          <client-only>
            <where-we-are
              @hook:mounted="
                $store.dispatch('loading/ADD_LOADED_COMPONENT', 'whereWeAre')
              "
            ></where-we-are>
            <template #placeholder>
              <where-we-are></where-we-are>
            </template>
          </client-only>
          <div class="grid-layout">
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
          </div>
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
  name: "aboutView",
  layout: "aboutPage",
  components: {
    "hero-section": async () =>
      await import("@/components/views/about/aboutHero.vue"),
    "section-two": async () =>
      await import("@/components/sections/sectionTwo.vue"),
    "where-we-are": async () =>
      await import("@/components/views/about/whereWeAre.vue"),
    "form-section": async () =>
      await import("@/components/sections/formSection.vue"),
    "footer-section": async () =>
      await import("@/components/sections/footerSection.vue"),
    "who-we-are": async () =>
      await import("@/components/views/about/whoWeAreSection.vue"),
    "section-three": async () =>
      await import("@/components/views/about/aboutSectionThree.vue"),
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
  meta: {
    pageName: "aboutUs",
  },
  computed: {
    ...mapState("loading", {
      aboutHero: (state) => state.pageSection?.aboutHero,
      whoWeAreSection: (state) => state.pageSection?.whoWeAreSection,
      aboutSectionThree: (state) => state.pageSection?.aboutSectionThree,
      sectionTwo: (state) => state.pageSection?.sectionTwo,
      whereWeAre: (state) => state.pageSection?.whereWeAre,
      formSection: (state) => state.pageSection?.formSection,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    areFullLoaded() {
      return (
        this.aboutHero &&
        this.whoWeAreSection &&
        this.aboutSectionThree &&
        this.sectionTwo &&
        this.whereWeAre &&
        this.formSection &&
        this.footerSection
      );
    },
  },
  beforeDestroy() {
    // Clear rendering page state
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "aboutHero");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "whoWeAreSection");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "aboutSectionThree"
    );
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "sectionTwo");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "whereWeAre");
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
title: "Empresa de trasteros con recogida a domicilio | Box2box"
meta_description: "Empresa de trasteros con recogida a domicilio | Box2box"
</i18n>
<i18n lang="yaml" locale="fr">
title: "Entreprise de stockage avec collecte à domicile | Box2box"
meta_description: "Nous sommes une société de stockage à domicile dont l'objectif est de faciliter la vie de nos clients grâce à un service innovant, la collecte de vos meubles et effets personnels directement à votre domicile. La collecte et le transport sont inclus dans le prix de l'entrepôt. Entrez !"
</i18n>
<i18n lang="yaml" locale="it">
title: "Azienda di deposito con ritiro a domicilio | Box2box"
meta_description: "Siamo un'azienda di deposito a domicilio il cui obiettivo è quello di semplificare la vita dei nostri clienti attraverso un servizio innovativo, il ritiro dei vostri mobili e oggetti direttamente a casa vostra. Il ritiro e il trasporto sono inclusi nel prezzo del deposito. Entrate!"
</i18n>
<i18n lang="yaml" locale="pt">
title: "🥇Empresa de armazenamento com recolha ao domicilio | Box2box"
meta_description: "Somos uma empresa de armazenamento a domicilio cujo objectivo é facilitar a vida aos nossos clientes através de um serviço inovador, a recolha dos seus móveis e pertences directamente em sua casa. A recolha e o transporte estão incluídos no preço da sala de armazenagem. Entre!"
</i18n>
<i18n lang="yaml" locale="mx">
title: "Empresa de mini bodegas con recogida a domicilio | Box2box"
meta_description: "Empresa de mini bodegas con recogida a domicilio | Box2box"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/pricesPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/pricesPage.yaml"></i18n>
