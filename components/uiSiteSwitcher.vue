<template>
  <div>
    <div
      class="z-[100] flex w-full flex-row-reverse mobileL:flex-col mobile:flex-col items-center justify-center bg-dark box-border leading-[26px] mobile:leading-[18px] text-[14px] font-manrope p-2 mobileL:h-[128px] mobile:h-[128px] h-[64px] mobileL:space-y-2 mobile:space-y-2"
      id="siteSwitcher"
      v-show="displayBanner && areFullLoaded"
    >
      <div
        class="mobileL:flex mobileL:w-full mobileL:justify-end mobile:flex mobile:w-full mobile:justify-end desktopL:ml-3 desktop:ml-3 tablet:ml-3"
      >
        <div @click="$store.dispatch('site/UNSET_DISPLAY_BANNER')">
          <x-icon class="stroke-white h-4 w-4 cursor-pointer"></x-icon>
        </div>
      </div>
      <div
        class="flex flex-row mobileL:flex-col mobile:flex-col items-center justify-center desktopL:space-x-5 desktop:space-x-5 tablet:space-x-5 mobileL:space-x-5"
      >
        <p class="mobile:text-center">
          {{ $t("msg", setTargetDomain || $i18n.locale) }}
        </p>
        <ui-popup-base-menu
          dropdownPosition="bottom"
          openedAt="right"
          ref="popupMenu"
          :popupCenter="true"
          class="z-[100]"
        >
          <template v-slot:selected="{ openedMenu }">
            <div
              class="flex flex-row space-x-2 py-1 desktopL:px-2 desktop:px-2 tablet:px-2 items-center"
              :class="[openedMenu ? 'rounded bg-[rgba(255,255,255,0.1)]' : '']"
            >
              <nuxt-img class="h-4 w-4" src="/footer/world.svg" alt="world" />
              <div class="flex flex-row gap-x-2 items-center">
                <p class="font-roboto font-medium text-dark/60 text-[14px]">
                  {{
                    $t(localeMetadata.country, setTargetDomain || $i18n.locale)
                  }}
                </p>
                <chevron-icon
                  class="fill-white w-4 h-4"
                  :class="[openedMenu ? 'rotate-180' : '']"
                ></chevron-icon>
              </div>
            </div>
          </template>

          <template slot="list">
            <div
              v-for="(site, index) in availableSites"
              :key="index"
              class="flex flex-row gap-y-2 hover:bg-soft/50 min-w-[190px]"
              @click.prevent.stop="handleClick(site)"
            >
              <!-- Workaround to handle click event on route change -->
              <a class="contents">
                <ui-language :localeConfiguration="site">
                  {{ $t(site.code, setTargetDomain || $i18n.locale) }}
                </ui-language>
              </a>
            </div>
          </template>
        </ui-popup-base-menu>
      </div>
    </div>
  </div>
</template>
<script>
import localesMetadata from "@/mixins/localesMetadata";
import hubspotMixin from "@/mixins/hubspot";
import { mapState } from "vuex";

export default {
  name: "uiSiteSwitcher",
  components: {
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
    "ui-popup-base-menu": async () =>
      await import("@/components/uiPopupMenu/uiPopupBaseMenu.vue"),
    "ui-language": async () =>
      await import("@/components/header/uiLanguage.vue"),
    "x-icon": async () => await import("@/components/icons/XIcon.vue"),
  },
  mixins: [localesMetadata, hubspotMixin],
  computed: {
    ...mapState("site", {
      displayBanner: (state) => state.displayBanner,
      setTargetDomain: (state) => state.targetDomain,
    }),
    ...mapState("loading", {
      pageSection: (state) => state.pageSection,
    }),
    availableSites() {
      if (process.client) {
        return this.$i18n.locales.filter(
          (i) => this.$i18n.locale.indexOf(i.code) === -1 && !i.complementary
        );
      }

      return [];
    },
    areFullLoaded() {
      const loadedSectionValues = Object.values(this.pageSection || {});
      return (
        loadedSectionValues.length > 0 &&
        loadedSectionValues.every((value) => value === true)
      );
    },
  },
  methods: {
    /**
     * Handle locale change through router push in order to close the popup before route transition
     */
    handleClick(site) {
      this.$refs.popupMenu.handleChange();

      // Clear cities store
      this.$store.dispatch("homeMetadata/RESET_ALL");
      this.$store.dispatch("site/UNSET_DISPLAY_BANNER");
      this.$router.push({ path: this.localePath("/", site.code) });

      // Workaround -> refresh hubspot chatflow on site change
      setTimeout(() => {
        this.$nextTick(() => {
          this.resetHubspotWidget();
        });
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(p) {
  @apply text-white;
}
</style>
<i18n lang="yaml" locale="es">
msg: "Indica en qué país o región estás para ver contenidos específicos"
es: "España"
pt: "Portugal"
fr: "Francia"
it: "Italia"
mx: "México"
</i18n>
<i18n lang="yaml" locale="fr">
msg: "Indiquez le pays ou la région où vous vous trouvez pour afficher un contenu spécifique."
es: "Espagne"
pt: "Portugal"
fr: "France"
it: "Italie"
mx: "Mexique"
</i18n>
<i18n lang="yaml" locale="it">
msg: "Indicare il paese o la regione in cui ci si trova per visualizzare contenuti specifici."
es: "Spagna"
pt: "Portogallo"
fr: "Francia"
it: "Italia"
mx: "Messico"
</i18n>
<i18n lang="yaml" locale="pt">
msg: "Indicar em que país ou região se encontra para visualizar conteúdos específicos."
es: "Espanha"
pt: "Portugal"
fr: "França"
it: "Itália"
mx: "México"
</i18n>
<i18n lang="yaml" locale="mx">
msg: "Indica en qué país o región estás para ver contenidos específicos"
es: "España"
pt: "Portugal"
fr: "Francia"
it: "Italia"
mx: "México"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiSiteSwitcher.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiSiteSwitcher.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiSiteSwitcher.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiSiteSwitcher.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiSiteSwitcher.yaml"
></i18n>
