<template>
  <div
    class="flex w-full"
    :class="alignment === 'vertical' ? 'flex-col gap-6' : 'flex-row'"
  >
    <ui-field
      class="w-full"
      :label="$t('hea_placeholder')"
      :validation="validationCity"
      :displayBackgroundOnError="true"
      :displayErrors="displayErrorCaption"
      :messages="$t('error_city')"
    >
      <ui-select
        v-model="city"
        class="w-full relative"
        @input="onSelect"
        :size="size"
        :dropdownPosition="dropdownPosition"
        @click="handleClick"
        @keydown="enterClick"
      >
        <template slot="selected">
          <ui-select-selected-item
            :selectedItem="city ? $t(`cities.${city}`) : null"
            :nonSelectedItem="$t('hea_placeholder')"
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
          v-for="(currentCity, index) in cities"
          :key="index"
          :value="currentCity"
          :selected="currentCity === city"
        >
          {{ $t(`cities.${currentCity}`) }}</ui-option
        >
      </ui-select>
    </ui-field>

    <!-- Buttons section -->
    <div class="flex justify-end">
      <div class="w-fit flex flex-col gap-2" v-if="alignment === 'vertical'">
        <ui-button :arrow="true" :size="size" @click="handleClick">{{
          buttonText
        }}</ui-button>
        <p class="sub-heading-button mobile:hidden">
          {{ $t("select_button_text") }}
        </p>
      </div>

      <div class="w-fit z-20" v-else>
        <ui-button
          :arrow="true"
          :size="size"
          :rounded="true"
          @click="handleClick"
          >{{ buttonText }}</ui-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { cities } from "@/utils/cities";
import localesMetadata from "@/mixins/localesMetadata";
import { required } from "vuelidate/lib/validators";
import ensureMode from "@/helpers/ensureMode";
import { validationMixin } from "vuelidate";

export default {
  name: "uiCitySelector",
  components: {
    "ui-select": async () => await import("@/components/uiSelect.vue"),
    "ui-option": async () => await import("@/components/uiOption.vue"),
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-select-selected-item": async () =>
      await import("@/components/uiCitySelector/uiSelectSelectedItem.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "exclamation-error-icon": async () =>
      await import("@/components/icons/ExclamationErrorIcon.vue"),
  },
  props: {
    size: {
      type: String,
      values: () => ["large", "small"],
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    alignment: {
      type: String,
      values: () => ["horizontal", "vertical"],
      default: "horizontal",
    },
    dropdownPosition: {
      type: String,
      values: () => ["top", "bottom"],
      default: "bottom",
    },
    value: {
      type: [Object, String],
      default: null,
    },
    store: {
      type: String,
      default: "pricesWizard",
    },
    displayErrorCaption: {
      type: Boolean,
      default: true,
    },
  },
  mixins: [localesMetadata, validationMixin],
  validations: {
    city: { required },
  },
  computed: {
    cities() {
      return cities[this.localeMetadata.country];
    },
    city: {
      get() {
        if (this.store) {
          return this.$store.state[this.store].selectedCityOnLanding;
        }
        return "";
      },
      set(value) {
        this.$store.dispatch(`${this.store}/SET_CITY_ON_LANDING`, value);
      },
    },
    validationCity() {
      return ensureMode("client", this.$v, "city");
    },
  },
  methods: {
    onSelect() {
      this.$emit("select", this.city);
    },
    handleClick() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        // Before emitting the event, set the local city into selected city
        this.$store.dispatch(`${this.store}/SET_CITY`, this.city);
        this.$emit("click", this.city);
      }
    },
    enterClick() {
      if (this.alignment === "vertical") {
        this.handleClick();
      }
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
select_button_text: "O presiona ENTER"
hea_placeholder: "Elegir ciudad"
error_city:
  required: "Ciudad requerida"
</i18n>
<i18n lang="yaml" locale="fr">
select_button_text: "Ou appuyez sur ENTRÉE"
hea_placeholder: "Choisissez une ville"
error_city:
  required: "Ville requis"
</i18n>
<i18n lang="yaml" locale="it">
select_button_text: "O premi INVIO"
hea_placeholder: "Scegli la città"
error_city:
  required: "La città é obbligatoria"
</i18n>
<i18n lang="yaml" locale="pt">
select_button_text: "Ou prima ENTER"
hea_placeholder: "Escolher cidade"
error_city:
  required: "Cidade requerida"
</i18n>
<i18n lang="yaml" locale="mx">
select_button_text: "O presiona ENTER"
hea_placeholder: "Elegir ciudad"
error_city:
  required: "Ciudad requerida"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiCitySelector.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiCitySelector.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiCitySelector.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiCitySelector.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiCitySelector.yaml"
></i18n>
