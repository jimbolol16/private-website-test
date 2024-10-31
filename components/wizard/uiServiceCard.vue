<template>
  <div
    class="flex flex-col w-[264px] h-[205px] mobileL:w-[260px] mobileL:h-[216px] mobile:w-[260px] mobile:h-[216px] border-soft border-[1px] items-center hover:cursor-pointer rounded-[12px]"
    :class="selected ? 'bg-soft/50' : 'bg-white'"
    @click="selectCard"
  >
    <div class="inline-flex w-full justify-end">
      <nuxt-img
        :provider="$config.img_provider"
        src="/wizard/check.svg"
        class="pt-[13px] pr-[13px]"
        :class="selected ? 'visible' : 'invisible'"
        alt="check"
      />
    </div>
    <div>
      <slot name="image"></slot>
    </div>
    <div class="font-manrope px-auto font-bold text-[18px] leading-5">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "uiServiceCard",
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    selectCard() {
      this.selected = !this.selected;
      this.$emit("select");
    },
  },
};
</script>
