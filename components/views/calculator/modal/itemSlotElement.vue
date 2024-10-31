<template>
  <div
    class="w-40 h-40 border-[1px] rounded-xl bg-white cursor-pointer"
    :class="{
      'opacity-40': disabled,
      'pointer-events-none': disabled,
      'cursor-not-allowed': disabled,
    }"
    @click="$emit('click')"
  >
    <div class="flex flex-col justify-center items-center h-full">
      <nuxt-img
        :provider="$config.img_provider"
        :src="image"
        alt="item"
        class="h-24"
      />
      <h5 class="pt-2">{{ name }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "itemSlotElement",
  props: {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.active {
  @apply border-electric;
}
</style>
