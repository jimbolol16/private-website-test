<template>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-end w-full">
      <ui-field>
        <ui-checkbox size="large" v-model="isBusiness">
          {{ $t("form_is_company") }}
        </ui-checkbox>
      </ui-field>
    </div>
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
      <ui-field
        :label="$t('form_city')"
        :validation="validationCity"
        :messages="$t('error_city')"
      >
        <ui-input
          :placeholder="$t('form_city')"
          v-model.trim="validationCity.$model"
          :debounceTime="100"
          @change="handleInputChange($event, 'city')"
        ></ui-input>
      </ui-field>
      <ui-field
        :label="$t('form_state')"
        :validation="validationState"
        :messages="$t('error_state')"
      >
        <ui-input
          :placeholder="$t('form_state')"
          v-model.trim="validationState.$model"
          :debounceTime="100"
          @change="handleInputChange($event, 'state')"
          ref="stateInput"
          v-if="country.code !== 'ES'"
        ></ui-input>

        <ui-select
          class="w-full relative"
          size="large"
          :restrictedHeight="true"
          v-model.trim="validationState.$model"
          v-else
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
        :label="$t('form_country')"
        :validation="validationCountry"
        :messages="$t('error_country')"
      >
        <ui-select
          class="w-full relative"
          size="large"
          :restrictedHeight="true"
          v-model.trim="validationCountry.$model"
        >
          <template slot="selected">
            <ui-select-selected-item
              :selectedItem="country.name"
              :nonSelectedItem="$t('form_country')"
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
            v-for="(item, index) in countries"
            :key="index"
            :value="item"
            :selected="item.name === country"
          >
            <div
              class="flex flex-row w-max items-center gap-2 font-manrope text-[16px]"
            >
              {{ item.name }}
            </div>
          </ui-option>
        </ui-select>
      </ui-field>
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
    </form>
    <div class="justify-end flex mobile:w-full">
      <ui-button
        @click.prevent="handleFormSubmission"
        size="small"
        :arrow="true"
        >{{ $t("form_cta") }}
      </ui-button>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import ensureMode from "@/helpers/ensureMode";
import { validatePhoneNumber, validateZipCode } from "@/utils/validations";
import { validationMixin } from "vuelidate";
import spanishProvinces from "@/utils/spanishProvinces";

export default {
  name: "checkoutForm",
  props: {
    countries: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "ui-checkbox": async () => await import("@/components/uiCheckBox.vue"),
    "ui-select": async () => await import("@/components/uiSelect.vue"),
    "ui-option": async () => await import("@/components/uiOption.vue"),
    "ui-select-selected-item": async () =>
      await import("@/components/uiCitySelector/uiSelectSelectedItem.vue"),
    "exclamation-error-icon": async () =>
      await import("@/components/icons/ExclamationErrorIcon.vue"),
  },
  validations: {
    firstName: { required },
    lastName: { required },
    id: { required },
    address: { required },
    city: { required },
    state: { required },
    country: { required },
    zipCode: { required, validateZipCode },
    phone: { required, validatePhoneNumber },
  },
  data() {
    return {
      spanishProvinces: spanishProvinces,
    };
  },
  computed: {
    validationId() {
      return ensureMode("client", this.$v, "id");
    },
    validationFirstName() {
      return ensureMode("client", this.$v, "firstName");
    },
    validationLastName() {
      return ensureMode("client", this.$v, "lastName");
    },
    validationAddress() {
      return ensureMode("client", this.$v, "address");
    },
    validationCity() {
      return ensureMode("client", this.$v, "city");
    },
    validationState() {
      return ensureMode("client", this.$v, "state");
    },
    validationCountry() {
      return ensureMode("client", this.$v, "country");
    },
    validationZipCode() {
      return ensureMode("client", this.$v, "zipCode");
    },
    validationPhone() {
      return ensureMode("client", this.$v, "phone");
    },
    firstName: {
      get() {
        return this.$store.state.checkout.firstName;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_FIRST_NAME", value);
      },
    },
    lastName: {
      get() {
        return this.$store.state.checkout.lastName;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_LAST_NAME", value);
      },
    },
    id: {
      get() {
        return this.$store.state.checkout.id;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_ID", value);
      },
    },
    address: {
      get() {
        return this.$store.state.checkout.address;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_ADDRESS", value);
      },
    },
    city: {
      get() {
        return this.$store.state.checkout.city;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_CITY", value);
      },
    },
    state: {
      get() {
        return this.$store.state.checkout.state;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_STATE", value);
      },
    },
    country: {
      get() {
        return this.$store.state.checkout.country;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_COUNTRY", value);
      },
    },
    zipCode: {
      get() {
        return this.$store.state.checkout.zipCode;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_ZIP_CODE", value);
      },
    },
    phone: {
      get() {
        return this.$store.state.checkout.phone;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_PHONE", value);
      },
    },
    isBusiness: {
      get() {
        return this.$store.state.checkout.isBusiness;
      },
      set(value) {
        this.$store.dispatch("checkout/SET_IS_BUSINESS", value);
      },
    },
  },
  mixins: [validationMixin],
  methods: {
    /**
     * Reset vuelidate state when clearing the input
     */
    handleInputChange(value, variableName) {
      if (!value) {
        this.$v[variableName].$reset();
      }
    },
    handleFormSubmission() {
      this.$v.$touch();

      // Emit changes to parent component
      if (!this.$v.$invalid) {
        this.$emit("submit");
      }
    },
  },
  watch: {
    /**
     * Watch on country changes to reset state value and force the form validation
     */
    country: function (newValue, oldValue) {
      if (oldValue !== newValue && oldValue) {
        // Workaround to clear state input on country change
        this.$refs.stateInput?.clearInput();

        // Clear vuex state and $v as well
        this.state = "";
        this.$v.state.$reset();
      }
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
form_is_company: "Soy empresa"
form_name: "Nombre"
form_lastname: "Apellidos"
form_id: "DNI/CIF"
form_address: "Dirección"
form_city: "Ciudad"
form_state: "Provincia"
form_country: "País"
form_zip: "Código postal"
form_phone: "Teléfono"
form_cta: "Continuar hacia el pago"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_id:
  required: "Número de identificación requerido"
error_address:
  required: "Dirección requerida"
error_city:
  required: "Ciudad requerida"
error_state:
  required: "Provincia requerida"
error_country:
  required: "País requerido"
error_zip:
  required: "Código postal requerido"
  validateZipCode: "Código postal incorrecto"
error_phone:
  validatePhoneNumber: "Teléfono requerido"
</i18n>
<i18n lang="yaml" locale="fr">
form_is_company: "Je suis une société"
form_name: "Nom"
form_lastname: "Nom de famille"
form_id: "Carte d'identité"
form_address: "Adresse"
form_city: "Ville"
form_state: "Province"
form_country: "Pays"
form_zip: "Code postal"
form_phone: "Téléphone"
form_cta: "Continuer le paiement"
error_first_name:
  required: "Prénom requis"
error_last_name:
  required: "Nom de famille requis"
error_id:
  required: "Carte d'identité requis"
error_address:
  required: "Adresse requis"
error_city:
  required: "Ville requis"
error_state:
  required: "Province requis"
error_country:
  required: "Pays requis"
error_zip:
  required: "Code postal requis"
  validateZipCode: "Code postal erroné"
error_phone:
  validatePhoneNumber: "Téléphone requis"
</i18n>
<i18n lang="yaml" locale="it">
form_is_company: "Sono una società"
form_name: "Nome"
form_lastname: "Cognome"
form_id: "Carta d'identità"
form_address: "Indirizzo"
form_city: "Città"
form_state: "Provincia"
form_country: "Paese"
form_zip: "Codice postale"
form_phone: "Telefono"
form_cta: "Continuare il pagamento"
error_first_name:
  equired: "Il Nome é obbligatiorio"
error_last_name:
  required: "Il Cognome é obbligatorio"
error_id:
  required: "Carta d'identità é obbligatorio"
error_address:
  required: "Indirizzo é obbligatorio"
error_city:
  required: "Città é obbligatoria"
error_state:
  required: "Provincia é obbligatoria"
error_country:
  required: "Paese é obbligatorio"
error_zip:
  required: "Codice postale é obbligatorio"
  validateZipCode: "Codice postale errato"
error_phone:
  validatePhoneNumber: "Telefono é obbligatorio"
</i18n>
<i18n lang="yaml" locale="pt">
form_is_company: "Sou uma empresa"
form_name: "Nome"
form_lastname: "Apelido"
form_id: "Número de contribuinte"
form_address: "Endereço"
form_city: "Cidade"
form_state: "Província"
form_country: "País"
form_zip: "Código postal"
form_phone: "Telefone"
form_cta: "Continuar a pagar"
error_first_name:
  required: "Nome requerido"
error_last_name:
  required: "Apelidos requeridos"
error_id:
  required: "Número de contribuinte requerido"
error_address:
  required: "Endereço requerido"
error_city:
  required: "Cidade requerida"
error_state:
  required: "Provincia requerida"
error_country:
  required: "País requerido"
error_zip:
  required: "Código postal requerido"
  validateZipCode: "Código postal incorrecto"
error_phone:
  validatePhoneNumber: "Telefone requerido"
</i18n>
<i18n lang="yaml" locale="mx">
form_is_company: "Soy empresa"
form_name: "Nombre"
form_lastname: "Apellidos"
form_id: "INE/RFC"
form_address: "Dirección"
form_city: "Ciudad"
form_state: "Provincia"
form_country: "País"
form_zip: "Código postal"
form_phone: "Teléfono"
form_cta: "Continuar hacia el pago"
error_first_name:
  required: "Nombre requerido"
error_last_name:
  required: "Apellidos requeridos"
error_id:
  required: "Número de identificación requerido"
error_address:
  required: "Dirección requerida"
error_city:
  required: "Ciudad requerida"
error_state:
  required: "Provincia requerida"
error_country:
  required: "País requerido"
error_zip:
  required: "Código postal requerido"
  validateZipCode: "Código postal incorrecto"
error_phone:
  validatePhoneNumber: "Teléfono requerido"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/checkout/form.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/checkout/form.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/checkout/form.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/checkout/form.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/checkout/form.yaml"
></i18n>
