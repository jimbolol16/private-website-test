<template>
  <div>
    <TransitionGroup
      enter-active-class="transition-all duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <!-- Fixed header section -->
      <section
        class="h-[64px] z-40 grid-layout fixed w-full bg-white transition-all duration-300 shadow-header"
        v-show="fixedHeader || burgerMenuVisible"
        key="fixedHeader"
      >
        <div
          class="flex my-auto mobile:col-end-5 mobile:justify-end row-start-1 desktopL:col-start-1 desktop:col-start-1 tablet:col-end-13 tablet:justify-end mobileL:col-end-9 mobileL:justify-end z-40 desktopL:w-fit desktop:w-fit"
          v-if="displayBurgerMenu"
        >
          <div class="flex" @click="openBurgerMenu">
            <nuxt-img
              :provider="$config.img_provider"
              src="/calculator/close-button.svg"
              alt="closebutton"
              class="tablet:self-end mobile:self-end cursor-pointer mobile:w-[24px] mobile:h-[24px]"
              :class="
                burgerMenuVisible
                  ? 'desktopL:hidden desktop:hidden tablet:hidden'
                  : 'hidden'
              "
            />
            <menu-icon
              class="tablet:self-end mobile:self-end cursor-pointer stroke-dark"
              :class="burgerMenuVisible ? 'hidden' : ''"
            ></menu-icon>
          </div>
        </div>
        <nuxt-link
          :to="localePath(redirectPath)"
          class="my-auto row-start-1 col-start-1 desktopL:ml-[60px] desktop:ml-[60px] focus:outline-none"
          aria-label="home"
        >
          <logo-icon
            class="fill-electric mobile:h-4 mobile:w-[88px]"
          ></logo-icon>
        </nuxt-link>
        <div
          class="hidden tablet:flex desktopL:flex desktopL:col-span-6 desktopL:col-start-4 desktop:flex desktop:col-span-6 desktop:col-start-4 tablet:col-start-4 tablet:col-span-5 my-[7px] row-start-1 justify-center"
          :class="{ invisible: !displayCitySelector }"
        >
          <ui-city-selector
            size="small"
            class="w-full desktop:w-[440px] desktopL:w-[560px]"
            :buttonText="$t('hea_cta')"
            @click="handleCityClick"
            :class="burgerMenuVisible ? 'hidden' : ' '"
            :displayErrorCaption="false"
          ></ui-city-selector>
        </div>
        <div
          class="flex flex-row gap-2 desktopL:col-span-3 desktopL:col-end-13 desktop:col-span-3 desktop:col-end-13 justify-end tablet:col-end-13 tablet:col-span-3 mobile:col-end-5 mobile:col-span-3 mobileL:col-end-9 mobileL:col-span-3 row-start-1 my-auto items-center text-[14px] leading-[25px]"
          :class="{
            'tablet:mr-[64px]': !burgerMenuVisible && displayBurgerMenu,
            'tablet:mr-[64px] mobileL:mr-[64px] mobile:mr-[64px]':
              displayBurgerMenu,
          }"
        >
          <phone-icon class="stroke-dark"></phone-icon>
          <div class="flex flex-row">
            <p class="hidden desktopL:flex desktop:flex font-normal">
              {{ $t("hea_phone_text") }} &nbsp;
            </p>
            <a
              :href="`tel:${$t('hea_phone_number_href')}`"
              class="cursor-pointer font-bold"
              >{{ $t("hea_phone_number") }}</a
            >
          </div>
        </div>
      </section>

      <!-- First header section, it disappears when starting scrolling the page -->
      <section
        class="h-[64px] z-40 grid-layout w-full top-0 bg-none transition-all duration-300"
        key="scrollableHeader"
        v-show="!fixedHeader && isFullyLoaded && !burgerMenuVisible"
        id="scrollableHeader"
      >
        <div
          class="flex my-auto mobile:col-end-5 mobile:justify-end row-start-1 desktop:hidden desktopL:hidden tablet:col-end-13 tablet:justify-end mobileL:col-end-9 mobileL:justify-end z-40"
          v-if="displayBurgerMenu"
        >
          <div class="flex" @click="openBurgerMenu">
            <menu-icon
              class="tablet:self-end mobile:self-end mobileL:self-end cursor-pointer"
              :class="headerColor || 'stroke-dark'"
            ></menu-icon>
          </div>
        </div>
        <nuxt-link
          :to="localePath(redirectPath)"
          class="my-auto row-start-1 col-start-1 focus:outline-none z-50"
          aria-label="home"
        >
          <logo-icon
            :class="headerColor || 'fill-electric'"
            class="mobile:h-4 mobile:w-[88px] no-stroke"
          ></logo-icon>
        </nuxt-link>
        <div
          class="hidden desktopL:flex desktopL:col-span-5 desktopL:col-start-4 desktop:flex desktop:col-span-6 desktop:col-start-4 my-[7px] row-start-1 justify-center"
          :class="{
            'desktop:flex desktop:col-span-7 desktop:col-start-3':
              localeMetadata.country === 'fr',
          }"
        >
          <nav class="flex flex-row gap-8 my-auto" :class="headerColor">
            <ui-warehouse-menu
              whatIs="warehouses"
              :parentClass="headerColor"
              v-if="displayWarehouses"
            ></ui-warehouse-menu>
            <ui-warehouse-menu
              whatIs="storages"
              :parentClass="headerColor"
              v-if="localeMetadata.country !== 'mx' && displayStorages"
            ></ui-warehouse-menu>
            <ui-header-link
              :text="$t('hea_drop_2')"
              :to="$t('hea_drop_2_link')"
              :externalLink="true"
              v-if="displayPrivateArea"
            >
            </ui-header-link>
            <ui-locale-menu
              :parentClass="headerColor"
              v-if="displayLocaleMenu"
            ></ui-locale-menu>
          </nav>
        </div>
        <div
          class="flex flex-row gap-2 desktopL:col-span-3 desktopL:col-end-13 desktop:col-span-3 desktop:col-end-13 justify-end tablet:col-end-13 tablet:col-span-3 mobile:col-end-5 mobile:col-span-3 mobileL:col-end-9 mobileL:col-span-3 row-start-1 my-auto items-center text-[14px] leading-[25px] z-50"
          :class="{
            'tablet:mr-[64px] mobileL:mr-[64px] mobile:mr-[64px]':
              displayBurgerMenu,
          }"
        >
          <phone-icon
            class="no-fill"
            :class="headerColor || 'stroke-dark'"
          ></phone-icon>
          <div class="flex flex-row space-x-1">
            <p
              class="hidden desktopL:flex desktop:flex font-normal"
              :class="headerColor"
            >
              {{ $t("hea_phone_text") }}
            </p>
            <a
              :href="`tel:${$t('hea_phone_number_href')}`"
              class="cursor-pointer font-bold"
              :class="headerColor"
              >{{ $t("hea_phone_number") }}</a
            >
          </div>
        </div>
      </section>
    </TransitionGroup>
    <ui-burguer-menu
      @close="openBurgerMenu"
      v-if="burgerMenuVisible && displayBurgerMenu"
    ></ui-burguer-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "uiHeader",
  components: {
    "logo-icon": async () => await import("@/components/icons/LogoIcon.vue"),
    "ui-city-selector": async () =>
      await import("@/components/uiCitySelector/uiCitySelector.vue"),
    "menu-icon": async () => await import("@/components/icons/MenuIcon.vue"),
    "phone-icon": async () => await import("@/components/icons/PhoneIcon.vue"),
    "ui-header-link": async () =>
      await import("@/components/header/uiHeaderLink.vue"),
    "ui-locale-menu": async () =>
      await import("@/components/header/uiLocaleMenu.vue"),
    "ui-warehouse-menu": async () =>
      await import("@/components/header/uiWarehouseMenu.vue"),
    "ui-burguer-menu": async () =>
      await import("@/components/header/uiBurguerMenu.vue"),
  },
  props: {
    displayCitySelector: {
      type: Boolean,
      default: true,
    },
    headerColor: {
      type: String,
      default: null,
    },
    displayBurgerMenu: {
      type: Boolean,
      default: true,
    },
    redirectPath: {
      type: String,
      default: "/",
    },
    displayWarehouses: {
      type: Boolean,
      default: true,
    },
    displayStorages: {
      type: Boolean,
      default: true,
    },
    displayPrivateArea: {
      type: Boolean,
      default: true,
    },
    displayLocaleMenu: {
      type: Boolean,
      default: true,
    },
  },
  mixins: [localesMetadata],
  mounted() {
    this.handleScroll();
    this.isFullyLoaded = true;
  },
  data() {
    return {
      verticalScrollPosition: 0,
      isFullyLoaded: false,
      burgerMenuVisible: false,
    };
  },
  computed: {
    ...mapState("pricesWizard", {
      city: (state) => state.city,
    }),
    fixedHeader() {
      return this.verticalScrollPosition > 0;
    },
  },
  methods: {
    openBurgerMenu() {
      this.burgerMenuVisible = !this.burgerMenuVisible;
    },
    handleScroll() {
      this.verticalScrollPosition = window.scrollY;
    },
    handleCityClick() {
      this.$router.push({ path: this.localePath("/prices") });
    },
  },
  watch: {
    burgerMenuVisible: function () {
      if (this.burgerMenuVisible) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Reset overflow on page change with burguer menu opened (i.e. go to landing page)
    if (this.burgerMenuVisible) {
      document.documentElement.style.overflow = "auto";
    }
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
:deep(.no-fill) {
  fill: none;
}
:deep(.no-stroke) {
  stroke: none;
}
</style>
<i18n lang="yaml" locale="es">
hea_drop_2: "Área personal"
hea_drop_2_link: "https://app.box2box.es/"
hea_phone_text: "Contáctanos"
hea_phone_number: "919 033 033"
hea_phone_number_href: "+34919033033"
hea_cta: "Precios"
</i18n>
<i18n lang="yaml" locale="fr">
hea_drop_2: "Espace personnel"
hea_drop_2_link: "https://app.box2box.io/"
hea_phone_text: "Contactez-nous au"
hea_phone_number: "06 26 56 54 74"
hea_phone_number_href: "+33626565474"
hea_cta: "Prix"
</i18n>
<i18n lang="yaml" locale="it">
hea_drop_2: "Area personale"
hea_drop_2_link: "https://app.box2box.it/"
hea_phone_text: "Contattaci"
hea_phone_number: "02 8294 2526"
hea_phone_number_href: "+390282942526"
hea_cta: "Tariffe"
</i18n>
<i18n lang="yaml" locale="pt">
hea_drop_2: "Área pessoal"
hea_drop_2_link: "https://app.box2box.net/"
hea_phone_text: "Contacte-nos"
hea_phone_number: "21 020 33 66"
hea_phone_number_href: "+351210203366"
hea_cta: "Preços"
</i18n>
<i18n lang="yaml" locale="mx">
hea_drop_2: "Área personal"
hea_drop_2_link: "https://app.box2box.es/"
hea_phone_text: "Contáctanos"
hea_phone_number: "55 8037 4700"
hea_phone_number_href: "+525580374700"
hea_cta: "Precios"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiHeader/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiHeader/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiHeader/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiHeader/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiHeader/en_mx.yaml"
></i18n>
