<template>
  <div>
    <div class="fixed top-0 w-full z-[40]">
      <ui-site-switcher class="relative"></ui-site-switcher>
      <ui-header></ui-header>
    </div>
    <transition name="fade">
      <div id="legalLayout" v-show="areFullLoaded">
        <div class="bg-white">
          <section
            class="grid-layout section-vertical-padding mobile:mt-6 mobileL:mt-6"
          >
            <!-- Background image -->
            <div class="absolute left-0 top-0 z-0">
              <div class="relative">
                <div class="overflow-hidden top-0">
                  <nuxt-img
                    :provider="$config.img_provider"
                    src="/background/grad-faq.svg"
                    alt="legalbackground"
                    class="max-h-[770px] opacity-60"
                  />
                </div>
              </div>
            </div>

            <div
              class="col-start-1 col-span-7 desktopL:col-start-2 desktopL:col-span-6 tablet:col-span-9 row-start-1 desktopL:mt-32 desktop:mt-32 tablet:mt-32 mobile:col-span-3"
              :class="{
                'desktopL:mt-48': displayBanner,
                'desktop:mt-48': displayBanner,
                'tablet:mt-48': displayBanner,
              }"
              id="sectionHeader"
            ></div>

            <div
              class="col-start-1 col-span-2 desktop:ml-8 desktopL:col-start-2 desktopL:col-span-2 desktopL:flex desktopL:justify-center tablet:col-start-1 mobileL:col-start-1 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full row-start-2 mobileL:mt-14 mobile:mt-14"
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
                :entries="localizedMenuEntries"
                @click="handleMenuClick"
              ></faq-menu>

              <!-- Top select -->
              <faq-menu-mobile
                class="fixed desktopL:hidden desktop:hidden tablet:hidden"
                ref="faqMenuMobile"
                :entries="localizedMenuEntries"
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
                      class="fixed"
                      ref="faqMenuMobileBottom"
                      :entries="localizedMenuEntries"
                      @click="handleMenuClick"
                      dropdownPosition="top"
                    ></faq-menu-mobile>
                  </div>
                </div>
              </transition>
            </div>

            <div
              class="col-start-4 col-span-8 desktopL:col-span-7 tablet:col-start-4 tablet:col-span-full row-start-2 mobileL:row-start-3 mobileL:col-start-1 mobileL:col-span-full mobileL:mt-12 mobile:row-start-3 mobile:col-start-1 mobile:col-span-full mobile:mt-12 outer-spacing"
              ref="legalContent"
            >
              <div class="flex flex-col w-full spacing">
                <nuxt
                  @hook:mounted="
                    $store.dispatch('loading/ADD_LOADED_COMPONENT', 'nuxtPage')
                  "
                />
              </div>
            </div>
          </section>

          <footer-section
            class="mobileL:mb-[88px] mobile:mb-[88px]"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'footerSection')
            "
          ></footer-section>
        </div>
      </div>
    </transition>
    <ui-whatsapp-widget></ui-whatsapp-widget>
  </div>
</template>
<script>
import faqMenu from "@/components/views/faq/faqMenu.vue";
import faqMenuMobile from "@/components/views/faq/faqMenuMobile.vue";
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";
import { mapState } from "vuex";

export default {
  name: "legalLayout",
  layout: "landingPage",
  scrollToTop: true,
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "faq-menu": faqMenu,
    "faq-menu-mobile": faqMenuMobile,
    "footer-section": async () =>
      await import("@/components/sections/footerSection.vue"),
    "ui-whatsapp-widget": async () =>
      await import("@/components/uiWhatsappWidget.vue"),
    "ui-site-switcher": async () =>
      await import("@/components/uiSiteSwitcher.vue"),
  },
  head() {
    return this.nuxtI18nHeadFixer();
  },
  data() {
    return {
      shouldDisplayFaqMenuMobileBottom: false,
      shouldDisplayFaqMenuMobile: false,
    };
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
  mounted() {
    var self = this;

    this.activateTab(
      this.menuEntries.findIndex((item) => item === this.$route.path)
    );

    setTimeout(() => {
      // Add an event listener on the scroll to handle the floating menu position accordingly
      // This eventlistener must be added with some delay to avoid shift layouts during render time
      window.addEventListener("scroll", self.setFloatingMenuPosition);
    }, 2000);
  },
  computed: {
    ...mapState("loading", {
      nuxtPage: (state) => state.pageSection?.nuxtPage,
      footerSection: (state) => state.pageSection?.footerSection,
    }),
    ...mapState("site", {
      displayBanner: (state) => state.displayBanner,
    }),
    areFullLoaded() {
      return this.nuxtPage && this.footerSection;
    },
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
        (128 + bannerSiteHeight)
      );
    },
    localizedMenuEntries() {
      return [
        this.$t("index"),
        this.$t("privacy"),
        this.$t("cookies"),
        this.$t("conditions"),
      ];
    },
    menuEntries() {
      return [
        this.localePath("/legal"),
        this.localePath("/legal/privacy"),
        this.localePath("/legal/cookies"),
        this.localePath("/legal/conditions"),
      ];
    },
    // bannerSiteHeight() {
    //   return process.client ? : 0;
    // }
  },
  methods: {
    /**
     * Translate the faqMenu to position it in the right way
     */
    setFloatingMenuPosition() {
      const bannerSiteHeight =
        document.getElementById("siteSwitcher")?.getBoundingClientRect()
          ?.height || 0;
      const bodyDimensions = this.$refs.legalContent.getBoundingClientRect();
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
    handleMenuClick(itemIndex) {
      this.$router.push({
        path: this.menuEntries[itemIndex],
      });

      this.$nextTick(() => {
        this.activateTab(itemIndex);
      });
    },
    activateTab(itemIndex) {
      // Remove all active classes
      this.$refs.faqMenu.$el.querySelectorAll("li").forEach((element) => {
        element.classList.remove("active");
      });

      // Add active class only for the first active element
      this.$refs.faqMenu.$el
        .querySelector(
          `#${this.localizedMenuEntries[itemIndex].replace(/\s/g, "")}-content`
        )
        .classList.add("active");
    },
    /**
     * Set the select box on top or bottom depending on the scroll position.
     */
    setSelectableMenuPosition(isVisible) {
      if (!this.shouldDisplayFaqMenuMobile && isVisible) {
        this.shouldDisplayFaqMenuMobile = true;
      }

      this.shouldDisplayFaqMenuMobileBottom = !isVisible;
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setFloatingMenuPosition);

    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "nuxtPage");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "footerSection");
  },
  watch: {
    /**
     * Handle active tab on route path change for localized page
     */
    "$route.path": function (newPath) {
      this.activateTab(this.menuEntries.findIndex((item) => item === newPath));
    },
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
.outer-spacing {
  div:not(:first-child) {
    h3 {
      @apply mt-12;
    }
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
privacy: "Política de privacidad"
index: "Aviso legal"
cookies: "Política de cookies"
conditions: "Condiciones generales"
</i18n>
<i18n lang="yaml" locale="fr">
privacy: "Politique de confidentialité"
index: "Avis juridique"
cookies: "Politique en matiére de cookies"
conditions: "Conditions générales"
</i18n>
<i18n lang="yaml" locale="it">
privacy: "Informativa sulla privacy"
index: "Avviso legale"
cookies: "Informativa sui cookie"
conditions: "Condizioni generali"
</i18n>
<i18n lang="yaml" locale="pt">
privacy: "Política de privacidade"
index: "Aviso legal"
cookies: "Política de cookies"
conditions: "Termos e condiçoes gerais"
</i18n>
<i18n lang="yaml" locale="mx">
privacy: "Política de privacidad"
index: "Aviso legal"
cookies: "Política de cookies"
conditions: "Condiciones generales"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/layouts/legalLayout.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/layouts/legalLayout.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/layouts/legalLayout.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/layouts/legalLayout.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/layouts/legalLayout.yaml"></i18n>
