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
          <p class="wizard-subtitles" v-if="date">
            {{ $t("step_3_date") }}:
            <span class="text-electric">{{ date }}</span>
          </p>
          <div
            class="wizard-subtitles"
            v-if="Object.keys(additionalServices).length > 0"
          >
            {{ $t("step_3_services") }}:
            <ul class="list-disc pl-14">
              <li :key="index" v-for="(service, index) in additionalServices">
                <span class="text-electric text-[18px]">{{ $t(service) }}</span>
              </li>
            </ul>
          </div>
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
          :label="$t('form_address')"
          :validation="validationAddress"
          :messages="$t('error_address')"
        >
          <ui-input
            :placeholder="$t('form_address')"
            v-model.trim="validationAddress.$model"
          ></ui-input>
        </ui-field>

        <ui-field
          :label="$t('form_zip_code')"
          :validation="validationZipCode"
          :messages="$t('error_zip_code')"
        >
          <ui-input
            :placeholder="$t('form_zip_code')"
            v-model.trim="validationZipCode.$model"
          ></ui-input>
        </ui-field>

        <ui-field
          :label="$t('form_city')"
          :validation="validationCity"
          :messages="$t('error_city')"
        >
          <ui-input
            :placeholder="$t('form_city')"
            v-model.trim="validationCity.$model"
          ></ui-input>
        </ui-field>

        <ui-field
          :label="$t('form_province')"
          :validation="validationProvince"
          :messages="$t('error_province')"
          v-if="localeMetadata.country !== 'es'"
        >
          <ui-input
            :placeholder="$t('form_province')"
            v-model.trim="validationProvince.$model"
          ></ui-input>
        </ui-field>

        <ui-field
          class="w-full"
          :label="$t('form_province')"
          :validation="validationProvince"
          :messages="$t('error_province')"
          v-else
        >
          <ui-select
            v-model="province"
            class="w-full"
            size="large"
            :restrictedHeight="true"
          >
            <template slot="selected">
              <ui-select-selected-item
                :selectedItem="province"
                :nonSelectedItem="$t('form_province')"
              >
              </ui-select-selected-item>

              <span
                class="absolute m-auto top-[50%] translate-y-[-50%] right-8 peer-focus-within:hidden mobile:hidden"
              >
                <exclamation-error-icon
                  class="input-label-error hidden w-6 h-6"
                ></exclamation-error-icon>
              </span>
            </template>

            <ui-option
              v-for="(entry, index) in spanishProvinces"
              :key="index"
              :value="entry"
              :attr-index="index"
              :id="entry.replace(/\s/g, '')"
              :selected="entry === province"
              >{{ entry }}</ui-option
            >
          </ui-select>
        </ui-field>

        <ui-field :label="$t('form_comment')">
          <ui-textarea
            :placeholder="$t('form_comment')"
            :isResizable="false"
            :rows="4"
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
                    data: $t("form_cta"),
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
import { sameAs, required } from "vuelidate/lib/validators";
import ensureMode from "@/helpers/ensureMode";
import localesMetadata from "@/mixins/localesMetadata";
import spanishProvinces from "@/utils/spanishProvinces";
import { validationMixin } from "vuelidate";

export default {
  name: "uiBookingWizardForm",
  props: {
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
    "ui-select": async () => await import("@/components/uiSelect.vue"),
    "ui-option": async () => await import("@/components/uiOption.vue"),
    "exclamation-error-icon": async () =>
      await import("@/components/icons/ExclamationErrorIcon.vue"),
    "ui-select-selected-item": async () =>
      await import("@/components/uiCitySelector/uiSelectSelectedItem.vue"),
  },
  mixins: [localesMetadata, validationMixin],
  data() {
    return {
      address: "",
      zip_code: "",
      form_city: "",
      province: "",
      privacyPolicyPermission: false,
      showLegalModal: false,
      loading: false,
      spanishProvinces: spanishProvinces,
    };
  },
  validations: {
    address: {
      required,
    },
    zip_code: {
      required,
    },
    form_city: {
      required,
    },
    province: {
      required,
    },
    comment: {},
    privacyPolicyPermission: { sameAs: sameAs(() => true) },
  },
  computed: {
    ...mapState({
      plan(state) {
        return state["bookingWizard"].plan;
      },
      paymentPeriod(state) {
        return state["bookingWizard"].paymentPeriod;
      },
      city(state) {
        return state["bookingWizard"].city || "madrid";
      },
      date(state) {
        return state["bookingWizard"].date;
      },
      additionalServices(state) {
        return state["bookingWizard"].additionalServices;
      },
    }),
    validationAddress() {
      return ensureMode("client", this.$v, "address");
    },
    validationZipCode() {
      return ensureMode("client", this.$v, "zip_code");
    },
    validationCity() {
      return ensureMode("client", this.$v, "form_city");
    },
    validationProvince() {
      return ensureMode("client", this.$v, "province");
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
          await this.$api.$post("/api/submit", {
            deal: this.$route.params.deal,
            email: this.$route.params.deal,
            comment: this.comment,
            hsutk: hubspotcookie,
            pageUri: window.location.href,
            pageName: currentRoute.meta.pageName,
            pipeline: this.localeMetadata.country.toUpperCase(),
            allowCommercialNotifications: this.commercialInformationPermission,
            space: this.$t(this.plan?.space),
            duration: this.$t(this.plan?.type),
            base: this.city,
            date: this.date,
            additionalServices: this.additionalServices,
            city: this.city,
            price: this.plan?.price,
            address: `${this.address} - ${this.zip_code} - ${this.city} (${this.province})`,
          });

          // Everything OK => propagate the event to the parent
          this.$emit("success");
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
step_3_title_2: "y confirma tu reserva"
step_3_city: "Ciudad"
step_3_choosen_plan: "Espacio elegido"
step_3_date: "Fecha de recogida"
step_3_services: "Servicios adicionales"
furniturePackaging: "Embalaje de muebles"
boxPackaging: "Embalaje de cajas"
furnitureDisassembly: "Desmontaje de muebles"
stairs: "Carga/descarga por escalera"
form_address: "Dirección de recogida"
form_zip_code: "Código postal"
form_city: "Ciudad"
form_province: "Provincia"
form_comment: "Comentario"
form_checkbox_1_prefix: 'Al pulsar en "{data}" aceptas nuestra'
form_checkbox_1_span: "política de privacidad"
form_checkbox_1_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_cta: "Confirmar reserva"
monthly: "Mensual"
biannual: "Semestral"
annual: "Anual"
space_undefined: "Personalizado"
locker: "Locker"
error_address:
  required: "Dirección requerida"
error_zip_code:
  required: "Código postal requerido"
error_province:
  required: "Provincia requerida"
error_city:
  required: "Ciudad requerida"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>
<i18n lang="yaml" locale="fr">
step_3_title_1: "Entrez vos"
step_3_highlight: "données"
step_3_title_2: "et confirmer votre réservation"
step_3_city: "Ville"
step_3_choosen_plan: "Espace choisi"
step_3_date: "Date de la collecte"
step_3_services: "Services supplémentaires"
furniturePackaging: "Emballage de meubles"
boxPackaging: "Emballage des boîtes"
furnitureDisassembly: "Démontage de meubles"
stairs: "Chargement/déchargement par les escaliers"
form_address: "Adresse de collecte"
form_zip_code: "Code postal"
form_city: "Ville"
form_province: "Région"
form_comment: "Commentaire"
form_checkbox_1_prefix: 'En cliquant sur "{data}", vous acceptez notre'
form_checkbox_1_span: "politique de confidentialité"
form_checkbox_1_suffix: "de traiter vos données afin de répondre à votre demande ou à votre question"
form_cta: "Confirmer la réservation"
monthly: "Mensuel"
biannual: "Semestriel"
annual: "Annuel"
space_undefined: "Personnalisé"
locker: "Locker"
error_address:
  required: "Adresse requis"
error_zip_code:
  required: "Code postal requis"
error_province:
  required: "Région requis"
error_city:
  required: "Ville requis"
generic_error: "Erreur de validation du formulaire. Veuillez réessayer plus tard"
</i18n>
<i18n lang="yaml" locale="it">
step_3_title_1: "Introduci i tuoi"
step_3_highlight: "dati"
step_3_title_2: "e conferma la riserva"
step_3_city: "Città "
step_3_choosen_plan: "Spazio selezionato"
step_3_date: "Data di ritiro"
step_3_services: "Servizi aggiuntivi"
furniturePackaging: "Imballaggio di mobili"
boxPackaging: "Imballaggio delle scatole"
furnitureDisassembly: "Smontaggio di mobili"
stairs: "Carico/scarico con scale"
form_address: "Indirizzo di ritiro"
form_zip_code: "Codice postale"
form_city: "Città"
form_province: "Regione"
form_comment: "Commento"
form_checkbox_1_prefix: "Al cliccare '{data}' accetti la nostra"
form_checkbox_1_span: "informativa sulla privacy"
form_checkbox_1_suffix: "per gestire i tuoi dati con lo scopo di processare le tue richieste o domande"
form_cta: "Confirmare la riserva"
monthly: "Mensile"
biannual: "Semestrale"
annual: "Annuale"
space_undefined: "Personalizzato"
locker: "Locker"
error_address:
  required: "Indirizzo obbligatorio"
error_zip_code:
  required: "Codice postal obbligatorio"
error_province:
  required: "Regione obbligatoria"
error_city:
  required: "Città obbligatoria"
generic_error: "Si é verificato un errore durante l'invio. Riprova più tardi "
</i18n>
<i18n lang="yaml" locale="pt">
step_3_title_1: "Introduza os seus"
step_3_highlight: "dados"
step_3_title_2: "e confirma a reserva"
step_3_city: "Cidade"
step_3_choosen_plan: "Espaço escolhido"
step_3_date: "Data de recolha"
step_3_services: "Serviços adicionais"
furniturePackaging: "Embalagem de móveis"
boxPackaging: "Empacotamento de caixas"
furnitureDisassembly: "Desmontagem de móveis"
stairs: "Carga/descarga por escadas"
form_address: "Endereço de recolha"
form_zip_code: "Código postal"
form_city: "Cidade"
form_province: "Província"
form_comment: "Comentario "
form_checkbox_1_prefix: 'Ao clicar em "{data}" está a concordar com a nossa'
form_checkbox_1_span: "política de privacidade"
form_checkbox_1_suffix: "para tratar os seus dados com o objectivo de responder à sua consulta ou pedido"
form_cta: "Confirmar reserva"
monthly: "Mensal"
biannual: "Semestral"
annual: "Anual"
space_undefined: "Personalizado"
locker: "Locker"
error_address:
  required: "Endereço requerido"
error_zip_code:
  required: "Código postal requerido"
error_province:
  required: "Província requerida"
error_city:
  required: "Cidade requerida"
generic_error: "Erro ao submeter o formulário. Por favor tente novamente mais tarde"
</i18n>
<i18n lang="yaml" locale="mx">
step_3_title_1: "Introduce tus "
step_3_highlight: "datos"
step_3_title_2: "y confirma tu reserva"
step_3_city: "Ciudad"
step_3_choosen_plan: "Espacio elegido"
step_3_date: "Fecha de recogida"
step_3_services: "Servicios adicionales"
furniturePackaging: "Embalaje de muebles"
boxPackaging: "Embalaje de cajas"
furnitureDisassembly: "Desmontaje de muebles"
stairs: "Carga/descarga por escalera"
form_address: "Dirección de recogida"
form_zip_code: "Código postal"
form_city: "Ciudad"
form_province: "Provincia"
form_comment: "Comentario"
form_checkbox_1_prefix: 'Al pulsar en "{data}" aceptas nuestra'
form_checkbox_1_span: "política de privacidad"
form_checkbox_1_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_cta: "Confirmar reserva"
monthly: "Mensual"
biannual: "Semestral"
annual: "Anual"
space_undefined: "Personalizado"
locker: "Locker"
error_address:
  required: "Dirección requerida"
error_zip_code:
  required: "Código postal requerido"
error_province:
  required: "Provincia requerida"
error_city:
  required: "Ciudad requerida"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiBookingWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiBookingWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiBookingWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiBookingWizardForm.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiBookingWizardForm.yaml"
></i18n>
