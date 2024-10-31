<template>
  <div class="flex flex-col w-full relative bg-white rounded-[12px]">
    <textarea
      class="whitespace-pre-wrap peer w-full rounded-[12px] shadow-input placeholder-text px-[24px] font-medium text-electric text-[18px] leading-[25px] py-[10px] focus:outline-none focus:border-[1px] border-electric-input disabled:bg-electric-input-disabled"
      :class="[
        { 'resize-none': !isResizable },
        value
          ? 'pt-[23px] placeholder:opacity-0 transition-all duration-75'
          : '',
      ]"
      ref="textarea"
      :id="$parent.id"
      :cols="cols"
      :rows="rows"
      :maxlength="maxLength"
      :value="localValue"
      :placeholder="`${placeholder} ${$parent.isRequired ? '*' : ''}`"
      :disabled="disabled"
      v-debounce="debounceTime"
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @change="onChange"
    ></textarea>
    <label
      :for="$parent.id"
      class="absolute px-[24px] text-electric-input transition-all duration-200 peer-focus:ml-[1px]"
      :class="
        value
          ? 'font-medium text-[12px] leading-[14px] pt-[8px]'
          : 'opacity-0 -z-10 my-[15.5px] h-full'
      "
      >{{ $parent.label }}
      <span :class="[$parent.isRequired ? 'inline-block' : 'hidden']"
        >*</span
      ></label
    >
    <span
      v-if="localValue && clearButton"
      class="peer-focus-within:block hidden absolute right-[24px] top-[16px] bottom-[16px] cursor-pointer"
      @mousedown.prevent
      @click.stop="clearInput()"
    >
      <x-icon class="stroke-black"></x-icon>
    </span>
  </div>
</template>

<script>
import debounce from "@/directives/debounce";

export default {
  name: "uiTextArea",
  directives: {
    debounce,
  },
  components: {
    "x-icon": async () => await import("@/components/icons/XIcon.vue"),
  },
  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    debounceTime: {
      type: Number,
      default: null,
    },
    cols: {
      type: Number,
      default: 50,
    },
    rows: {
      type: Number,
      default: 5,
    },
    isResizable: {
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
    maxLength: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      focusLost: false,
    };
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    clearInput() {
      this.localValue = null;
      this.$emit("change", this.localValue);
      this.$nextTick(() => {
        this.$refs.textarea.focus();
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
        this.$emit("change", event.target.value);
      }
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
