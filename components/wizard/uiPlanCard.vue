<template>
  <div
    class="h-full w-full flex cursor-pointer desktopL:cursor-default desktop:cursor-default"
    @click="handleCardClick"
  >
    <div class="absolute top-0 right-0" v-if="showInfoButton">
      <div class="pt-2 pr-2">
        <info-icon class="h-4 w-4 fill-salmon"></info-icon>
      </div>
    </div>

    <div
      class="w-full h-full shadow-input flex flex-col items-center justify-between py-6 px-4 rounded-[12px] select-none bg-white border border-[#EDEDED]"
      :class="{
        'border-electric border-4': isSelected,
      }"
    >
      <div class="flex flex-col items-center w-full relative">
        <h5 class="pb-2 text-center">{{ sanitizedTitle }}</h5>
        <div
          class="ribbon bg-electric text-white -right-[27px] -top-3 font-manrope font-bold text-[14px]"
          v-if="highlight"
        >
          <p class="py-0.5">{{ $t("popular") }}</p>
        </div>
        <nuxt-img
          :provider="$config.img_provider"
          :src="importImage(space)"
          class="w-48 h-48 py-4"
          :alt="space"
        />

        <div class="flex flex-col py-6">
          <h5 class="text-[16px] text-center">
            <span
              class="text-[20px]"
              :class="{ 'font-roboto': price.indexOf('--') !== -1 }"
              >{{
                price | formatCurrency(currencyCode, localeMetadata.iso)
              }}</span
            >
            <span>/{{ $t("card_payment_period") }}</span>
          </h5>

          <!-- Promotion price (if any) -->
          <h5
            class="text-[16px] text-center text-gray-400 leading-3"
            v-if="price_promo"
          >
            <span
              class="line-through"
              :class="{ 'font-roboto': price_promo.indexOf('--') !== -1 }"
              >{{
                price_promo | formatCurrency(currencyCode, localeMetadata.iso)
              }}</span
            >
            <span class="text-[14px] line-through"
              >/{{ $t("card_payment_period") }}</span
            >
          </h5>
        </div>

        <div
          class="w-full mobile:w-fit flex flex-col gap-1 font-poppins font-normal text-dark/70 text-[12px] leading-[13px] tracking-[0.02em]"
        >
          <div
            class="text-center justify-center items-center mobileBase:flex mobileBase:flex-col mobileBase:space-y-1"
            v-for="(feature, index) in featuresKeys"
            :key="`${feature}${index}`"
          >
            <div class="inline-block">
              <span>{{ $t(feature) }}</span>

              <!-- MX displays different content for pickup and delivery -->
              <span
                :class="{
                  'font-bold uppercase': getDisplayType(feature).class,
                }"
                >{{ getDisplayType(feature).value }}</span
              >
            </div>
            <span
              class="line-through text-[12px] text-gray-400"
              :class="{
                'font-bold uppercase': getDisplayType(feature).class,
              }"
              v-if="getFeaturePromo(feature)"
              >{{
                getFeaturePromo(feature)
                  | formatCurrency(currencyCode, localeMetadata.iso)
              }}</span
            >
          </div>
        </div>
      </div>
      <ui-button
        class="mt-6"
        size="small"
        :arrow="true"
        v-if="displayButton"
        @click="handleClick"
        >{{ $t("card_cta") }}</ui-button
      >
    </div>
  </div>
</template>

<script>
import { theme } from "@/tailwind.config.js";
import formats from "@/mixins/formats";
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "uiPlanCard",
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "info-icon": async () => await import("@/components/icons/InfoIcon.vue"),
  },
  props: {
    title: { type: [String, Number], default: "" },
    price: { type: [String, Number], default: "" },
    price_promo: { type: [String, Number], default: "" },
    pickup_promo: { type: [String, Number], default: "" },
    features: { type: Object, default: null },
    paymentPeriod: { type: String, default: "" },
    displayButton: { type: Boolean, default: false },
    space: {
      type: [String, Number],
      default: "",
    },
    showInfoButton: {
      type: Boolean,
      default: false,
    },
    currencyCode: {
      type: String,
      default: "EUR",
    },
    highlight: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [localesMetadata, formats],
  data() {
    return {
      featuresKeys: ["pickup", "first_delivery", "delivery"],
      displayableKeysPerCountry: {
        es: ["pickup", "first_delivery", "delivery"],
        fr: ["pickup", "first_delivery", "delivery"],
        it: ["pickup", "first_delivery", "delivery"],
        mx: ["first_delivery"],
        pt: ["pickup", "first_delivery", "delivery"],
      },
    };
  },
  computed: {
    /**
     * Sanitized content in order to set undefined content or specific space
     */
    sanitizedTitle() {
      const title = `card_${this.title}`;
      return this.$te(title) ? this.$t(title) : `${this.title} m²`;
    },
  },
  methods: {
    /**
     * Get the feature promo for a given feature.
     *
     * @param {type} feature - The feature to retrieve the promo for
     * @return {type} The feature promo value, or an empty string if not found
     */
    getFeaturePromo(feature) {
      const propName = `${feature}_promo`;
      return this[propName] || "";
    },
    /**
     * Get the display type based on the feature and locale metadata country.
     *
     * @param {string} feature - The feature to determine the display type for.
     * @return {object|null} An object containing the value and class for the display type, or null if the feature is not displayable.
     */
    getDisplayType(feature) {
      if (
        this.features[feature] &&
        (this.features[feature] > 0 || this.features[feature] === "--") &&
        this.localeMetadata.country !== "mx"
      ) {
        return {
          value: this.$options.filters.formatCurrency(this.features[feature]),
          class: false,
        };
      } else if (
        this.displayableKeysPerCountry[this.localeMetadata.country].includes(
          feature
        )
      ) {
        return {
          value: this.$t("card_free"),
          class: true,
        };
      }
      return {
        value: "",
        class: true,
      };
    },
    importImage(imageName) {
      if (imageName) {
        return `/wizard/${imageName}.svg`;
      }
      return "";
    },
    handleClick() {
      this.$emit("click");
    },
    handleCardClick() {
      // Disable click on desktop devices
      if (window.innerWidth >= theme.screens.desktop.min.split("px")[0]) {
        return;
      }
      this.handleClick();
    },
  },
};
</script>
<style lang="scss" scoped>
.ribbon {
  --f: 10px; /* control the folded part*/
  --r: 8px; /* control the ribbon shape */

  position: absolute;
  padding: 0 10px var(--f) calc(10px + var(--r));
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--f)),
    calc(100% - var(--f)) 100%,
    calc(100% - var(--f)) calc(100% - var(--f)),
    0 calc(100% - var(--f)),
    var(--r) calc(50% - var(--f) / 2)
  );
  box-shadow: 0 calc(-1 * var(--f)) 0 inset #0005;
}
</style>
<i18n lang="yaml" locale="es">
card_cta: "Seleccionar"
pickup: "Recogida"
first_delivery: "1 Entrega al mes "
delivery: "Entrega final: "
card_free: "GRATIS"
card_payment_period: "mes"
card_space_undefined: "¿No sabes cuánto espacio o necesitas más?"
card_locker: "Locker"
popular: "Popular"
</i18n>
<i18n lang="yaml" locale="fr">
card_cta: "Sélectionnez"
pickup: "Collecte"
first_delivery: "1 livraison par mois"
delivery: "Livraison finale :"
card_free: "GRATUIT"
card_payment_period: "mois"
card_space_undefined: "Vous avez besoin de plus d'espace ou vous n'êtes pas sûr ?"
card_locker: "Locker"
popular: "Populaire"
</i18n>
<i18n lang="yaml" locale="it">
card_cta: "Seleziona"
pickup: "Ritiro"
first_delivery: "1 consegna al mese"
delivery: "Consegna finale"
card_free: "GRATIS"
card_payment_period: "mese"
card_space_undefined: "Non sapete quanto spazio avete a disposizione o vi serve di più?"
card_locker: "Locker"
popular: "Popolare"
</i18n>
<i18n lang="yaml" locale="pt">
card_cta: "Seleccione"
pickup: "Recolha"
first_delivery: "1 Entrega por mês"
delivery: "Entrega final:"
card_free: "GRATIS"
card_payment_period: "mês"
card_space_undefined: "Não sabe quanto espaço ou precisa de mais?"
card_locker: "Locker"
popular: "Popular"
</i18n>
<i18n lang="yaml" locale="mx">
card_cta: "Seleccionar"
pickup: "Servicio de recolección"
first_delivery: "1 Entrega al mes"
delivery: "Servicio de entrega"
card_free: "GRATIS"
card_payment_period: "mes"
card_space_undefined: "¿No sabes cuánto espacio o necesitas más?"
card_locker: "Locker"
popular: "Popular"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiPlanCard/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiPlanCard/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiPlanCard/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiPlanCard/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiPlanCard/en_mx.yaml"
></i18n>
