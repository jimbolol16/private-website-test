<template>
  <div class="flex h-full m-auto left-0 right-0 top-0">
    <div
      class="fixed z-50 w-full bg-[rgba(255,255,255,0.9)] left-0 top-0 m-auto h-full backdrop-blur-sm flex mobile:items-end items-center mobile:justify-center justify-center"
    >
      <!-- Modal area -->
      <div
        class="mobile:shadow-modal min-w-[552px] max-w-[704px] mobile:w-full mobile:bottom-0 mobile:max-h-[472px] rounded-xl bg-white border-[1px] overflow-y-auto"
        v-click-outside="handleClickOut"
      >
        <!-- Close button -->
        <div class="relative w-full">
          <div class="absolute w-full">
            <div
              class="inline-flex w-full mobile:justify-center justify-end pt-4 mobile:px-[164px] pr-4"
            >
              <nuxt-img
                :provider="$config.img_provider"
                class="hidden mobile:flex"
                src="/modalline.svg"
                alt="modalline"
              />
              <nuxt-img
                :provider="$config.img_provider"
                src="/calculator/close-button.svg"
                alt="closebutton"
                class="cursor-pointer mobile:hidden"
                @click="handleClick"
              />
            </div>
          </div>
        </div>

        <div
          class="flex flex-col pt-10 px-6 mobile:px-[80px] pb-12 w-full justify-center items-center mobile:text-center"
        >
          <!-- Title area -->
          <h3 class="font-extrabold">{{ title }}</h3>
          <div
            class="text-dark/70 px-6 py-10 font-normal text-lg min-h-20 leading-[27px] text-center"
          >
            <slot name="text"></slot>
          </div>

          <!-- Dynamic section -->
          <div>
            <ui-button class="w-auto" v-if="button" @click="buttonClick">
              {{ buttonName }}
            </ui-button>
          </div>
          <a
            v-if="secondOption & button"
            @click="textClick"
            class="stroke-electric text-electric mt-4 text-base leading-[29px] cursor-pointer justify-center flex flex-row items-center"
          >
            {{ secondOptionText }}
            <arrow-icon class="z-50 h-[8.5px] w-[11.5px] ml-2.5"></arrow-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import { theme } from "@/tailwind.config.js";

export default {
  name: "uiGenericModal",
  directives: {
    ClickOutside,
  },
  components: {
    "arrow-icon": async () => await import("@/components/icons/ArrowIcon.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    button: {
      type: Boolean,
      default: false,
    },
    secondOption: {
      type: Boolean,
      default: false,
    },
    buttonName: {
      type: String,
      default: null,
    },
    secondOptionText: {
      type: String,
      default: null,
    },
    disableScroll: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (this.disableScroll) {
      this.setOverflow("hidden");
    }
  },
  methods: {
    buttonClick(event) {
      this.$emit("buttonClick", event);
    },
    textClick(event) {
      this.$emit("textClick", event);
    },
    setOverflow(mode) {
      document.documentElement.style.overflow = mode;
    },
    handleClick(event) {
      this.$emit("close", event);
      // Restore the overflow
      this.setOverflow("auto");
    },

    handleClickOut(event) {
      if (window.innerWidth < theme.screens.mobile.max.split("px")[0]) {
        this.handleClick(event);
      }
    },
  },
  /**
   * Before destroying this component, restore the overflow on the document
   */
  beforeDestroy() {
    this.setOverflow("auto");
  },
};
</script>
