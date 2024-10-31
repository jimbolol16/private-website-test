<template>
  <button
    :class="[
      type && !outline ? type : '',
      arrow && !loading && size === 'large'
        ? 'px-[42px] py-5 -tracking-[0.04em]'
        : size,
      loading && size === 'large' ? 'py-5 px-14' : '',
      loading && size === 'small' ? 'px-8 py-[18px]' : '',
      rounded && !outline && !loading ? 'rounded-xl' : 'rounded-[5px]',
      size === 'large' && !outline && !loading
        ? 'h-[56px] text-xl gap-x-2 leading-[16px]'
        : '',
      outline ? 'outline' : '',
    ]"
    class="disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed font-medium justify-center flex flex-row items-center mobile:w-full mobileL:w-full outline-none gap-1"
    @click.prevent="handleClick"
    :disabled="disabled || loading"
    v-bind="$attrs"
    :aria-disabled="disabled || loading"
  >
    <div v-if="outline">
      <plus-circle-icon class="stroke-electric h-4 w-4"></plus-circle-icon>
    </div>
    <div
      v-if="!loading"
      class="font-medium justify-center flex flex-row items-center outline-none gap-1"
      :class="color"
    >
      <slot></slot>
      <div v-if="arrow && !outline">
        <arrow-icon
          :class="[size === 'large' ? 'h-4 w-4' : 'h-[10px] w-[10px]']"
        ></arrow-icon>
      </div>
    </div>
    <load-icon v-else class="animate-spin"></load-icon>
  </button>
</template>

<script>
export default {
  name: "uiButton",
  components: {
    "arrow-icon": async () => await import("@/components/icons/ArrowIcon.vue"),
    "plus-circle-icon": async () =>
      await import("@/components/icons/PlusCircleIcon.vue"),
    "load-icon": async () => await import("@/components/icons/LoadIcon.vue"),
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      values: () => ["default", "white", "pink"],
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      values: () => ["large", "small"],
      default: "large",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      values: () => ["default", "white-content"],
      default: null,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);

      // Drop the focus on click
      event.currentTarget.blur();
    },
  },
};
</script>

<style lang="scss" scoped>
.default {
  @apply bg-electric hover:bg-[#2E48EC] focus:ring-electric/50 focus:ring-4 text-white stroke-white;
}
.white {
  @apply bg-white hover:bg-[#FCF1EA] focus:ring-[#FF6100]/50 focus:ring-4 stroke-[#ff6100] text-[#ff6100];
}
.pink {
  @apply bg-salmon hover:bg-[#F16950] focus:ring-[#FF6100] focus:ring-4 stroke-[#121313] text-[#121313];

  > div.white-content {
    @apply text-white stroke-white;
  }
}
.large {
  @apply px-14 py-5;
}
.small {
  @apply px-8 py-[18px] h-[48px] text-base gap-1 leading-[13px];
}
.outline {
  @apply px-14 py-5 gap-x-2 border-[1px] rounded-[5px] border-electric text-electric leading-4 font-medium text-xl;
}
</style>
