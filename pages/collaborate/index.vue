<template>
  <div>
    <transition name="fade">
      <client-only>
        <section
          class="grid-layout my-24 space-y-12"
          id="indexPromoPage"
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

          <!-- Form section 1 -->
          <div
            class="row-start-2 col-start-4 col-span-6 mobileL:col-start-2 mobileL:col-span-6 mobile:col-start-1 mobile:col-span-full flex flex-col space-y-4"
          >
            <h5>{{ $t("form_1_title") }}</h5>
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
                :label="$t('form_id')"
                :validation="validationId"
                :messages="$t('error_id')"
              >
                <ui-input
                  :placeholder="$t('form_id')"
                  v-model.trim="validationId.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'id')"
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
                id="email"
              >
                <ui-input
                  :placeholder="$t('form_email')"
                  v-model.trim="validationEmail.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'email')"
                ></ui-input>
              </ui-field>
            </form>
          </div>

          <!-- Form section 2 -->
          <div
            class="row-start-3 col-start-4 col-span-6 mobileL:col-start-2 mobileL:col-span-6 mobile:col-start-1 mobile:col-span-full flex flex-col space-y-4"
          >
            <h5>{{ $t("form_2_title") }}</h5>
            <div class="flex justify-end w-full">
              <ui-field>
                <ui-checkbox
                  size="large"
                  v-model.trim="isFreelance"
                  @change="isCompany = !isFreelance"
                >
                  {{ $t("form_is_freelance") }}
                </ui-checkbox>
              </ui-field>
              <ui-field>
                <ui-checkbox
                  size="large"
                  v-model.trim="isCompany"
                  @change="isFreelance = !isCompany"
                >
                  {{ $t("form_is_company") }}
                </ui-checkbox>
              </ui-field>
            </div>
            <form class="flex flex-col gap-4">
              <ui-field
                :label="$t('form_zip')"
                :validation="validationZipCode"
                :messages="$t('error_zip')"
              >
                <ui-input
                  :placeholder="$t('form_zip')"
                  v-model.trim="validationZipCode.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'zipCode')"
                ></ui-input>
              </ui-field>
              <ui-field
                :label="$t('form_state')"
                :validation="validationState"
                :messages="$t('error_state')"
              >
                <ui-select
                  class="w-full relative"
                  size="large"
                  :restrictedHeight="true"
                  v-model.trim="validationState.$model"
                >
                  <template slot="selected">
                    <ui-select-selected-item
                      :selectedItem="state"
                      :nonSelectedItem="$t('form_state')"
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
                    :showSelectedOption="false"
                    v-for="(item, index) in spanishProvinces"
                    :key="index"
                    :value="item"
                    :selected="item === state"
                    >{{ item }}
                  </ui-option>
                </ui-select>
              </ui-field>
              <ui-field
                :label="$t('form_trade_name')"
                :validation="validationTradeName"
                :messages="$t('error_trade_name')"
              >
                <ui-input
                  :placeholder="$t('form_trade_name')"
                  v-model.trim="validationTradeName.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'tradeName')"
                ></ui-input>
              </ui-field>
              <ui-field
                :label="$t('form_company_name')"
                :validation="validationCompanyName"
                :messages="$t('error_company_name')"
              >
                <ui-input
                  :placeholder="$t('form_company_name')"
                  v-model.trim="validationCompanyName.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'companyName')"
                ></ui-input>
              </ui-field>
              <ui-field
                :label="$t('form_company_id')"
                :validation="validationCompanyId"
                :messages="$t('error_company_id')"
              >
                <ui-input
                  :placeholder="$t('form_company_id')"
                  v-model.trim="validationCompanyId.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'companyId')"
                ></ui-input>
              </ui-field>
              <ui-field
                :label="$t('form_address')"
                :validation="validationAddress"
                :messages="$t('error_address')"
              >
                <ui-input
                  :placeholder="$t('form_address')"
                  v-model.trim="validationAddress.$model"
                  :debounceTime="100"
                  @change="handleInputChange($event, 'address')"
                ></ui-input>
              </ui-field>
              <ui-field :validation="validationPrivacyPolicy">
                <ui-checkbox
                  v-model="validationPrivacyPolicy.$model"
                  size="large"
                >
                  <div class="relative text-justify">
                    {{
                      $t("form_checkbox_1_prefix", { value: $t("form_cta") })
                    }}
                    <!-- <nuxt-link :to="localePath('/legal/privacy')" target="_blank">
                <span class="underline">{{ $t("form_checkbox_1_span") }}</span>
              </nuxt-link>
              {{ $t("form_checkbox_1_suffix") }} -->
                    <nuxt-link
                      :to="localePath('/legal/privacy')"
                      target="_blank"
                    >
                      <span class="underline">{{
                        $t("form_checkbox_1_span_2")
                      }}</span>
                    </nuxt-link>
                    {{ $t("form_checkbox_1_suffix_2") }}
                    <span
                      class="inline-flex cursor-pointer"
                      @click="showLegalModal = true"
                    >
                      <info-icon class="h-3 w-3 fill-dark"></info-icon>
                    </span>
                  </div>
                </ui-checkbox>
              </ui-field>
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
import {
  required,
  requiredIf,
  sameAs,
  email,
  maxLength,
  alphaNum,
  numeric,
} from "vuelidate/lib/validators";
import { validatePhoneNumber } from "@/utils/validations";
import ensureMode from "@/helpers/ensureMode";
import { validationMixin } from "vuelidate";
import spanishProvinces from "@/utils/spanishProvinces";

export default {
  name: "partnershipPage",
  components: {
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-checkbox": async () => await import("@/components/uiCheckBox.vue"),
    "ui-select": async () => await import("@/components/uiSelect.vue"),
    "ui-option": async () => await import("@/components/uiOption.vue"),
    "ui-select-selected-item": async () =>
      await import("@/components/uiCitySelector/uiSelectSelectedItem.vue"),
    "exclamation-error-icon": async () =>
      await import("@/components/icons/ExclamationErrorIcon.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
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
    pageName: "partnershipPage",
  },
  validations: {
    firstName: { required },
    lastName: { required },
    id: { required, alphaNum, maxLength: maxLength(9) },
    phone: { required, validatePhoneNumber },
    email: { required, email },
    tradeName: {
      required: requiredIf(function () {
        return this.isCompany;
      }),
    },
    companyName: {
      required: requiredIf(function () {
        return this.isCompany;
      }),
    },
    companyId: {
      required: requiredIf(function () {
        return this.isCompany;
      }),
      alphaNum,
      maxLength: maxLength(9),
    },
    address: {
      required: requiredIf(function () {
        return this.isCompany;
      }),
    },
    zipCode: { required, numeric },
    state: { required },
    privacyPolicyPermission: { sameAs: sameAs(() => true) },
  },
  mounted() {
    this.areFullLoaded = true;
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      id: "",
      phone: "",
      email: "",
      isCompany: true,
      isFreelance: false,
      tradeName: "",
      companyName: "",
      companyId: "",
      address: "",
      zipCode: "",
      state: "",
      privacyPolicyPermission: false,
      spanishProvinces: spanishProvinces,
      loading: false,
      showLegalModal: false,
      areFullLoaded: false,
    };
  },
  mixins: [validationMixin],
  computed: {
    validationFirstName() {
      return ensureMode("client", this.$v, "firstName");
    },
    validationLastName() {
      return ensureMode("client", this.$v, "lastName");
    },
    validationId() {
      return ensureMode("client", this.$v, "id");
    },
    validationPhone() {
      return ensureMode("client", this.$v, "phone");
    },
    validationEmail() {
      return ensureMode("client", this.$v, "email");
    },
    validationTradeName() {
      return ensureMode("client", this.$v, "tradeName");
    },
    validationCompanyName() {
      return ensureMode("client", this.$v, "companyName");
    },
    validationCompanyId() {
      return ensureMode("client", this.$v, "companyId");
    },
    validationAddress() {
      return ensureMode("client", this.$v, "address");
    },
    validationZipCode() {
      return ensureMode("client", this.$v, "zipCode");
    },
    validationState() {
      return ensureMode("client", this.$v, "state");
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
    },
    async handleFormSubmission() {
      this.$v.$touch();

      try {
        if (!this.$v.$invalid) {
          this.loading = true;

          await this.$api.$post("/api/submit", {
            firstName: this.firstName,
            lastName: this.lastName,
            collaboratorIdNumber: this.id,
            phone: this.phone,
            email: this.email,
            isCompany: this.isCompany,
            zipCode: this.zipCode,
            state: this.state,
            tradeName: this.tradeName,
            companyName: this.companyName,
            companyId: this.companyId,
            address: this.address,
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
title: "Acuerdo de colaboración • Box2box"
form_title: "Inscríbete como colaborador"
form_subtitle: "Introduce los datos para que podamos comenzar con la tramitación del partnership"
form_1_title: "Representante"
form_2_title: "Empresa"
form_name: "Nombre"
form_lastname: "Apellidos"
form_id: "DNI"
form_phone: "Teléfono"
form_email: "Correo electrónico"
form_trade_name: "Nombre comercial"
form_company_name: "Nombre de la empresa"
form_company_id: "CIF"
form_address: "Dirección fiscal"
form_zip: "Código postal"
form_state: "Provincia"
form_checkbox_1_prefix: 'Al pulsar en "{value}" aceptas nuestra'
form_checkbox_1_span: "términos y condiciones"
form_checkbox_1_suffix: "y la"
form_checkbox_1_span_2: "política de privacidad"
form_checkbox_1_suffix_2: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
form_is_company: "Empresa"
form_is_freelance: "Autónomo"
form_cta: "Inscribirse"
form_submission: "Colaborador inscrito con éxito"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_id:
  required: "DNI Requerido"
  alphaNum: "Sólo se admiten números y letras"
  maxLength: "Máximo 9 dígitos"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
error_email:
  required: "Correo electrónico requerido"
  email: "Formato inválido"
error_zip:
  required: "Código postal requerido"
  numeric: "Sólo se admiten números"
error_state:
  required: "Provincia requerida"
error_trade_name:
  required: "Nombre comercial requerido"
error_company_name:
  required: "Nombre de empresa requerido"
error_company_id:
  required: "CIF requerido"
  alphaNum: "Sólo se admiten números y letras"
  maxLength: "Máximo 9 dígitos"
error_address:
  required: "Dirección fiscal requerida"
</i18n>
