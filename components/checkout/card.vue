<template>
  <div class="flex flex-col">
    <client-only>
      <div
        class="flex flex-col justify-center items-center border border-[#EDEDED] rounded-[12px] px-6 py-4 mb-4"
        v-if="cardFullyLoaded"
      >
        <p class="text-[14px]">{{ $t("warn_title") }}</p>
      </div>

      <div id="payment-container"></div>
      <slot
        :pay="pay"
        :isMounted="isMounted"
        :isBeingMounted="isBeingMounted"
        :componentLoaded="cardFullyLoaded"
      ></slot>
    </client-only>
  </div>
</template>
<script>
import checkoutMixin from "./checkoutMixin.vue";

export default {
  name: "cardComponent",
  mixins: [checkoutMixin],
  async mounted() {
    if (process.client) {
      this.isBeingMounted = true;

      try {
        [this.adyenCheckout, this.adyenCard] = await this.mountCheckout("card");
        this.chargebeeInstance = this.initChargebee();
      } finally {
        setTimeout(() => {
          this.isBeingMounted = false;
        }, 450);
      }
    }
  },
  data() {
    return {
      adyenCheckout: null,
      adyenCard: null,
      chargebeeInstance: null,
      isBeingMounted: false,
      cardFullyLoaded: false,
      configuration: {
        paymentMethodsConfiguration: {
          card: {
            brands: ["mc", "visa", "amex", "maestro"],
            name: "Credit or debit card",
            styles: {
              base: {
                color: "#525f7f",
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "1rem",
              },
            },
            onConfigSuccess: () => {
              this.cardFullyLoaded = true;
            },
          },
        },
      },
    };
  },
  computed: {
    isMounted() {
      return this.adyenCheckout && this.adyenCard && this.chargebeeInstance;
    },
  },
  methods: {
    handle3DSPayment(paymentIntent) {
      return new Promise((resolve, reject) => {
        this.chargebeeInstance.load3DSHandler().then((threeDSHandler) => {
          threeDSHandler.setPaymentIntent(paymentIntent, {
            adyen: this.adyenCheckout,
          });

          const paymentInfo = {
            element: this.adyenCard,
          };

          // Handle the payment
          threeDSHandler.handleCardPayment(paymentInfo, {
            success: async (intent) => {
              try {
                const response = await this.$gatewayApi.$post(
                  `chargebee-pay?key=${this.$config.gatewayKey}`,
                  {
                    payment_intent_id: intent.id,
                    key: this.$route.params.id,
                  }
                );
                resolve(response);
              } catch (error) {
                reject(error);
                throw new Error(`Error performing the payment: ${error}`);
              }
            },
            error: async (intent, error) => {
              try {
                await this.$gatewayApi.$patch(
                  `chargebee-release-transaction?key=${this.$config.gatewayKey}`,
                  {
                    key: this.$route.params.id,
                  }
                );
              } finally {
                reject(error);
              }
            },
          });
        });
      });
    },
    /**
     * Check if adyen card state is valid to continue with the payment flow
     */
    isValidCardState() {
      if (this.adyenCard && !this.adyenCard.state.isValid) {
        this.adyenCard.showValidation();
        return false;
      }

      return true;
    },
    async pay(billingData) {
      try {
        // Check if adyen card state is valid
        if (!this.isValidCardState()) {
          return null;
        }

        // Create the chargebee customer
        await this.$gatewayApi.$post(
          `chargebee-customer?key=${this.$config.gatewayKey}`,
          billingData
        );

        // Create the payment intent
        const paymentIntent = await this.$gatewayApi.$post(
          `chargebee-payment-intent?key=${this.$config.gatewayKey}`,
          billingData
        );

        // Handle the payment
        return await this.handle3DSPayment(paymentIntent.body.payment_intent);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
warn_title: "Tarjetas prepago o monedero no admitidas"
</i18n>
<i18n lang="yaml" locale="fr">
warn_title: "Cartes prépayées non prises en charge"
</i18n>
<i18n lang="yaml" locale="it">
warn_title: "Carte prepagate non supportate"
</i18n>
<i18n lang="yaml" locale="pt">
warn_title: "Cartões pré-pagos não suportados"
</i18n>
<i18n lang="yaml" locale="mx">
warn_title: "Tarjetas prepago o monedero no admitidas"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/checkout/card.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/checkout/card.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/checkout/card.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/checkout/card.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/checkout/card.yaml"
></i18n>
