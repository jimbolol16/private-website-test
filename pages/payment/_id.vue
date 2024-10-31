<template>
  <loading-page v-if="!loadedPage"></loading-page>
  <section class="grid-layout my-16" v-else>
    <section
      class="row-start-1 col-start-4 col-span-6 mobileL:col-start-2 mobile:col-start-1 mobile:col-span-full flex flex-col z-[1] h-[calc(100vh-192px)] justify-center"
      v-if="isPaid || isExpired || isInvalidLink"
    >
      <transition name="fade" appear>
        <div
          class="flex flex-col space-y-2 items-center text-center"
          v-if="isPaid"
        >
          <h3>{{ $t("final_step_success_title") }}</h3>
          <p class="p2">
            {{ $t("final_step_success_body") }}
          </p>
        </div>

        <div
          class="flex flex-col space-y-2 items-center text-center"
          v-else-if="isExpired"
        >
          <h3>{{ $t("final_step_expired_title") }}</h3>
          <p class="p2">
            {{ $t("final_step_expired_body") }}
          </p>
        </div>

        <div class="flex flex-col space-y-2 items-center text-center" v-else>
          <h3>{{ $t("final_step_invalid_title") }}</h3>
          <p class="p2 text-center" v-html="$t('final_step_invalid_body')"></p>
        </div>
      </transition>
    </section>

    <div class="contents space-y-6" v-else>
      <h5
        class="row-start-1 col-start-1 col-span-full flex w-full justify-center z-[1]"
      >
        {{ $t("summary_title") }}
      </h5>

      <!-- Items to pay -->
      <div
        class="flex flex-col row-start-2 col-start-4 col-span-6 mobileL:col-start-2 mobile:col-start-1 mobile:col-span-full w-full z-[1]"
      >
        <div
          class="flex flex-row w-full bg-white border border-[#EDEDED] rounded-[12px] px-6 py-4 items-center"
        >
          <div class="flex items-center space-x-5 w-full">
            <nuxt-img
              :provider="$config.img_provider"
              src="/checkout/deposit.svg"
              class="w-[48px] h-[48px]"
              alt="furniturepackaging"
            ></nuxt-img>
            <p class="font-bold">{{ $t("summary_body_title") }}</p>
          </div>
          <p class="flex justify-end text-dark/70">
            {{
              (paymentAmount / 100)
                | formatCurrency(
                  currencyCode,
                  $i18n.locales.find((i) => i.code === $i18n.locale).iso
                )
            }}
          </p>
        </div>

        <div
          class="inline-flex w-full items-center justify-end pt-4 pr-6 space-x-4"
        >
          <p class="font-bold">{{ $t("summary_body_total") }}</p>
          <p class="font-bold">
            {{
              (paymentAmount / 100)
                | formatCurrency(
                  currencyCode,
                  $i18n.locales.find((i) => i.code === $i18n.locale).iso
                )
            }}
          </p>
        </div>
      </div>

      <!-- Content 1 -->
      <section
        class="row-start-3 col-start-4 col-span-6 mobileL:col-start-2 mobile:col-start-1 mobile:col-span-full flex flex-col pt-14"
      >
        <div class="flex flex-row w-full justify-between items-start mb-6">
          <h5>{{ $t("billing_title") }}</h5>
        </div>

        <!-- Form section -->
        <checkout-form
          :countries="countries"
          @submit="isSubmitted = true"
          v-show="!isSubmitted"
          @hook:mounted="isCheckoutMounted = true"
        ></checkout-form>

        <!-- Summary of data -->
        <div class="pt-4" v-show="isSubmitted">
          <div
            class="flex flex-row justify-between items-start border border-[#EDEDED] rounded-[12px] px-6 py-4"
          >
            <div class="flex flex-col">
              <p class="capitalize">{{ fullName }}</p>
              <p class="uppercase text-[14px] font-normal">{{ id }}</p>
              <p class="capitalize text-[14px] font-normal">{{ address }}</p>
              <p class="text-[14px] font-normal">
                {{ city }} ({{ state }}) - {{ zipCode }} -
                <span class="uppercase">{{ country[1] }}</span>
              </p>
              <p class="text-[14px] font-normal">{{ phone }}</p>
            </div>

            <div class="w-fit">
              <ui-button
                size="small"
                @click="isSubmitted = false"
                :arrow="true"
              >
                {{ $t("billing_cta") }}
              </ui-button>
            </div>
          </div>
        </div>
      </section>

      <section
        class="row-start-4 col-start-4 col-span-6 mobileL:col-start-2 mobile:col-start-1 mobile:col-span-full flex flex-col space-y-4 pt-14"
        v-if="isSubmitted"
      >
        <h5>{{ $t("payment_method_title") }}</h5>
        <card :key="paymentMethodKey">
          <template v-slot="slotProps">
            <div
              class="flex flex-col space-y-3 mt-4"
              v-if="slotProps.isMounted"
            >
              <ui-field>
                <ui-checkbox size="large" v-model="areConditionsAccepted">
                  <span class="relative text-justify">
                    {{ $t("form_checkbox_1_prefix") }}
                    <nuxt-link
                      :to="localePath('/legal/conditions')"
                      target="_blank"
                      class="underline inline-flex"
                    >
                      {{ $t("form_checkbox_1_span") }}
                    </nuxt-link>
                    <span>
                      {{ $t("form_checkbox_1_suffix") }}
                    </span>
                    <span class="inline-flex cursor-pointer">
                      <info-icon class="h-3 w-3 fill-white"></info-icon>
                    </span>
                  </span>
                </ui-checkbox>
              </ui-field>
              <ui-button
                @click.prevent="handlePayment(slotProps.pay)"
                class="w-full mt-4"
                size="small"
                :disabled="!areConditionsAccepted || !slotProps.componentLoaded"
                :loading="isPaymentInProcess"
                >{{ $t("payment_method_cta") }}</ui-button
              >
            </div>
            <div
              class="flex flex-col justify-center items-center border border-[#EDEDED] rounded-[12px] px-6 py-4"
              v-else
            >
              <p class="text-[18px]">{{ $t("payment_method_error_title") }}</p>
              <p class="p2">{{ $t("payment_method_error_subtitle") }}</p>
              <ui-button
                @click.prevent="paymentMethodKey += 1"
                class="w-fit mt-4"
                size="small"
                :loading="slotProps.isBeingMounted"
                >{{ $t("payment_method_error_cta") }}</ui-button
              >
            </div>
          </template>
        </card>
      </section>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
import localesMetadata from "@/mixins/localesMetadata";
import formats from "@/mixins/formats";

export default {
  name: "paymentLink",
  layout: "paymentLink",
  components: {
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-checkbox": async () => await import("@/components/uiCheckBox.vue"),
    "info-icon": async () => await import("@/components/icons/InfoIcon.vue"),
    card: async () => await import("@/components/checkout/card.vue"),
    "loading-page": async () => await import("@/components/loadingPage.vue"),
    "checkout-form": async () => await import("@/components/checkout/form.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  head() {
    return {
      title: this.$t("title"),
      script: [
        {
          src: "https://js.chargebee.com/v2/chargebee.js",
        },
      ],
      meta: [
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow",
        },
      ],
    };
  },
  mixins: [localesMetadata, formats],
  async mounted() {
    // Read payment link metadata from database
    try {
      await this.isValidPaymentLink();

      const language =
        this.localeMetadata?.derivedLang || this.localeMetadata?.simplifiedLang;

      // Load country data
      const countries = await this.$backendApi.$get("/countries/", {
        headers: {
          "Accept-Language": `${language},en;q=0.9`,
        },
      });

      // Move current country to front
      this.countries = this.bubbleUpCurrentCountry(countries);
    } catch (error) {
      this.isInvalidLink = true;
    } finally {
      this.loadedPage = true;
    }
  },
  data() {
    return {
      loadedPage: false,
      isSubmitted: false,
      areConditionsAccepted: false,

      // Flag to know if an error has ocurred to force re-render only the paymentmethod component
      paymentMethodKey: 0,

      // Component mounting behavior
      isCheckoutMounted: false,

      // Country list
      countries: [],

      // Payment link statuses
      isPaid: false,
      isExpired: false,
      isInvalidLink: false,

      // Payment link metadata
      paymentAmount: 0,

      // Payment logic
      isPaymentInProcess: false,

      // Currency mapping
      currencies: {
        es: "EUR",
        fr: "EUR",
        pt: "EUR",
        it: "EUR",
        mx: "MXN",
      },
    };
  },
  computed: {
    ...mapState("checkout", {
      firstName: (state) => state.firstName,
      lastName: (state) => state.lastName,
      id: (state) => state.id,
      address: (state) => state.address,
      city: (state) => state.city,
      state: (state) => state.state,
      country: (state) => state.country,
      zipCode: (state) => state.zipCode,
      phone: (state) => state.phone,
      isBusiness: (state) => state.isBusiness,
    }),
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    currencyCode() {
      return this.currencies[this.localeMetadata.country];
    },
  },
  methods: {
    bubbleUpCurrentCountry(countries) {
      const currentCountryIndex = countries.findIndex(
        (item) => item.code === this.localeMetadata?.country.toUpperCase()
      );
      countries.unshift(countries.splice(currentCountryIndex, 1)[0]);

      return countries;
    },
    async isValidPaymentLink() {
      try {
        const paymentLinkMetadata = await this.$gatewayApi.$get(
          `chargebee-payment-link?key=${this.$config.gatewayKey}`,
          {
            params: {
              id: this.$route.params.id,
            },
          }
        );

        // Check first if payment link is already paid
        if (paymentLinkMetadata.is_paid) {
          this.isPaid = true;
          return false;
        }

        // Check if already expired
        const now = new Date();
        const validUntil = new Date(paymentLinkMetadata.valid_until);

        if (now > validUntil) {
          this.isExpired = true;
          return false;
        }

        // Finally check if current site is valid for this payment link
        if (
          this.localeMetadata?.country.toUpperCase() !==
          paymentLinkMetadata.site
        ) {
          this.isInvalidLink = true;
          return false;
        }

        // Set the payment amount
        this.paymentAmount = paymentLinkMetadata.deposit;

        // Otherwise, is true
        return true;
      } catch (error) {
        this.isInvalidLink = true;
        throw new Error(error);
      }
    },
    async handlePayment(paymentMethodPay) {
      try {
        // Disable button
        this.isPaymentInProcess = true;

        const payStatus = await paymentMethodPay({
          first_name: this.firstName,
          last_name: this.lastName,
          address: this.address,
          city: this.city,
          state: this.state,
          zip_code: this.zipCode,
          country: this.country.code,
          vat_number: this.id,
          phone: this.phone,
          is_customer: !this.isBusiness,
          key: this.$route.params.id,
        });

        if (payStatus !== null) {
          // Payment succesful, warn the user about it
          this.isPaid = true;
        }
      } catch (error) {
        this.$toast({
          message: this.$t("generic_error"),
          type: "danger",
          displayTime: 3500,
        });
      } finally {
        // Enable button
        this.isPaymentInProcess = false;
      }
    },
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
title: "Pago de señal"
final_step_success_title: "Pago completado"
final_step_success_body: "El pago ya ha sido realizado con éxito y no puede realizarse de nuevo"
final_step_expired_title: "Enlace de pago caducado"
final_step_expired_body: "El pago no puede efectuarse porque la validez del mismo ha expirado"
final_step_invalid_title: "Enlace de pago no válido"
final_step_invalid_body: "El enlace de pago no existe o ha ocurrido un error durante su procesamiento.<br>Inténtalo de nuevo en unos minutos"
summary_title: "Resumen de pago"
summary_body_title: "Pago de señal"
summary_body_total: "Total"
billing_title: "Datos de facturación"
billing_cta: "Editar"
payment_method_title: "Método de pago"
form_checkbox_1_prefix: 'Al pulsar en "Pagar" aceptas los'
form_checkbox_1_span: "términos y condiciones de uso"
form_checkbox_1_suffix: "del contrato asociado a este servicio"
payment_method_cta: "Pagar"
payment_method_error_cta: "Recargar"
payment_method_error_title: "Error al cargar el componente de pago"
payment_method_error_subtitle: "Pulsa el botón inferior para recargar el componente o inténtalo de nuevo más tarde"
generic_error: "Error al efectuar el pago. Inténtelo de nuevo más tarde"
</i18n>
<i18n lang="yaml" locale="fr">
title: "Paiement de l'acompte"
final_step_success_title: "Paiement effectué"
final_step_success_body: "Le paiement a déjà été effectué correctement et ne peut pas être refait."
final_step_expired_title: "Lien de paiement expiré"
final_step_expired_body: "Le paiement ne peut être effectué car sa validité a expiré."
final_step_invalid_title: "Lien de paiement non valide"
final_step_invalid_body: "Le lien de paiement n'existe pas ou une erreur s'est produite pendant le traitement.<br>Ressayez dans quelques minutes."
summary_title: "Résumé du paiement"
summary_body_title: "Paiement de l'acompte"
summary_body_total: "Total"
billing_title: "Données de facturation"
billing_cta: "Modifier"
payment_method_title: "Méthode de paiement"
form_checkbox_1_prefix: 'En cliquant sur "Payez", vous acceptez les conditions suivantes'
form_checkbox_1_span: "termes et conditions d'utilisation"
form_checkbox_1_suffix: "du contrat associé à ce service"
payment_method_cta: "Payez"
payment_method_error_cta: "Recharger"
payment_method_error_title: "Erreur de chargement du composant de paiement"
payment_method_error_subtitle: "Appuyez sur le bouton ci-dessous pour recharger le composant ou réessayez plus tard."
generic_error: "Erreur de paiement. Veuillez réessayer plus tard"
</i18n>
<i18n lang="yaml" locale="it">
title: "Pagamento del deposito"
final_step_success_title: "Pagamento completato"
final_step_success_body: "Il pagamento è già stato effettuato con successo e non può essere ripetuto."
final_step_expired_title: "Link di pagamento scaduto"
final_step_expired_body: "Il pagamento non può essere effettuato perché la validità del pagamento è scaduta."
final_step_invalid_title: "Link di pagamento non valido"
final_step_invalid_body: "Il link per il pagamento non esiste o si è verificato un errore durante il processamento.<br>Riprovate tra qualche minuto."
summary_title: "Riepilogo dei pagamenti"
summary_body_title: "Pagamento del deposito"
summary_body_total: "Totale"
billing_title: "Dati di fatturazione"
billing_cta: "Modifica"
payment_method_title: "Metodo di pagamento"
form_checkbox_1_prefix: 'Cliccando su "Paga" si accettano le'
form_checkbox_1_span: "termini e condizioni d'uso"
form_checkbox_1_suffix: "del contratto associato al servizio"
payment_method_cta: "Paga"
payment_method_error_cta: "Ricaricare"
payment_method_error_title: "Errore nel caricamento del componente di pagamento"
payment_method_error_subtitle: "Premere il pulsante sottostante per ricaricare il componente o riprovare più tardi."
generic_error: "Si é verificato un errore durante il pagamento. Riprova più tardi "
</i18n>
<i18n lang="yaml" locale="pt">
title: "Pagamento de depósito"
final_step_success_title: "Pagamento completado"
final_step_success_body: "O pagamento já foi feito com sucesso e não pode ser feito novamente."
final_step_expired_title: "A link de pagamento expirou"
final_step_expired_body: "O pagamento não pode ser efectuado porque a sua validade expirou."
final_step_invalid_title: "Link de pagamento inválido"
final_step_invalid_body: "A link de pagamento não existe ou ocorreu um erro durante o processamento.<br>Try novamente dentro de alguns minutos."
summary_title: "Resumo de pagamento"
summary_body_title: "Pagamento de depósito"
summary_body_total: "Total"
billing_title: "Dados de facturação"
billing_cta: "Editar"
payment_method_title: "Modo de pagamento"
form_checkbox_1_prefix: 'Ao clicar em "Pagar", aceita os'
form_checkbox_1_span: "termos e condições de utilização"
form_checkbox_1_suffix: "do contrato associado a este serviço"
payment_method_cta: "Pagar"
payment_method_error_cta: "Recarregar"
payment_method_error_title: "Erro no carregamento da componente de pagamento"
payment_method_error_subtitle: "Prima o botão abaixo para recarregar o componente ou tente novamente mais tarde."
generic_error: "Erro durante o pagamento. Por favor tente novamente mais tarde"
</i18n>
<i18n lang="yaml" locale="mx">
title: "Pago de señal"
final_step_success_title: "Pago completado"
final_step_success_body: "El pago ya ha sido realizado con éxito y no puede realizarse de nuevo"
final_step_expired_title: "Enlace de pago caducado"
final_step_expired_body: "El pago no puede efectuarse porque la validez del mismo ha expirado"
final_step_invalid_title: "Enlace de pago no válido"
final_step_invalid_body: "El enlace de pago no existe o ha ocurrido un error durante su procesamiento.<br>Inténtalo de nuevo en unos minutos"
summary_title: "Resumen de pago"
summary_body_title: "Pago de señal"
summary_body_total: "Total"
billing_title: "Datos de facturación"
billing_cta: "Editar"
payment_method_title: "Método de pago"
form_checkbox_1_prefix: 'Al pulsar en "Pagar" aceptas los'
form_checkbox_1_span: "términos y condiciones de uso"
form_checkbox_1_suffix: "del contrato asociado a este servicio"
payment_method_cta: "Pagar"
payment_method_error_cta: "Recargar"
payment_method_error_title: "Error al cargar el componente de pago"
payment_method_error_subtitle: "Pulsa el botón inferior para recargar el componente o inténtalo de nuevo más tarde"
generic_error: "Error al efectuar el pago. Inténtelo de nuevo más tarde"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/views/_paymentLink.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/views/_paymentLink.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/views/_paymentLink.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/views/_paymentLink.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/views/_paymentLink.yaml"></i18n>
