<template>
  <div>
    <ui-error v-if="$fetchState.error"></ui-error>
    <transition name="fade">
      <div id="faqPage" v-show="areFullLoaded">
        <section
          class="grid-layout section-vertical-padding"
          v-if="!$fetchState.error"
        >
          <!-- Background image -->
          <div class="absolute left-0 top-0 z-0">
            <div class="relative">
              <div class="overflow-hidden top-0">
                <nuxt-img
                  :provider="$config.img_provider"
                  src="/background/grad-faq.svg"
                  alt="faqbackground"
                  class="max-h-[770px] opacity-60"
                />
              </div>
            </div>
          </div>

          <div
            class="col-start-1 col-span-7 desktopL:col-start-2 desktopL:col-span-6 tablet:col-span-9 row-start-1 desktopL:mt-32 desktop:mt-32 tablet:mt-32 mobile:col-span-3 mobile:mt-16 mobileL:mt-16"
            :class="{
              'desktopL:mt-48': displayBanner,
              'desktop:mt-48': displayBanner,
              'tablet:mt-48': displayBanner,
            }"
            id="sectionHeader"
            v-intersect="{
              onChange: handleFloatingMenuIntersection,
              observerOptions: {
                threshold: 1,
                rootMargin: '128px 0px 0px 0px',
              },
            }"
          >
            <h1
              class="desktopL:text-[54px] desktopL:leading-[64px] desktop:text-[54px] desktop:leading-[64px]"
            >
              {{ $t("faq_title") }}
            </h1>
          </div>

          <div
            class="col-start-2 col-span-2 desktop:ml-8 desktopL:col-start-2 desktopL:col-span-2 desktopL:flex desktopL:justify-center tablet:col-start-1 mobileL:col-start-1 mobileL:col-span-full mobileL:mt-16 mobile:col-start-1 mobile:col-span-full mobile:mt-8 row-start-2 mt-16 tablet:mt-14"
            v-intersect="{
              onChange: setSelectableMenuPosition,
              observerOptions: {
                threshold: 1,
                rootMargin: '0px 0px 0px 0px',
              },
            }"
          >
            <faq-menu
              class="fixed mobileL:hidden mobile:hidden"
              ref="faqMenu"
              :entries="menuEntries"
              @click="handleMenuClick"
            ></faq-menu>

            <!-- Top select -->
            <faq-menu-mobile
              class="fixed desktopL:hidden desktop:hidden tablet:hidden"
              ref="faqMenuMobile"
              :entries="menuEntries"
              @click="handleMenuClick"
              v-if="shouldDisplayFaqMenuMobile"
            ></faq-menu-mobile>

            <!-- Footer select -->
            <transition
              enter-class="opacity-0"
              enter-active-class="transition-opacity duration-500 ease-out"
            >
              <div
                class="z-10 fixed bottom-0 w-full left-0 right-0 bg-white desktopL:hidden desktop:hidden tablet:hidden"
                v-if="shouldDisplayFaqMenuMobileBottom"
              >
                <div class="py-4 px-4">
                  <faq-menu-mobile
                    class="fixed desktopL:hidden desktop:hidden tablet:hidden"
                    ref="faqMenuMobileBottom"
                    :entries="menuEntries"
                    @click="handleMenuClick"
                    dropdownPosition="top"
                  ></faq-menu-mobile>
                </div>
              </div>
            </transition>
          </div>

          <div
            class="col-start-4 col-span-8 desktopL:col-span-7 tablet:col-start-3 tablet:col-span-full row-start-2 mobileL:row-start-3 mobileL:col-start-1 mobileL:col-span-full mobileL:mt-2 mobile:row-start-3 mobile:col-start-1 mobile:col-span-full mobile:mt-2 mt-2"
            ref="faqContent"
          >
            <div
              class="flex flex-col w-full spacing mt-14 tablet:mt-12 mobile:mt-12"
              v-for="(entry, index) in entries"
              :key="entry.id"
              :id="`${entry.categoryName.replace(/\s/g, '')}-content`"
              :index="index"
              v-intersect="{
                onChange: handleIntersection,
                observerOptions: { threshold: 1 },
              }"
            >
              <h3 class="first-letter:capitalize">{{ entry.categoryName }}</h3>
              <faq-content
                v-for="(item, index) in entry.data"
                :key="item._id"
                :title="item.title"
                :expanded="index === 0"
                @hook:mounted="
                  $store.dispatch('loading/ADD_LOADED_COMPONENT', 'faqContent')
                "
              >
                {{ item.body }}
              </faq-content>
            </div>
          </div>
        </section>
        <footer-section
          class="mobileL:mb-[88px] mobile:mb-[88px]"
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
import localesMetadata from "@/mixins/localesMetadata";
import { mapState } from "vuex";

export default {
  name: "faqView",
  layout: "landingPage",
  scrollToTop: true,
  components: {
    "faq-menu": async () => await import("@/components/views/faq/faqMenu.vue"),
    "faq-content": async () =>
      await import("@/components/sections/faqSection/faqContent.vue"),
    "faq-menu-mobile": async () =>
      await import("@/components/views/faq/faqMenuMobile.vue"),
    "footer-section": async () =>
      await import("@/components/sections/footerSection.vue"),
    "ui-error": async () => await import("@/components/uiError.vue"),
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
  meta: {
    pageName: "faq",
  },
  async fetch() {
    // Bring faq data from server
    try {
      const response = await this.$api.$get("/api/faqs", {
        params: {
          site: this.localeMetadata.country,
          lang: this.localeMetadata.simplifiedLang,
        },
      });
      const categories = response.categories;
      const data = response.data;

      // Sort array of categories
      categories.sort((a, b) => a.id - b.id);

      // Parse data in order to set sections accordingly
      data.sort((a, b) => a._id - b._id);

      // Update dom
      this.entries = data;
      this.menuEntries = categories.map((a) => a.name);
    } catch (error) {
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404;
      }
      throw new Error(error);
    }
  },
  mounted() {
    var self = this;

    setTimeout(() => {
      // Add an event listener on the scroll to handle the floating menu position accordingly
      // This eventlistener must be added with some delay to avoid shift layouts during render time
      window.addEventListener("scroll", self.setFloatingMenuPosition);
    }, 1500);
  },
  mixins: [localesMetadata],
  data() {
    return {
      menuEntries: [],
      entries: [],
      activeSections: {},
      shouldDisplayFaqMenuMobileBottom: false,
      shouldDisplayFaqMenuMobile: false,
      isRouteNavigation: false,
    };
  },
  computed: {
    /**
     * Get the offset from the screen top to the faqMenu:
     * - Get the top position where faqMenu starts
     * - Gets the height of section header element
     * - Get the height of the header
     * - The offset will be result of subsctracting to the top position the height of the header and section header
     */
    offset() {
      const bannerSiteHeight =
        document.getElementById("siteSwitcher")?.getBoundingClientRect()
          ?.height || 0;
      return (
        this.$refs.faqMenu.$el.getBoundingClientRect().top -
        document.getElementById("sectionHeader").getBoundingClientRect()
          .height -
        (64 + bannerSiteHeight)
      );
    },
    ...mapState("loading", {
      faqContent: (state) => state.pageSection?.faqContent,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    ...mapState("site", {
      displayBanner: (state) => state.displayBanner,
    }),
    areFullLoaded() {
      return this.faqContent && this.footerSection;
    },
  },
  methods: {
    /**
     * Handle positioning on page reload and sscroll bar is not set on top
     */
    handleFloatingMenuIntersection(isIntersecting) {
      if (isIntersecting && this.isRouteNavigation) {
        this.isRouteNavigation = false;
        return false;
      }

      // Set the floating menu in the right position
      this.setFloatingMenuPosition();
    },
    /**
     * Translate the faqMenu to position it in the right way
     */
    setFloatingMenuPosition() {
      // Discard this event on component mounting
      if (this.isRouteNavigation) {
        return false;
      }

      const bannerSiteHeight =
        document.getElementById("siteSwitcher")?.getBoundingClientRect()
          ?.height || 0;
      const bodyDimensions = this.$refs.faqContent.getBoundingClientRect();
      const floatingMenuDimensions =
        this.$refs.faqMenu.$el.getBoundingClientRect();
      const floatingMenuMaxHeight =
        bodyDimensions.height -
        (128 + bannerSiteHeight) -
        floatingMenuDimensions.height;

      // Avoid overflow the floating menu
      const transformation =
        Math.abs(bodyDimensions.y) >= floatingMenuMaxHeight
          ? Math.abs(bodyDimensions.y) -
            floatingMenuMaxHeight +
            Math.min(window.scrollY, this.offset)
          : Math.min(window.scrollY, this.offset);

      this.$refs.faqMenu.$el.style.transform = `translateY(-${transformation}px)`;
    },
    /**
     * Set the FAQ question select box on top or bottom depending on the scroll position.
     */
    setSelectableMenuPosition(isVisible) {
      if (!this.shouldDisplayFaqMenuMobile && isVisible) {
        this.shouldDisplayFaqMenuMobile = true;
      }

      this.shouldDisplayFaqMenuMobileBottom = !isVisible;
    },
    handleIntersection(isIntersecting, el) {
      const index = el.getAttribute("index");

      // For every component rendered, add into activeSections objects in order to
      // handle the `active` tab
      this.activeSections[index] = {
        id: el.id,
        active: isIntersecting,
      };

      // Trigger this logic only on desktop views
      if (
        this.$refs.faqMenu &&
        Object.keys(this.activeSections).length === this.entries.length
      ) {
        const activeTab =
          Object.values(this.activeSections).find((item) => item.active) ||
          this.activeSections[0];

        // Remove all active classes
        this.$refs.faqMenu.$el.querySelectorAll("li").forEach((element) => {
          element.classList.remove("active");
        });

        // Add active class only for the first active element
        this.$refs.faqMenu.$el
          .querySelector(`#${activeTab.id.replace(/\s/g, "")}`)
          .classList.add("active");
      }
    },
    handleMenuClick(item) {
      const section = this.activeSections[item];
      this.$el
        .querySelector(`div#${section.id.replace(/\s/g, "")}`)
        .scrollIntoView({
          behavior: "smooth",
        });
    },
    faqContentJsonId() {
      let mainEntities = [];
      this.entries?.forEach((question) => {
        const mainEntity = question.data.map((question) => ({
          "@type": "Question",
          name: question.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: question.body,
          },
        }));
        mainEntities.push(...mainEntity);
      });

      return {
        type: "application/ld+json",
        json: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: mainEntities,
        },
      };
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setFloatingMenuPosition);

    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "faqSection");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "footerSection");
  },
  /**
   * Handle route enter to check if we are on page reload or just route navigation
   * to set the floating menu accordingly
   */
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (process.client) {
        if (to.path !== from.path && from.path !== "/") {
          vm.isRouteNavigation = true;
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  @apply scroll-mt-32;
}
.spacing {
  div:not(:first-child) {
    @apply pt-5;
  }

  h3 {
    @apply pb-10 mobileL:pb-3 mobile:pb-3;
  }
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
faq_title: "Preguntas y Respuestas"
title: "Preguntas Frecuentes Sobre Alquiler de Trasteros | Box2box"
meta_description: "Respondemos todas las dudas y preguntas de nuestros clientes sobre nuestro servicio de alquiler de trastero puerta a puerta."
</i18n>
<i18n lang="yaml" locale="fr">
faq_title: "Questions et réponses"
title: "Questions fréquemment posées sur location stockage | Box2box"
meta_description: "Nous répondons à toutes les questions de nos clients sur notre service de location de locaux de stockage en porte-à-porte."
</i18n>
<i18n lang="yaml" locale="it">
faq_title: "Domande e risposte"
title: "Domande frequenti sul affitto di depositi | Box2box"
meta_description: "Rispondiamo a tutte le domande dei nostri clienti sul nostro servizio di noleggio di depositi porta a porta. Quanto costa affittare un deposito? È sicuro? Di quanto spazio ho bisogno? Chi ha accesso al deposito?"
</i18n>
<i18n lang="yaml" locale="pt">
faq_title: "Perguntas e respostas"
title: "Perguntas Frequentes Aluguer do Armazém Box2box | Box2box"
meta_description: "Respondemos a todas as perguntas dos nossos clientes sobre o nosso serviço de aluguer de armazém porta-a-porta."
</i18n>
<i18n lang="yaml" locale="mx">
faq_title: "Preguntas y Respuestas"
title: "Preguntas Frecuentes Sobre Renta de Mini Bodegas | Box2box"
meta_description: "Respondemos todas las dudas y preguntas de nuestros clientes sobre nuestro servicio de renta de mini bodegas puerta a puerta."
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/faqPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/faqPage.yaml"></i18n>
