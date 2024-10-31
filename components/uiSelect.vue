<template>
  <div
    class="focus:outline-none select-none"
    @keydown.enter="$emit('keydown')"
    tabindex="0"
  >
    <div
      class="select relative cursor-pointer rounded-[12px] font-medium text-[18px] leading-[25px] text-electric bg-white shadow-input w-full"
      @click="toggleDropdown()"
      v-click-outside="close"
    >
      <div
        class="relative w-full text-left focus:outline-none rounded-[12px]"
        :class="size === 'small' ? 'h-[48px]' : 'h-[56px]'"
      >
        <span class="pl-[24px] inline-flex items-center h-full">
          <slot name="selected">{{ value }}</slot>
        </span>
        <span
          class="pr-[12px] absolute inset-y-0 right-0 flex items-center pointer-events-none"
        >
          <chevron-icon
            class="h-5 w-5 fill-electric-input"
            :class="{ 'rotate-180': opened }"
            aria-hidden="true"
          ></chevron-icon>
        </span>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="transition-opacity duration-100 ease-in"
      >
        <div
          v-if="opened"
          class="absolute z-[60] mt-2 w-full bg-white shadow-input rounded-[12px] focus:outline-none font-medium text-[18px] leading-[25px] text-electric flex flex-col py-[16px]"
          :class="[
            { 'bottom-[56px]': dropdownPosition === 'top' && size === 'small' },
            { 'bottom-[64px]': dropdownPosition === 'top' && size === 'large' },
            { 'max-h-52 overflow-y-auto scrollbar': restrictedHeight },
          ]"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "uiSelect",
  directives: {
    ClickOutside,
  },
  components: {
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
  },
  props: {
    value: {
      default: null,
    },
    size: {
      type: String,
      values: () => ["large", "small"],
      required: true,
    },
    dropdownPosition: {
      type: String,
      values: () => ["top", "bottom"],
      default: "bottom",
    },
    restrictedHeight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      opened: false,
    };
  },
  created() {
    this.$on("clicked", (value) => {
      this.$emit("input", value);
    });
  },
  methods: {
    toggleDropdown() {
      this.opened = !this.opened;
      // Notify to parent if select is open or close
      this.$emit("opened", this.opened);
    },
    close() {
      if (this.opened) {
        this.opened = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.scrollbar::-webkit-scrollbar-track) {
  margin-block: 16px;
}
</style>
