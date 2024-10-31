<template>
  <div
    class="section-vertical-padding mobile:col-span-4 col-span-12 mobileL:col-span-8"
    :class="femalePerson ? 'mobileL:pb-0 mobile:pb-0' : ''"
  >
    <div
      class="absolute bg-salmon-light w-full desktopL:h-[424px] desktop:h-[424px] tablet:h-[424px] mobileL:h-[1261px] mobile:h-[1248px] left-0 z-0 desktopL:mt-[145px] desktop:mt-[145px] tablet:mt-[116px] mobile:mt-[0]"
      :class="
        femalePerson
          ? 'mobileL:h-[1600px] mobile:h-[1350px]'
          : 'mobileL:h-[1529px] mobile:h-[1356px]'
      "
    >
      <nuxt-img
        v-if="femalePerson"
        :provider="$config.img_provider"
        src="/formSection/packing-guy.png"
        alt="packinggirl"
        class="desktop:hidden desktopL:hidden mobileL:hidden mobile:hidden tablet:absolute mt-auto mr-[30px] z-0 tablet:w-[416px] bottom-0 right-0"
      />
    </div>
    <div class="subgrid-layout">
      <div
        class="flex row-start-1 mobile:row-start-2 mobileL:row-start-2 mobileL:col-start-1 mobileL:col-span-8 mobile:col-start-1 mobile:col-span-4 desktopL:col-span-6 desktopL:col-start-7 desktop:col-span-6 desktop:col-start-7 tablet:col-span-6 tablet:col-start-7 mobileL:mt-14 mobile:mt-6"
      >
        <nuxt-img
          v-if="femalePerson"
          :provider="$config.img_provider"
          src="/formSection/packing-guy.png"
          alt="packinggirl"
          class="mx-auto mt-auto mb-[274px] h-[516px] w-[448px] tablet:hidden z-0 tablet:w-[416px] tablet:mb-[277px] mobileL:w-[536px] mobileL:h-[617px] mobileL:mb-0 mobile:w-[327px] mobile:h-[377px] mobile:mb-0"
        />
        <nuxt-img
          v-else
          :provider="$config.img_provider"
          src="/formSection/packing-guy.png"
          class="my-auto mx-auto z-0 tablet:w-[416px] mt-[108px] tablet:mt-[153px]"
          loading="lazy"
          format="webp"
          alt="packingguy"
        />
      </div>
      <div
        class="row-start-1 desktopL:col-span-6 desktopL:col-start-1 desktop:col-span-6 desktop:col-start-1 tablet:col-span-6 tablet:col-start-1 mobile:col-span-4 mobileL:col-span-8 mobileL:col-start-1 mobile:col-start-1 flex w-full justify-center items-center"
      >
        <form
          class="max-w-[552px] desktopL:px-8 desktopL:py-12 desktop:px-8 desktop:py-12 tablet:px-6 tablet:py-12 mobileL:px-8 mobileL:py-12 mobile:px-5 mobile:py-12 flex flex-col gap-4 bg-salmon rounded-[12px] z-0 mobileL:mt-14 mobile:mt-14"
        >
          <div class="flex flex-col gap-1">
            <p class="form-subheading">{{ $t("form_main_title") }}</p>
            <h3 class="pb-8">{{ $t("form_subtitle") }}</h3>
          </div>
          <ui-field
            :label="$t('form_name')"
            :validation="validationFirstName"
            :displayBackgroundOnError="true"
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
            :displayBackgroundOnError="true"
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
            :displayBackgroundOnError="true"
            :messages="$t('error_email')"
            :errors="deliverableError ? $t('error_email.email') : null"
            id="email"
          >
            <ui-input
              :placeholder="$t('form_email')"
              v-model.trim="validationEmail.$model"
              :debounceTime="100"
              @change="handleInputChange($event, 'email')"
              @input="email = $event.toLowerCase()"
            ></ui-input>
          </ui-field>
          <ui-field
            :label="$t('form_phone')"
            :validation="validationPhone"
            :displayBackgroundOnError="true"
            :messages="$t('error_phone')"
          >
            <ui-input
              :placeholder="$t('form_phone')"
              v-model.trim="validationPhone.$model"
              type="tel"
              :debounceTime="100"
              @change="handleInputChange($event, 'phone')"
            ></ui-input>
          </ui-field>
          <ui-field
            v-if="displayInputCode"
            :label="$t('form_coupon')"
            :displayBackgroundOnError="true"
            :validation="couponCode.validations"
            :messages="$t('error_coupon')"
          >
            <ui-input
              :placeholder="$t('form_coupon')"
              v-model.trim="couponCode.$model"
              :debounceTime="100"
              @change="handleInputChangeOnInputCode"
            ></ui-input>
          </ui-field>
          <ui-field :label="$t('form_comment')" :validation="validationComment">
            <ui-textarea
              :placeholder="$t('form_comment')"
              :isResizable="false"
              :rows="4"
              :maxLength="140"
              v-model.trim="validationComment.$model"
            ></ui-textarea>
          </ui-field>
          <div class="flex flex-col gap-2 text-white py-2">
            <ui-field
              :validation="validationPrivacyPolicy"
              :displayBackgroundOnError="true"
            >
              <ui-checkbox
                v-model="validationPrivacyPolicy.$model"
                size="large"
              >
                <span class="relative -top-1 text-justify">
                  {{ $t("form_checkbox_1_prefix") }}
                  <nuxt-link
                    :to="localePath('/legal/privacy')"
                    class="underline"
                  >
                    {{ $t("form_checkbox_1_span") }}
                  </nuxt-link>
                  {{ $t("form_checkbox_1_suffix") }}
                  <span
                    class="inline-flex cursor-pointer"
                    @click="showLegalModal = true"
                  >
                    <info-icon class="h-3 w-3 fill-white"></info-icon>
                  </span>
                </span>
              </ui-checkbox>
            </ui-field>
            <ui-field>
              <ui-checkbox
                v-model="commercialInformationPermission"
                size="large"
              >
                <span class="relative -top-1 text-justify">
                  {{ $t("form_checkbox_2_prefix") }}
                  <nuxt-link
                    :to="localePath('/legal/privacy')"
                    class="underline"
                    >{{ $t("form_checkbox_2_span") }}</nuxt-link
                  >
                  <span
                    class="inline-flex cursor-pointer"
                    @click="showLegalModal = true"
                  >
                    <info-icon class="h-3 w-3 fill-white"></info-icon>
                  </span>
                </span>
              </ui-checkbox>
            </ui-field>
          </div>
          <div class="w-fit mobile:w-full">
            <ui-button
              :loading="loading"
              type="white"
              @click.prevent="handleFormSubmission"
              >{{ $t("form_cta") }}</ui-button
            >
          </div>
        </form>

        <!-- Legal modal -->
        <ui-legal-modal
          v-if="showLegalModal"
          @close="showLegalModal = false"
        ></ui-legal-modal>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
import ensureMode from "@/helpers/ensureMode";
import { validatePhoneNumber } from "@/utils/validations";
import localesMetadata from "@/mixins/localesMetadata";
import validationEmailMixin from "@/mixins/validationEmail";
import {
  retrieveGclid,
  retrievePartnershipReferrer,
} from "@/utils/queryStrings";
import { validationMixin } from "vuelidate";

export default {
  name: "formSection",
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-textarea": async () => await import("@/components/uiTextArea.vue"),
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-checkbox": async () => await import("@/components/uiCheckBox.vue"),
    "info-icon": async () => await import("@/components/icons/InfoIcon.vue"),
    "ui-legal-modal": async () =>
      await import("@/components/legal/uiLegalModal.vue"),
  },
  validations: {
    email: { email, required },
    firstName: { required },
    lastName: { required },
    phone: { required, validatePhoneNumber },
    comment: {},
    privacyPolicyPermission: { sameAs: sameAs(() => true) },
  },
  props: {
    femalePerson: {
      type: Boolean,
      default: false,
    },
    displayInputCode: {
      type: String,
      default: null,
    },
  },
  computed: {
    validationEmail() {
      return ensureMode("client", this.$v, "email");
    },
    validationFirstName() {
      return ensureMode("client", this.$v, "firstName");
    },
    validationLastName() {
      return ensureMode("client", this.$v, "lastName");
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
  },
  mixins: [localesMetadata, validationMixin, validationEmailMixin],
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      comment: "",
      couponCode: {
        $model: null,
        validations: {
          $dirty: false,
          $invalid: true,
          $params: {},
        },
      },
      privacyPolicyPermission: false,
      commercialInformationPermission: false,
      showLegalModal: false,
      loading: false,
      deliverableError: false,
    };
  },
  methods: {
    async handleCouponCodeVerification() {
      if (!this.displayInputCode || !this.couponCode.$model) {
        return;
      }

      try {
        await this.$api.$post(
          "/api/validate-coupon",
          {
            code: this.couponCode.$model,
            email: this.email,
            phone: this.phone,
          },
          {
            params: {
              promotion: this.displayInputCode,
            },
          }
        );
      } catch (error) {
        const errorType = error.response.data.message;
        this.couponCode.validations.$params[errorType] = true;
        this.couponCode.validations.$dirty = true;

        // Propagate the error to invoker
        throw new Error(error);
      }
    },
    /**
     * Submit the form
     */
    async handleFormSubmission() {
      this.$v.$touch();
      this.loading = true;

      // Get hubspot cookie if any
      const hubspotcookie = document.cookie.replace(
        /(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      try {
        if (!this.$v.$invalid) {
          await this.$checkDeliverability(this.email);

          if (!this.deliverableError) {
            await this.handleCouponCodeVerification();
            await this.$api.$post("/api/submit", {
              email: this.email,
              firstName: this.firstName,
              lastName: this.lastName,
              comment: this.comment,
              phone: this.phone,
              hsutk: hubspotcookie,
              pageUri: window.location.href,
              pageName: this.$route.meta.pageName,
              pipeline: this.localeMetadata.country.toUpperCase(),
              gclid: retrieveGclid(), // Although has this name, is a convention for legacy data. It should return the full url parameters
              allowCommercialNotifications:
                this.commercialInformationPermission,
              code: this.couponCode.$model,
              partnershipCode: retrievePartnershipReferrer(),
              livensaPromo:
                this.$route.meta.pageName === "livensaPage"
                  ? this.$route.params.page
                  : null,
              ciudadelaPromo: this.$route.meta.pageName === "ciudadelaPage",
              cbrePromo: this.$route.meta.pageName === "c200Page",
              studentsPromo: this.$route.meta.pageName === "studentsPage",
              resaPromo:
                this.$route.meta.pageName === "resaPage"
                  ? this.$route.params.page
                  : null,
              businessLead: this.$route.meta.pageName === "logisticsPage",
            });

            // On success, go to success page
            this.$store.dispatch(`confirmationResume/SET_ALLOWED_ACCESS`, true);
            this.$router.push({ path: this.localePath("/resume") });
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
     * Custom code to reset input code when is empty
     */
    handleInputChangeOnInputCode() {
      this.couponCode.validations.$params = {};
      this.couponCode.validations.$dirty = false;
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
.form-subheading {
  @apply font-manrope font-normal text-dark text-[14px] leading-[20px] uppercase;
}

:deep(.checkbox-class) {
  @apply items-start;
}
</style>
<i18n lang="yaml" locale="es">
form_main_title: "TE CONTESTAMOS DE INMEDIATO"
form_subtitle: "Pide tu presupuesto"
form_name: "Nombre"
form_lastname: "Apellidos"
form_phone: "Teléfono"
form_email: "Correo electrónico"
form_coupon: "Código promocional"
form_comment: "Comentario"
form_checkbox_1_prefix: 'Al pulsar en "Enviar solicitud" aceptas nuestra'
form_checkbox_1_span: "política de privacidad"
form_checkbox_1_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_checkbox_2_prefix: "Acepto recibir comunicaciones comerciales de Box2box conforme a lo dispuesto en nuestra"
form_checkbox_2_span: "política de privacidad"
form_cta: "Enviar solicitud"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_email:
  required: "Correo electrónico requerido"
  email: "Correo electrónico inválido"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
error_coupon:
  invalidCode: "Cupón no válido"
  codeUsed: "Cupón ya canjeado"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>
<i18n lang="yaml" locale="fr">
form_main_title: "NOUS VOUS CONTACTONS IMMÉDIATEMENT"
form_subtitle: "Demandez votre devis"
form_name: "Nom"
form_lastname: "Nom de famille"
form_phone: "Téléphone"
form_email: "E-mail"
form_coupon: "Code promo"
form_comment: "Commentaires"
form_checkbox_1_prefix: 'En cliquant sur "Envoyer", vous acceptez notre'
form_checkbox_1_span: "politique de confidentialité"
form_checkbox_1_suffix: "pour traiter vos données dans le but de répondre à votre question"
form_checkbox_2_prefix: "J'accepte de recevoir des communications commerciales de la part de Box2box conformément aux dispositions de notre"
form_checkbox_2_span: "politique de confidentialité"
form_cta: "Envoyer"
error_first_name:
  required: "Nome requis"
error_last_name:
  required: "Nom de famille requis"
error_email:
  required: "Adresse électronique requise"
  email: "Adresse électronique non valide"
error_phone:
  validatePhoneNumber: "Téléphone non valide"
error_coupon:
  invalidCode: "Coupon non valable"
  codeUsed: "Coupon déjà utilisé"
generic_error: "Erreur de validation du formulaire. Veuillez réessayer plus tard"
</i18n>
<i18n lang="yaml" locale="it">
form_main_title: "TI RISPONDEREMO IMMEDIATAMENTE"
form_subtitle: "Richiedi un preventivo "
form_name: "Nome"
form_lastname: "Cognome"
form_phone: "Telefono"
form_email: "E-mail"
form_coupon: "Codice promozionale"
form_comment: "Commento"
form_checkbox_1_prefix: "Cliccando su 'Richiedi un preventivo' accetti la nostra"
form_checkbox_1_span: "informativa sulla privacy"
form_checkbox_1_suffix: "per gestire i tuoi dati con lo scopo di processare le tue richieste o domande"
form_checkbox_2_prefix: "Accetto di ricevere informazioni commerciali da box2box conformi alla nostra "
form_checkbox_2_span: "informativa sulla privacy"
form_cta: "Richiedi un preventivo "
error_first_name:
  required: "Il Nome é obbligatiorio"
error_last_name:
  required: "Il Cognome é obbligatorio"
error_email:
  required: "La E-mail é obbligatoria"
  email: "La E-mail non é valida"
error_phone:
  validatePhoneNumber: "Il Telefono non é valido"
error_coupon:
  invalidCode: "Coupon non valido"
  codeUsed: "Coupon già utilizzato"
generic_error: "Si é verificato un errore durante l'invio. Riprova più tardi "
</i18n>
<i18n lang="yaml" locale="pt">
form_main_title: "RESPONDEMOS IMEDIATAMETNE"
form_subtitle: "Solicite um orçamento"
form_name: "Nome"
form_lastname: "Apelido"
form_phone: "Telefone"
form_email: "E-mail"
form_coupon: "Código promocional"
form_comment: "Comentário"
form_checkbox_1_prefix: 'Ao clicar em "Enviar pedido" está a concordar com a nossa'
form_checkbox_1_span: "política de privacidade"
form_checkbox_1_suffix: "para tratar os seus dados com o objectivo de responder à sua consulta ou pedido"
form_checkbox_2_prefix: "Concordo em receber comunicações comerciais da Box2box de acordo com as disposições da nossa"
form_checkbox_2_span: "política de privacidade"
form_cta: "Enviar pedido"
error_first_name:
  required: "Nome requerido"
error_last_name:
  required: "Apelidos requeridos"
error_email:
  required: "E-mail requerido"
  email: "E-mail inválido"
error_phone:
  validatePhoneNumber: "Telefone requerido"
error_coupon:
  invalidCode: "Voucher inválido"
  codeUsed: "Voucher utilizado"
generic_error: "Erro ao submeter o formulário. Por favor tente novamente mais tarde"
</i18n>
<i18n lang="yaml" locale="mx">
form_main_title: "TE CONTESTAMOS DE INMEDIATO"
form_subtitle: "Pide tu presupuesto"
form_name: "Nombre"
form_lastname: "Apellidos"
form_phone: "Teléfono"
form_email: "Correo electrónico"
form_coupon: "Código promocional"
form_comment: "Comentario"
form_checkbox_1_prefix: 'Al pulsar en "Enviar solicitud" aceptas nuestra'
form_checkbox_1_span: "política de privacidad"
form_checkbox_1_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_checkbox_2_prefix: "Acepto recibir comunicaciones comerciales de Box2box conforme a lo dispuesto en nuestra"
form_checkbox_2_span: "política de privacidad"
form_cta: "Enviar solicitud"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_email:
  required: "Correo electrónico requerido"
  email: "Correo electrónico inválido"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
error_coupon:
  invalidCode: "Cupón no válido"
  codeUsed: "Cupón ya canjeado"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/formSection.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/formSection.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/formSection.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/formSection.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/formSection.yaml"></i18n>
