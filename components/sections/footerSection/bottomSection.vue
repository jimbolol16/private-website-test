<template>
  <div
    class="flex w-full flex-col mt-10 mobileL:mt-8 mobile:mt-8 desktopL:mt-8"
  >
    <div class="bg-[#E7EDFA4D] w-full h-[1px]"></div>
    <div
      class="grid-layout mb-7 mt-8 mobileL:mt-10 mobileL:mb-10 desktopL:mb-8 mobile:mt-8"
    >
      <div class="col-start-1 col-span-full">
        <div
          class="flex flex-row w-full justify-between mobileL:flex-col mobileL:justify-center mobile:flex-col mobile:justify-center align-middle items-center"
        >
          <p
            class="p2 footer mobileL:flex mobileL:justify-center mobileL:order-3 mobileL:mt-16 mobile:flex mobile:justify-center mobile:order-3 mobile:mt-16"
          >
            {{ currentYear }} {{ $t("foo_bottom_copyright") }}
          </p>

          <div class="inline-flex space-x-6 justify-center cursor-pointer">
            <a :href="$t('foo_bottom_instagram')" target="_blank">
              <nuxt-img
                :provider="$config.img_provider"
                class="h-9 w-9 hover:opacity-75"
                src="/footer/instagram.svg"
                alt="instagram"
              />
            </a>
            <a :href="$t('foo_bottom_facebook')" target="_blank">
              <nuxt-img
                :provider="$config.img_provider"
                class="h-9 w-9 hover:opacity-75"
                src="/footer/facebook.svg"
                alt="facebook"
              />
            </a>
            <a :href="$t('foo_bottom_twitter')" target="_blank">
              <nuxt-img
                :provider="$config.img_provider"
                class="h-9 w-9 hover:opacity-75"
                src="/footer/twitter.svg"
                alt="twitter"
              />
            </a>
            <a :href="$t('foo_bottom_linkedin')" target="_blank">
              <nuxt-img
                :provider="$config.img_provider"
                class="h-9 w-9 hover:opacity-75"
                src="/footer/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </div>
          <div
            class="text-white flex flex-row items-center mobileL:justify-center mobileL:pt-9 mobile:justify-center mobile:pt-9"
          >
            <ui-popup-base-menu
              dropdownPosition="top"
              openedAt="right"
              ref="popupMenu"
              :popupCenter="true"
            >
              <template v-slot:selected="{ openedMenu }">
                <div
                  class="flex flex-row space-x-2 py-1 px-2 items-center"
                  :class="[
                    openedMenu ? 'rounded bg-[rgba(255,255,255,0.1)]' : '',
                  ]"
                >
                  <nuxt-img
                    :provider="$config.img_provider"
                    class="h-6 w-6"
                    src="/footer/world.svg"
                    alt="world"
                  />
                  <div class="flex flex-row gap-x-2 items-center">
                    <p class="p2">{{ $t(localeMetadata.country) }}</p>
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
                      {{ $t(site.code) }}
                    </ui-language>
                  </a>
                </div>
              </template>
            </ui-popup-base-menu>
          </div>
        </div>
      </div>

      <div
        class="row-start-2 col-start-1 col-span-full flex justify-center mt-12 space-y-1"
      >
        <div
          class="flex flex-row space-x-3 items-center mobileL:items-start mobile:items-start"
        >
          <nuxt-img
            :provider="$config.img_provider"
            class="w-44"
            src="/footer/icex_eu.png"
            alt="icex"
          />
          <p class="p2 footer text-justify font-medium max-w-3xl">
            {{ $t("foo_bottom_fedex") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import localesMetadata from "@/mixins/localesMetadata";
import hubspotMixin from "@/mixins/hubspot";

export default {
  name: "bottomSection",
  components: {
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
    "ui-popup-base-menu": async () =>
      await import("@/components/uiPopupMenu/uiPopupBaseMenu.vue"),
    "ui-language": async () =>
      await import("@/components/header/uiLanguage.vue"),
  },
  mixins: [localesMetadata, hubspotMixin],
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    availableSites() {
      if (process.client) {
        return this.$i18n.locales.filter(
          (i) => this.$i18n.locale.indexOf(i.code) === -1 && !i.complementary
        );
      }

      return [];
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
      this.$store.dispatch("loading/RESET_ALL");
      this.$store.dispatch("landingCities/RESET_ALL");

      // Workaround to avoid computed evaluation displaying wrong data before route change
      setTimeout(() => {
        this.$router.push({ path: this.localePath("/", site.code) });
      }, 100);

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

.footer {
  @apply leading-[20px] text-[12px] font-manrope;
}
div * {
  @apply z-0;
}
</style>
<i18n lang="yaml" locale="es">
foo_bottom_copyright: "Todos los derechos reservados"
foo_bottom_instagram: "https://www.instagram.com/box2boxstorage/"
foo_bottom_facebook: "https://www.facebook.com/box2box.es/"
foo_bottom_twitter: "https://twitter.com/box2boxSpain"
foo_bottom_linkedin: "https://www.linkedin.com/company/box2boxspain/"
es: "España"
pt: "Portugal"
fr: "Francia"
it: "Italia"
mx: "México"
foo_bottom_fedex: "Box2box SL en el marco del Programa ICEX Next, ha contado con el apoyo de ICEX y con la cofinanciación del fondo europeo FEDER. La finalidad de este apoyo es contribuir al desarrollo internacional de la empresa y de su entorno."
</i18n>
<i18n lang="yaml" locale="fr">
foo_bottom_copyright: "Tous droits réservés"
foo_bottom_instagram: "https://www.instagram.com/box2box.fr/"
foo_bottom_facebook: "https://www.facebook.com/box2box.es/"
foo_bottom_twitter: "https://twitter.com/box2boxSpain"
foo_bottom_linkedin: "https://www.linkedin.com/company/box2boxspain/"
es: "Espagne"
pt: "Portugal"
fr: "France"
it: "Italie"
mx: "Mexique"
foo_bottom_fedex: "Box2box SL, dans le cadre du programme ICEX Next, a reçu le soutien de l'ICEX et un cofinancement du fonds européen FEDER. L'objectif de ce soutien est de contribuer au développement international de l'entreprise et de son environnement."
</i18n>
<i18n lang="yaml" locale="it">
foo_bottom_copyright: "All right reserved"
foo_bottom_instagram: "https://www.instagram.com/box2boxstorage/"
foo_bottom_facebook: "https://www.facebook.com/box2box.es/"
foo_bottom_twitter: "https://twitter.com/box2boxSpain"
foo_bottom_linkedin: "https://www.linkedin.com/company/box2boxspain/"
es: "Spagna"
pt: "Portogallo"
fr: "Francia"
it: "Italia"
mx: "Messico"
foo_bottom_fedex: "Box2box SL, nell'ambito del Programma ICEX Next, ha ricevuto il sostegno di ICEX e il cofinanziamento del fondo europeo FESR. Lo scopo di questo sostegno è quello di contribuire allo sviluppo internazionale dell'azienda e del suo ambiente."
</i18n>
<i18n lang="yaml" locale="pt">
foo_bottom_copyright: "Todos os direitos reservados"
foo_bottom_instagram: "https://www.instagram.com/box2box.pt/"
foo_bottom_facebook: "https://www.facebook.com/Box2box-Portugal-100753294904223"
foo_bottom_twitter: "https://twitter.com/box2boxSpain"
foo_bottom_linkedin: "https://www.linkedin.com/company/box2boxspain/"
es: "Espanha"
pt: "Portugal"
fr: "França"
it: "Itália"
mx: "México"
foo_bottom_fedex: "Box2box SL, no âmbito do programa ICEX Next, recebeu apoio do ICEX e co-financiamento do fundo europeu FEDER. O objectivo deste apoio é contribuir para o desenvolvimento internacional da empresa e do seu ambiente."
</i18n>
<i18n lang="yaml" locale="mx">
foo_bottom_copyright: "Todos los derechos reservados"
foo_bottom_instagram: "https://www.instagram.com/box2boxstorage/"
foo_bottom_facebook: "https://www.facebook.com/box2box.es/"
foo_bottom_twitter: "https://twitter.com/box2boxSpain"
foo_bottom_linkedin: "https://www.linkedin.com/company/box2boxspain/"
es: "España"
pt: "Portugal"
fr: "Francia"
it: "Italia"
mx: "México"
foo_bottom_fedex: "Box2box SL en el marco del Programa ICEX Next, ha contado con el apoyo de ICEX y con la cofinanciación del fondo europeo FEDER. La finalidad de este apoyo es contribuir al desarrollo internacional de la empresa y de su entorno."
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/bottomSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/bottomSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/bottomSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/bottomSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/bottomSection.yaml"
></i18n>
