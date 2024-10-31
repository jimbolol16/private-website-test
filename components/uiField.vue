<template>
  <div
    class="uiField flex flex-wrap justify-start relative leading-[14px] items-center text-[12px] font-medium"
    :class="{
      'uiField--has-errors': hasErrors,
      'uiField--backgroundError': hasErrors && displayBackgroundOnError,
      'uiField--normalError': hasErrors && !displayBackgroundOnError,
    }"
  >
    <slot></slot>
    <div
      v-if="hasErrors && displayErrors"
      class="mt-1 font-medium text-[12px] leading-[14px] font-roboto"
      :class="[displayBackgroundOnError ? 'backgroundError' : 'normalError']"
    >
      <span v-if="errors && !validation.$invalid">
        {{ errors }}
      </span>
      <span
        :class="[displayBackgroundOnError ? 'text-white' : '']"
        :key="index"
        v-for="(item, index) in validationKeys"
      >
        <span class="flex-col flex font-extrabold" v-if="!validation[item]">
          {{ messages[item] }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "uiField",
  props: {
    id: {
      type: String,
      default: () => `uiField-${Math.random().toString(36).slice(4)}`,
    },
    label: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: String,
      default: null,
    },
    validation: {
      type: [Object],
      default: () => {},
    },
    messages: {
      type: [Object, String],
      default: "",
    },
    displayBackgroundOnError: {
      type: Boolean,
      default: false,
    },
    displayErrors: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    /**
     * Check if field is required
     */
    isRequired() {
      const isRequiredIf =
        this.validation &&
        this.validation.$params?.required &&
        this.validation.$params.required.type === "requiredIf";

      return (
        this.required ||
        (isRequiredIf
          ? this.validation && !this.validation.required
          : this.validation && this.validation.$params?.required)
      );
    },
    hasErrors() {
      return (
        this.errors ||
        (this.validation && this.validation.$dirty && this.validation.$invalid)
      );
    },
    validationKeys() {
      return Object.keys(this.validation.$params);
    },
  },
};
</script>

<style lang="scss" scoped>
.uiField {
  &--has-errors {
    label,
    :deep(label:not(.checkbox-label)) {
      @apply text-red-light;
    }

    :deep(input),
    :deep(textarea),
    :deep(.checkbox-input),
    :deep(.field-error),
    :deep(.select) {
      @apply border-red border-[1px] placeholder:text-red-light text-red;

      .placeholder {
        @apply text-red-light;
      }
    }

    :deep(.checkbox-label) {
      @apply fill-white;

      svg {
        @apply block;
      }
    }

    :deep(.input-label-error) {
      @apply fill-red block;
    }
  }
  &--backgroundError {
    :deep(.checkbox-error) {
      @apply bg-red text-white fill-white;
    }
  }
  &--normalError {
    :deep(.checkbox-label) {
      @apply fill-dark;

      svg {
        @apply block;
      }
    }
  }
  .backgroundError {
    @apply bg-red px-1 text-white;
  }
  .normalError {
    @apply bg-transparent text-red;
  }
}
</style>
