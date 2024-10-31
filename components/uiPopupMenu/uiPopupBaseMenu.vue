<template>
  <div
    class="font-manrope font-medium text-[16px] leading-[22px] cursor-pointer z-50"
    :class="countrySelector ? ' flex justify-center items-center' : ''"
    v-click-outside="handleClose"
  >
    <div @click="handleChange" class="flex flex-col gap-1 items-center">
      <slot name="selected" :openedMenu="openedMenu"></slot>
    </div>

    <div
      :class="[
        countrySelector ? 'mt-14' : 'relative',
        popupCenter ? 'relative mobile:left-[60%]' : '',
      ]"
    >
      <transition
        enter-class="opacity-0"
        enter-active-class="transition-opacity duration-100 ease-in"
      >
        <div
          v-if="openedMenu"
          class="flex flex-col bg-white shadow-input mt-2 p-4 text-electric text-base font-medium rounded-xl leading-[25px] absolute gap-2"
          :class="[
            dropdownPosition === 'top' ? 'bottom-[44px]' : '',
            openedAt === 'right' ? 'right-0' : 'left-0',
            countrySelector ? 'w-full' : '',
          ]"
        >
          <slot name="list"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "uiPopupBaseMenu",
  props: {
    dropdownPosition: {
      type: String,
      values: () => ["top", "bottom"],
      default: "bottom",
    },
    openedAt: {
      type: String,
      values: () => ["left", "right"],
      default: "left",
    },
    countrySelector: {
      type: Boolean,
      default: false,
    },
    popupCenter: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      openedMenu: false,
    };
  },
  methods: {
    handleClose() {
      this.openedMenu = false;
    },
    handleChange() {
      this.openedMenu = !this.openedMenu;
    },
  },
};
</script>
