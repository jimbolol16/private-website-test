<template>
  <div class="bg-white h-full">
    <section
      class="grid-layout mobile:pt-20 pt-32 pb-8 desktopL:my-auto desktop:my-auto"
    >
      <h2
        class="wizard-title row-start-1 desktop:col-end-7 desktop:col-start-2 desktopL:col-end-7 desktopL:col-start-2 tablet:col-end-7 tablet:col-start-1 mobile:col-end-5 mobile:col-start-1 mobileL:col-start-1 mobileL:col-span-8"
      >
        {{ $t("step_3_title_1") }}
        <span class="text-electric">{{ $t("step_3_highlight") }}</span>
        {{ $t("step_3_title_2") }}
      </h2>
      <div
        class="row-start-2 desktop:col-end-7 desktop:col-start-2 desktopL:col-end-7 desktopL:col-start-2 tablet:col-end-7 tablet:col-start-1 mobile:hidden mobileL:hidden"
      >
        <div class="flex flex-col space-y-2 mt-4">
          <p class="wizard-subtitles">
            {{ $t("step_3_city") }}:
            <span class="text-electric">{{ $t(`cities.${city}`) }}</span>
          </p>
          <div class="contents" v-if="plan">
            <p class="wizard-subtitles">{{ $t("step_3_choosen_plan") }}:</p>
            <div class="flex max-w-[358px] mt-2">
              <ui-plan-card
                :displayButton="false"
                :title="plan.space"
                :price="plan.price"
                :price_promo="plan.price_promo"
                :pickup_promo="plan.pickup_promo"
                :paymentPeriod="paymentPeriod"
                :features="plan.features"
                :space="plan.space"
                :highlight="plan.popular"
                :currencyCode="plan.currency"
              ></ui-plan-card>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <form
        class="mobile:row-start-2 mobile:pt-6 mobileL:row-start-2 mobileL:pt-6 desktop:row-start-1 desktopL:row-start-1 tablet:row-start-1 row-[span_16_/_span_16] desktop:col-end-13 desktop:col-start-7 desktopL:col-end-13 desktopL:col-start-7 tablet:col-end-13 tablet:col-start-7 mobile:col-end-5 mobile:col-start-1 mobileL:col-span-6 mobileL:col-start-2 flex flex-col gap-4 z-[3]"
      >
        <ui-field
          :label="$t('form_name')"
          :validation="validationFirstName"
          :messages="$t('error_first_name')"
        >
          <ui-input
            :placeholder="$t('form_name')"
            v-model.trim="validationFirstName.$model"
            :debounceTime="100"
            @change="handleInputChange($event, 'firstName')"
          ></ui-input>
        </ui-field>
        <ui-field
          :label="$t('form_lastname')"
          :validation="validationLastName"
          :messages="$t('error_last_name')"
        >
          <ui-input
            :placeholder="$t('form_lastname')"
            v-model.trim="validationLastName.$model"
            :debounceTime="100"
            @change="handleInputChange($event, 'lastName')"
          ></ui-input>
        </ui-field>
        <ui-field
          :label="$t('form_email')"
          :validation="validationEmail"
          :messages="$t('error_email')"
          :errors="deliverableError ? $t('error_email.email') : null"
          id="email"
        >
          <ui-input
            :placeholder="$t('form_email')"
            v-model.trim="validationEmail.$model"
            @input="email = $event.toLowerCase()"
            :debounceTime="100"
            @change="handleInputChange($event, 'email')"
          ></ui-input>
        </ui-field>
        <ui-field
          :label="$t('form_phone')"
          :validation="validationPhone"
          :messages="$t('error_phone')"
        >
          <ui-input
            :placeholder="$t('form_phone')"
            v-model.trim="validationPhone.$model"
            type="tel"
            :onlyRightRadius="true"
            :debounceTime="100"
            @change="handleInputChange($event, 'phone')"
          ></ui-input>
        </ui-field>
        <ui-field :label="$t('form_comment')">
          <ui-textarea
            :placeholder="$t('form_comment')"
            :isResizable="false"
            :rows="4"
            :maxLength="140"
            v-model.trim="validationComment.$model"
          ></ui-textarea>
        </ui-field>
        <div class="flex flex-col gap-2 py-2">
          <ui-field
            :validation="validationPrivacyPolicy"
            :displayBackgroundOnError="false"
          >
            <ui-checkbox v-model="validationPrivacyPolicy.$model" size="large">
              <span class="relative -top-1 text-justify">
                {{
                  $t("form_checkbox_1_prefix", {
                    data: $t(`form_cta${routePath}`),
                  })
                }}
                <nuxt-link :to="localePath('/legal/privacy')" class="underline">
                  {{ $t("form_checkbox_1_span") }}</nuxt-link
                >
                {{ $t("form_checkbox_1_suffix") }}
                <span
                  class="inline-flex cursor-pointer"
                  @click="showLegalModal = true"
                >
                  <info-icon
                    class="h-3 w-3 fill-dark checkbox-error"
                  ></info-icon>
                </span>
              </span>
            </ui-checkbox>
          </ui-field>
          <ui-checkbox v-model="commercialInformationPermission" size="large">
            <span class="relative -top-1 text-justify">
              {{ $t("form_checkbox_2_prefix") }}
              <nuxt-link :to="localePath('/legal/privacy')" class="underline">{{
                $t("form_checkbox_2_span")
              }}</nuxt-link>
              <span
                class="inline-flex cursor-pointer"
                @click="showLegalModal = true"
              >
                <info-icon class="h-3 w-3 fill-dark"></info-icon>
              </span>
            </span>
          </ui-checkbox>
        </div>
        <div class="w-fit mobile:w-full">
          <ui-button
            type="default"
            :loading="loading"
            @click.prevent="handleFormSubmission"
            :disabled="formBeingSubmitted"
            >{{ $t("form_cta") }}</ui-button
          >
        </div>
      </form>

      <!-- Legal modal -->
      <ui-legal-modal
        v-if="showLegalModal"
        @close="showLegalModal = false"
      ></ui-legal-modal>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { email, sameAs, required } from "vuelidate/lib/validators";
import { validatePhoneNumber } from "@/utils/validations";
import ensureMode from "@/helpers/ensureMode";
import localesMetadata from "@/mixins/localesMetadata";
import validationEmailMixin from "@/mixins/validationEmail";
import {
  retrieveGclid,
  retrievePartnershipReferrer,
} from "@/utils/queryStrings";
import { validationMixin } from "vuelidate";

export default {
  name: "uiWizardForm",
  props: {
    store: {
      type: String,
      default: "pricesWizard",
    },
    formBeingSubmitted: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-textarea": async () => await import("@/components/uiTextArea.vue"),
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-checkbox": async () => await import("@/components/uiCheckBox.vue"),
    "ui-plan-card": async () =>
      await import("@/components/wizard/uiPlanCard.vue"),
    "info-icon": async () => await import("@/components/icons/InfoIcon.vue"),
    "ui-legal-modal": async () =>
      await import("@/components/legal/uiLegalModal.vue"),
  },
  mixins: [localesMetadata, validationMixin, validationEmailMixin],
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      comment: "",
      privacyPolicyPermission: false,
      commercialInformationPermission: false,
      showLegalModal: false,
      loading: false,
    };
  },
  validations: {
    email: {
      email,
      required,
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    phone: {
      required,
      validatePhoneNumber,
    },
    comment: {},
    privacyPolicyPermission: { sameAs: sameAs(() => true) },
  },
  computed: {
    ...mapState({
      plan(state) {
        return state[this.store].plan;
      },
      paymentPeriod(state) {
        return state[this.store].paymentPeriod;
      },
      city(state) {
        return state[this.store].city || "madrid";
      },
      date(state) {
        return state[this.store].date;
      },
      additionalServices(state) {
        return state[this.store].additionalServices;
      },
    }),
    validationFirstName() {
      return ensureMode("client", this.$v, "firstName");
    },
    validationLastName() {
      return ensureMode("client", this.$v, "lastName");
    },
    validationEmail() {
      return ensureMode("client", this.$v, "email");
    },
    validationPhone() {
      return ensureMode("client", this.$v, "phone");
    },
    validationComment() {
      return ensureMode("client", this.$v, "comment");
    },
    validationPrivacyPolicy() {
      return ensureMode("client", this.$v, "privacyPolicyPermission");
    },
    routePath() {
      return this.$route.params.deal
        ? `_${this.$route.name.split("-")[0]}`
        : "";
    },
  },
  methods: {
    async handleFormSubmission() {
      this.$v.$touch();
      this.loading = true;

      // Get hubspot cookie if any
      const hubspotcookie = document.cookie.replace(
        /(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      // Get meta from parent router as this is a child route and pageName is not present on this meta
      const currentRoute = this.$route.matched.find(
        (route) => route.meta.pageName
      );

      try {
        if (!this.$v.$invalid) {
          await this.$checkDeliverability(this.email);

          if (!this.deliverableError) {
            await this.$api.$post("/api/submit", {
              deal: this.$route.params.deal,
              email: this.email || this.$route.params.deal,
              firstName: this.firstName,
              lastName: this.lastName,
              comment: this.comment,
              phone: this.phone,
              hsutk: hubspotcookie,
              pageUri: window.location.href,
              pageName: currentRoute.meta.pageName,
              pipeline: this.localeMetadata.country.toUpperCase(),
              gclid: retrieveGclid(), // Although has this name, is a convention for legacy data. It should return the full url parameters
              allowCommercialNotifications:
                this.commercialInformationPermission,
              space: this.$t(this.plan?.space),
              duration: this.$t(this.plan?.type),
              base: this.city,
              date: this.date,
              additionalServices: this.additionalServices,
              address: this.address,
              partnershipCode: retrievePartnershipReferrer(),
            });

            // Everything OK => propagate the event to the parent
            this.$emit("success", {
              city: this.city,
              duration: this.plan?.type,
              space: this.plan?.space,
              price: this.plan?.price,
            });
          }
        }
      } catch (error) {
        this.$toast({
          message: this.$t("generic_error"),
          type: "danger",
          displayTime: 3500,
        });
      } finally {
        this.loading = false;
      }
    },
    /**
     * Reset vuelidate state when clearing the input
     */
    handleInputChange(value, variableName) {
      if (!value) {
        this.$v[variableName].$reset();
      }

      // Reset deliverableErrors
      this.$resetDeliverableError();
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.checkbox-class) {
  @apply items-start;
}
</style>
<i18n lang="yaml" locale="es">
step_3_title_1: "Introduce tus "
step_3_highlight: "datos"
step_3_title_2: "y recibe toda la información sin compromiso"
step_3_city: "Ciudad"
step_3_choosen_plan: "Espacio elegido"
form_name: "Nombre"
form_lastname: "Apellidos"
form_phone: "Teléfono"
form_address: "Dirección de recogida"
form_email: "Correo electrónico"
form_comment: "Comentario"
form_checkbox_1_prefix: 'Al pulsar en "{data}" aceptas nuestra'
form_checkbox_1_span: "política de privacidad"
form_checkbox_1_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_checkbox_2_prefix: "Acepto recibir comunicaciones comerciales de Box2box conforme a lo dispuesto en nuestra"
form_checkbox_2_span: "política de privacidad"
form_cta: "Pedir presupuesto"
monthly: "Mensual"
biannual: "Semestral"
annual: "Anual"
space_undefined: "Personalizado"
locker: "Locker"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_email:
  required: "Correo electrónico requerido"
  email: "Correo electrónico inválido"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>
<i18n lang="yaml" locale="fr">
step_3_title_1: "Entrez vos"
step_3_highlight: "données"
step_3_title_2: "et recevez votre devis sans compromis"
step_3_city: "Ville"
step_3_choosen_plan: "Espace choisi"
form_name: "Prénom"
form_lastname: "Nom de famille"
form_phone: "Téléphone"
form_address: "Adresse de collecte"
form_email: "Adresse électronique"
form_comment: "Commentaire"
form_checkbox_1_prefix: 'En cliquant sur "{data}", vous acceptez notre'
form_checkbox_1_span: "politique de confidentialité"
form_checkbox_1_suffix: "de traiter vos données afin de répondre à votre demande ou à votre question"
form_checkbox_2_prefix: "J'accepte de recevoir des communications commerciales de la part de Box2box conformément aux dispositions de notre"
form_checkbox_2_span: "politique de confidentialité"
form_cta: "Demander un devis"
monthly: "Mensuel"
biannual: "Semestriel"
annual: "Annuel"
space_undefined: "Personnalisé"
locker: "Locker"
error_first_name:
  required: "Prénom requis"
error_last_name:
  required: "Nom de famille requis"
error_email:
  required: "Adresse électronique requise"
  email: "Adresse électronique non valide"
error_phone:
  validatePhoneNumber: "Téléphone non valide"
generic_error: "Erreur de validation du formulaire. Veuillez réessayer plus tard"
</i18n>
<i18n lang="yaml" locale="it">
step_3_title_1: "Introduci i tuoi"
step_3_highlight: "dati"
step_3_title_2: "e ricevi tutte le informazioni senza impegno"
step_3_city: "Città "
step_3_choosen_plan: "Spazio selezionato"
form_name: "Nome"
form_lastname: "Cognome"
form_phone: "Telefono"
form_address: "Indirizzo di ritiro"
form_email: "E-mail"
form_comment: "Commento"
form_checkbox_1_prefix: "Al cliccare '{data}' accetti la nostra"
form_checkbox_1_span: "informativa sulla privacy"
form_checkbox_1_suffix: "per gestire i tuoi dati con lo scopo di processare le tue richieste o domande"
form_checkbox_2_prefix: "Accetto di ricevere informazioni commerciali da box2box conformi alla nostra "
form_checkbox_2_span: "informativa sulla privacy"
form_cta: "Richiedi un preventivo"
monthly: "Mensile"
biannual: "Semestrale"
annual: "Annuale"
space_undefined: "Personalizzato"
locker: "Locker"
error_first_name:
  required: "Il Nome é obbligatorio"
error_last_name:
  required: "Il Cognome é obbligatorio"
error_email:
  required: "La E-mail é obbligatoria"
  email: "La E-mail non é valida"
error_phone:
  validatePhoneNumber: "Il Telefono non é valido"
generic_error: "Si é verificato un errore durante l'invio. Riprova più tardi "
</i18n>
<i18n lang="yaml" locale="pt">
step_3_title_1: "Introduza os seus"
step_3_highlight: "dados"
step_3_title_2: "e receba todas as informações sem compromisso"
step_3_city: "Cidade"
step_3_choosen_plan: "Espaço escolhido"
form_name: "Nome"
form_lastname: "Apelidos"
form_phone: "Telefone"
form_address: "Endereço de recolha"
form_email: "E-mail"
form_comment: "Comentario "
form_checkbox_1_prefix: 'Ao clicar em "{data}" está a concordar com a nossa'
form_checkbox_1_span: "política de privacidade"
form_checkbox_1_suffix: "para tratar os seus dados com o objectivo de responder à sua consulta ou pedido"
form_checkbox_2_prefix: "Concordo em receber comunicações comerciais da Box2box de acordo com as disposições da nossa"
form_checkbox_2_span: "política de privacidade"
form_cta: "Pedir orçamento"
monthly: "Mensal"
biannual: "Semestral"
annual: "Anual"
space_undefined: "Personalizado"
locker: "Locker"
error_first_name:
  required: "Nome requerido"
error_last_name:
  required: "Apelidos requeridos"
error_email:
  required: "E-mail requerido"
  email: "E-mail inválido"
error_phone:
  validatePhoneNumber: "Telefone inválido"
generic_error: "Erro ao submeter o formulário. Por favor tente novamente mais tarde"
</i18n>
<i18n lang="yaml" locale="mx">
step_3_title_1: "Introduce tus "
step_3_highlight: "datos"
step_3_title_2: "y recibe toda la información sin compromiso"
step_3_city: "Ciudad"
step_3_choosen_plan: "Espacio elegido"
form_name: "Nombre"
form_lastname: "Apellidos"
form_phone: "Teléfono"
form_address: "Dirección de recogida"
form_email: "Correo electrónico"
form_comment: "Comentario"
form_checkbox_1_prefix: 'Al pulsar en "{data}" aceptas nuestra'
form_checkbox_1_span: "política de privacidad"
form_checkbox_1_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_checkbox_2_prefix: "Acepto recibir comunicaciones comerciales de Box2box conforme a lo dispuesto en nuestra"
form_checkbox_2_span: "política de privacidad"
form_cta: "Pedir presupuesto"
monthly: "Mensual"
biannual: "Semestral"
annual: "Anual"
space_undefined: "Personalizado"
locker: "Locker"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_email:
  required: "Correo electrónico requerido"
  email: "Correo electrónico inválido"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiWizardForm.yaml"
></i18n>
