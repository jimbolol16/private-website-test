<template>
  <div class="flex flex-col w-full">
    <div
      class="flex flex-row justify-between pb-5 cursor-pointer"
      @click="isExpanded = !isExpanded"
    >
      <h5 class="font-[700]">{{ title }}</h5>
      <nuxt-img
        :provider="$config.img_provider"
        src="/minus.svg"
        alt="minus"
        class="cursor-pointer"
        width="13px"
        v-if="isExpanded"
      />
      <nuxt-img
        :provider="$config.img_provider"
        src="/plus.svg"
        alt="plus"
        class="cursor-pointer"
        width="13px"
        v-else
      />
    </div>

    <div class="flex w-full text-justify">
      <transition name="slide">
        <!-- Wrap transition in a div element to avoid weird effects on animation -->
        <div v-if="isExpanded">
          <p class="p2 pb-8">
            <slot></slot>
          </p>
        </div>
      </transition>
    </div>

    <div class="border-[1px] border-[#8896A6] border-solid bg-[#8896A6]"></div>
  </div>
</template>
<script>
export default {
  name: "faqContent",
  props: {
    title: {
      type: String,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isExpanded: this.expanded,
    };
  },
};
</script>
<style lang="scss" scoped>
.slide-enter-active {
  @apply duration-700 ease-in;
}

.slide-leave-active {
  @apply duration-700 ease-out;
}

.slide-enter-to,
.slide-leave {
  @apply max-h-[400px] overflow-hidden;
}

.slide-enter,
.slide-leave-to {
  @apply max-h-0 overflow-hidden;
}
</style>
