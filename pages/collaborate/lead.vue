<template>
  <div>
    <transition name="fade">
      <client-only>
        <section
          class="grid-layout my-24 space-y-12"
          id="leadPromoPage"
          v-show="areFullLoaded"
        >
          <div
            class="row-start-1 col-start-1 col-span-full flex flex-col w-full justify-center"
          >
            <h2>{{ $t("form_title") }}</h2>
            <p class="p2">
              {{ $t("form_subtitle") }}
            </p>
          </div>

          <div
            class="row-start-2 col-start-4 col-span-6 mobileL:col-start-2 mobileL:col-span-6 mobile:col-start-1 mobile:col-span-full flex flex-col space-y-4"
          >
            <form class="flex flex-col gap-4">
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
                :label="$t('form_phone')"
                :validation="validationPhone"
                :messages="$t('error_phone')"
              >
                <ui-input
                  :placeholder="$t('form_phone')"
                  type="tel"
                  v-model.trim="validationPhone.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'phone')"
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
                  :debounceTime="100"
                  @change="handleInputChange($event, 'email')"
                ></ui-input>
              </ui-field>
              <ui-field
                :label="$t('form_comment')"
                :validation="validationComment"
              >
                <ui-textarea
                  :placeholder="$t('form_comment')"
                  :isResizable="false"
                  :rows="4"
                  :maxLength="140"
                  v-model.trim="validationComment.$model"
                ></ui-textarea>
              </ui-field>
              <div class="flex flex-col gap-2 py-2 justify-end w-full">
                <ui-field :validation="validationPrivacyPolicy">
                  <ui-checkbox
                    v-model="validationPrivacyPolicy.$model"
                    size="large"
                  >
                    <span class="relative text-justify">
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
                        <info-icon class="h-3 w-3 fill-dark"></info-icon>
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
                        <info-icon class="h-3 w-3 fill-dark"></info-icon>
                      </span>
                    </span>
                  </ui-checkbox>
                </ui-field>
              </div>
            </form>
            <div class="justify-start flex mobile:w-full pt-2">
              <ui-button
                @click.prevent="handleFormSubmission"
                :loading="loading"
                >{{ $t("form_cta") }}
              </ui-button>
            </div>
          </div>

          <!-- Legal modal -->
          <ui-legal-modal
            v-if="showLegalModal"
            @close="showLegalModal = false"
          ></ui-legal-modal>
        </section>
      </client-only>
    </transition>
  </div>
</template>
<script>
import { required, sameAs, email } from "vuelidate/lib/validators";
import { validatePhoneNumber } from "@/utils/validations";
import validationEmailMixin from "@/mixins/validationEmail";
import ensureMode from "@/helpers/ensureMode";
import { validationMixin } from "vuelidate";
import {
  retrieveGclid,
  retrievePartnershipReferrer,
} from "@/utils/queryStrings";
import localesMetadata from "@/mixins/localesMetadata";
import injectPartnershipCode from "@/mixins/injectPartnershipCode";

export default {
  name: "partnershipLeadPage",
  components: {
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-checkbox": async () => await import("@/components/uiCheckBox.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "ui-textarea": async () => await import("@/components/uiTextArea.vue"),
    "info-icon": async () => await import("@/components/icons/InfoIcon.vue"),
    "ui-legal-modal": async () =>
      await import("@/components/legal/uiLegalModal.vue"),
  },
  head() {
    return {
      title: this.$t("title"),
      meta: [
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow",
        },
      ],
    };
  },
  meta: {
    pageName: "partnershipLeadPage",
  },
  validations: {
    firstName: { required },
    lastName: { required },
    phone: { required, validatePhoneNumber },
    email: { email },
    comment: {},
    privacyPolicyPermission: { sameAs: sameAs(() => true) },
  },
  mounted() {
    this.areFullLoaded = true;
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      comment: "",
      privacyPolicyPermission: false,
      commercialInformationPermission: false,
      loading: false,
      showLegalModal: false,
      areFullLoaded: false,
    };
  },
  mixins: [
    localesMetadata,
    validationMixin,
    injectPartnershipCode,
    validationEmailMixin,
  ],
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
  methods: {
    /*
     * Reset vuelidate state when clearing the input
     */
    handleInputChange(value, variableName) {
      if (!value) {
        this.$v[variableName].$reset();
      }

      // Reset deliverableErrors
      this.$resetDeliverableError();
    },
    async handleFormSubmission() {
      this.$v.$touch();

      // Get hubspot cookie if any
      const hubspotcookie = document.cookie.replace(
        /(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      try {
        if (!this.$v.$invalid) {
          this.loading = true;

          // Validate the email only if has content
          if (this.email) {
            await this.$checkDeliverability(this.email);
            if (this.deliverableError) {
              return;
            }
          }
          await this.$api.$post("/api/submit", {
            email: this.email || this.phone,
            firstName: this.firstName,
            lastName: this.lastName,
            comment: this.comment,
            phone: this.phone,
            hsutk: hubspotcookie,
            pageUri: window.location.href,
            pageName: this.$route.meta.pageName,
            pipeline: this.localeMetadata.country.toUpperCase(),
            gclid: retrieveGclid(), // Although has this name, is a convention for legacy data. It should return the full url parameters
            allowCommercialNotifications: this.commercialInformationPermission,
            partnershipCode: retrievePartnershipReferrer(),
          });

          this.$toast({
            message: this.$t("form_submission"),
            type: "success",
            displayTime: 800,
          });

          // Finally, reset fields forcing page reload
          setTimeout(() => {
            window.location.reload(true);
          }, 1000);
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
title: "Colaboración con Lead • Box2box"
form_title: "Déjanos tus datos y te llamamos"
form_subtitle: " "
form_name: "Nombre"
form_lastname: "Apellidos"
form_phone: "Teléfono"
form_email: "Correo electrónico"
form_comment: "Comentario"
form_checkbox_1_prefix: 'Al pulsar en "Enviar solicitud" aceptas nuestra'
form_checkbox_1_span: "política de privacidad"
form_checkbox_1_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_checkbox_2_prefix: "Acepto recibir comunicaciones comerciales de Box2box conforme a lo dispuesto en nuestra"
form_checkbox_2_span: "política de privacidad"
form_cta: "Enviar solicitud"
form_submission: "Datos enviados con éxito"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
error_email:
  required: "Correo electrónico requerido"
  email: "Correo electrónico inválido"
</i18n>
