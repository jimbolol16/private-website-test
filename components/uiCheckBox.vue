<template>
  <div
    class="flex items-center align-middle gap-2 checkbox-error checkbox-class"
  >
    <input
      :id="id"
      ref="checkbox"
      :type="type"
      v-bind="$attrs"
      class="cursor-pointer absolute w-6 h-6 opacity-0"
      :checked="isChecked"
      :value="value"
      @change.stop="onChange"
    />
    <div class="w-6">
      <div
        class="bg-[#FFFFFF] w-6 h-6 rounded-[3px] border-[rgba(0,0,0,0.2)] border shadow-input p-[3px] m-auto checkbox-input"
      >
        <div class="flex items-center justify-center h-full">
          <span class="hidden pointer-events-none"></span>
        </div>
      </div>
    </div>
    <label
      :for="id"
      class="font-[500] leading-[25px] w-full checkbox-label align-middle"
      :class="{
        'text-[14px]': size === 'large',
        'text-[12px]': size === 'small',
      }"
    >
      <div
        class="inline-flex gap-x-1 items-center justify-center align-middle pr-1 mobile:leading-[18px]"
      >
        <slot></slot>
        <span class="inline-flex">
          <exclamation-error-icon
            class="w-6 h-6 hidden"
          ></exclamation-error-icon>
        </span>
      </div>
    </label>
  </div>
</template>
<script>
import ensureMode from "@/helpers/ensureMode";
import swallowEquality from "@/helpers/swallowEquality";

export default {
  name: "uiCheckbox",
  inheritAttrs: false,
  components: {
    "exclamation-error-icon": async () =>
      await import("@/components/icons/ExclamationErrorIcon.vue"),
  },
  props: {
    id: {
      type: String,
      default: () => `uiCheckbox-${Math.random().toString(36).slice(4)}`,
    },
    checked: {
      type: [String, Boolean, Object, Number, Array],
      default: false,
    },
    value: {
      type: [String, Boolean, Object, Number],
      default: null,
    },
    type: {
      type: [String, Object],
      validator: (value) => ["checkbox"].includes(value),
      default: "checkbox",
    },
    modelValue: {
      type: [String, Boolean, Object, Number, Array],
      default: null,
    },
    trueValue: {
      type: [String, Boolean, Number],
      default: true,
    },
    falseValue: {
      type: [String, Boolean, Number],
      default: false,
    },
    identityKey: {
      type: [String, Number],
      default: null,
    },
    size: {
      type: String,
      validator: (value) => ["large", "small"].includes(value),
      default: "large",
    },
  },
  model: {
    prop: "modelValue",
    event: "change",
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.some((obj) => {
          return ensureMode(
            "client",
            swallowEquality,
            obj,
            this.value,
            this.identityKey
          );
        });
      }

      /*eslint-disable no-prototype-builtins */
      if (this.$options.propsData.hasOwnProperty("value")) {
        return ensureMode(
          "client",
          swallowEquality,
          this.modelValue,
          this.value,
          this.identityKey
        );
      }

      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    onChange(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(
            newValue.findIndex((obj) =>
              swallowEquality(obj, this.value, this.identityKey)
            ),
            1
          );
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
input:checked + div div span {
  @apply w-[18px] h-[18px] bg-electric rounded-[3px] flex-none block;
}
</style>
