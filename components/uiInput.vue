<template>
  <div
    class="flex flex-row w-full relative bg-white rounded-[12px] shadow-input"
  >
    <ui-popup-base-menu
      v-if="type === 'tel'"
      ref="popupMenu"
      :countrySelector="true"
    >
      <template v-slot:selected="{ openedMenu }">
        <div
          class="flex flex-row items-center desktopL:px-6 desktop:px-6 tablet:px-6 mobileL:px-6 mobile:px-4"
          :class="[openedMenu ? 'rounded bg-[rgba(255,255,255,0.1)]' : '']"
        >
          <ui-language
            :phoneSelector="true"
            :viewName="true"
            :countryData="selectedCountry"
            :hidePhonePrefix="hidePhonePrefix"
            :localeConfiguration="localeMetadata"
            class="w-max py-2"
          ></ui-language>

          <chevron-icon
            class="fill-electric/50 w-4 h-4 ml-2"
            :class="[openedMenu ? 'rotate-180' : '']"
          ></chevron-icon>
        </div>
      </template>

      <template slot="list">
        <ui-country-code-selector :data="countryCodes" @change="onPrefixChange">
        </ui-country-code-selector>
      </template>
    </ui-popup-base-menu>

    <input
      class="required:is-required h-[56px] peer w-full placeholder-text font-medium text-electric text-[18px] leading-[25px] focus:outline-none focus:border-[1px] border-electric-input disabled:bg-electric-input-disabled"
      :class="[
        value
          ? 'pt-[23px] pb-[8px] placeholder:opacity-0 transition-all duration-75'
          : '',
        onlyRightRadius ? 'rounded-r-[12px]' : 'rounded-[12px]',
        displayCTAButton
          ? 'with-button px-[24px] mobile:px-[12px]'
          : 'px-[24px]',
      ]"
      ref="input"
      :value="localValue"
      :id="$parent.id"
      :type="type"
      :autocomplete="autocomplete"
      :placeholder="`${placeholder} ${$parent.isRequired ? '*' : ''}`"
      :disabled="disabled"
      v-debounce="debounceTime"
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @change="onChange"
    />
    <!-- Inherit from parent component the label generation -->
    <label
      :for="$parent.id"
      class="absolute text-electric-input transition-all duration-200 peer-focus:ml-[1px]"
      :class="[
        value
          ? 'font-medium text-[12px] leading-[14px] pt-[8px]'
          : 'opacity-0 -z-10 my-4 ',
        type === 'tel' ? 'translate-x-[151px]' : 'translate-x-6',
      ]"
      >{{ $parent.label }}
      <span :class="[$parent.isRequired ? 'inline-block' : 'hidden']"
        >*</span
      ></label
    >
    <span
      v-if="localValue && clearButton"
      class="peer-focus-within:block hidden absolute right-6 top-4 bottom-4 cursor-pointer input-clear-button"
      @mousedown.prevent
      @click.stop="clearInput()"
    >
      <x-icon class="stroke-black"></x-icon>
    </span>

    <ui-button
      v-if="displayCTAButton"
      :arrow="true"
      :rounded="true"
      :loading="loadingCTAButton"
      type="pink"
      size="small"
      class="h-12"
      color="white-content"
      @click="$emit('click')"
    >
      {{ $t("input_button_text") }}
    </ui-button>

    <span
      class="absolute right-6 top-4 bottom-4 peer-focus-within:hidden input-label-error-container"
    >
      <exclamation-error-icon
        class="input-label-error hidden w-6 h-6"
      ></exclamation-error-icon>
    </span>
  </div>
</template>

<script>
import allCountries from "@/utils/phoneCountryCodes";
import debounce from "@/directives/debounce";
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "uiInput",
  inheritAttrs: false,
  directives: {
    debounce,
  },
  components: {
    "x-icon": async () => await import("@/components/icons/XIcon.vue"),
    "exclamation-error-icon": async () =>
      await import("@/components/icons/ExclamationErrorIcon.vue"),
    "ui-popup-base-menu": async () =>
      await import("@/components/uiPopupMenu/uiPopupBaseMenu.vue"),
    "ui-language": async () =>
      await import("@/components/header/uiLanguage.vue"),
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "ui-country-code-selector": async () =>
      await import("@/components/uiPopupMenu/uiCountryCodeSelector.vue"),
  },
  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    type: {
      type: String,
      validator: (value) => ["text", "number", "email", "tel"].includes(value),
      default: "text",
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearButton: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    onlyRightRadius: {
      type: Boolean,
      default: false,
    },
    debounceTime: {
      type: Number,
      default: null,
    },
    hidePhonePrefix: {
      type: Boolean,
      default: false,
    },
    displayCTAButton: {
      type: Boolean,
      default: false,
    },
    loadingCTAButton: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [localesMetadata],
  data() {
    return {
      focusLost: false,
      openedMenu: true,
      countryCodes: allCountries,
      selectedCountry: allCountries.find(
        (element) =>
          element[1] ===
          this.$i18n.locales.find((i) => i.code === this.$i18n.locale).country
      ),
      inputMetadata: {
        raw: "",
        parsed: "",
      },
    };
  },
  computed: {
    localValue: {
      get() {
        return this.inputMetadata.raw || this.value;
      },
      set(value) {
        this.inputMetadata.raw = value;
        this.inputMetadata.parsed = value;

        // On 'tel' input type, add the selected country to validate it
        if (this.type === "tel" && value) {
          this.inputMetadata.parsed = `+${this.selectedCountry[2]}${value}`;
        }

        this.$emit("input", this.inputMetadata.parsed);
      },
    },
  },
  methods: {
    clearInput() {
      this.localValue = "";
      this.$nextTick(() => {
        this.$emit("change", this.localValue);
        this.$refs.input?.focus();
      });
    },
    onInput(event) {
      this.localValue = event.target.value;
    },
    onChange(event) {
      if (
        event.target &&
        this.debounceTime &&
        !this.focusLost &&
        !event.bubbles
      ) {
        this.localValue = event.target.value;
        this.$emit("change", this.inputMetadata.parsed);
      }
    },
    onPrefixChange(countryPrefix) {
      this.selectedCountry = countryPrefix;

      if (this.inputMetadata.raw) {
        this.localValue = this.inputMetadata.raw;
      }

      // Close the popup menu
      this.$refs.popupMenu.handleChange();
    },
    onFocus(event) {
      this.focusLost = false;
      this.$emit("focus", event.target.value);
    },
    onBlur(event) {
      this.focusLost = true;
      this.$emit("blur", event.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

:deep(input.with-button) {
  @apply focus:border-none rounded-none;
}
:deep(button) {
  @apply mobileL:w-auto mobile:w-auto;
}
</style>
<i18n lang="yaml" locale="es">
input_button_text: "Enviar"
</i18n>
<i18n lang="yaml" locale="fr">
input_button_text: "Envoyer"
</i18n>
<i18n lang="yaml" locale="it">
input_button_text: "Invia"
</i18n>
<i18n lang="yaml" locale="pt">
input_button_text: "Enviar"
</i18n>
<i18n lang="yaml" locale="mx">
input_button_text: "Enviar"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/components/uiInput.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/components/uiInput.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/components/uiInput.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/components/uiInput.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/components/uiInput.yaml"></i18n>
