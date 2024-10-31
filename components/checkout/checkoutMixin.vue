<script>
import localesMetadata from "@/mixins/localesMetadata";
import AdyenCheckout from "@adyen/adyen-web";
import "@adyen/adyen-web/dist/adyen.css";

export default {
  name: "checkoutMixin",
  mixins: [localesMetadata],
  data() {
    return {
      configuration: {
        environment:
          this.$config.environment !== "production" ? "test" : "live",
        analytics: {
          enabled: false, // Set to false to not send analytics data to Adyen.
        },
      },
    };
  },
  mounted() {
    // Only when component is mounted, we can have the access to mixin data
    this.configuration["locale"] = this.localeMetadata?.simplifiedLang;
    this.configuration["clientKey"] =
      this.$config[`adyen_key_${this.localeMetadata?.country}`];
  },
  methods: {
    async mountCheckout(mode) {
      const adyenCheckout = await AdyenCheckout(this.configuration);
      const adyenPaymentMethod = adyenCheckout.create(mode);

      // Mount the payment method
      adyenPaymentMethod.mount("#payment-container");

      return [adyenCheckout, adyenPaymentMethod];
    },

    /**
     * Method to initialize chargebee web client instance
     */
    initChargebee() {
      let chargebeeInstance = null;
      if (window.Chargebee && window.Chargebee.inited) {
        chargebeeInstance = window.Chargebee.getInstance();
      } else {
        chargebeeInstance = window.Chargebee.init({
          site: this.$config[`chargebee_site_${this.localeMetadata?.country}`],
          publishableKey:
            this.$config[`chargebee_api_key_${this.localeMetadata?.country}`],
        });
      }

      return chargebeeInstance;
    },

    /**
     * Method to handle the payment on the selected payment method
     */
    pay() {
      throw new Error("Not implemented yet!");
    },
  },
};
</script>
