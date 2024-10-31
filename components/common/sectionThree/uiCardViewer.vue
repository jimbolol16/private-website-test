<template>
  <div class="mobile:col-span-4 mobileL:col-span-8 col-span-12">
    <!-- Background image -->
    <div class="absolute left-0 z-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-business.svg"
            alt="businessbackground"
            class="max-h-[1668px] opacity-60 mt-2 -translate-x-4"
          />
        </div>
      </div>
    </div>

    <div
      class="grid-layout section-vertical-padding mt-20 pt-0 mobileL:mt-[140px] mobile:mt-16 mobile:bg-transparent"
    >
      <div class="col-span-full text-center w-full z-[1]">
        <h4 class="uppercase">{{ headerTitle }}</h4>
      </div>
      <div class="col-span-full text-center w-full z-[1] mt-2 mb-[52px]">
        <div class="flex w-full justify-center">
          <h2 class="max-w-[533px]">{{ title }}</h2>
        </div>
      </div>

      <div
        class="col-span-4 desktopL:row-start-4 desktop:row-start-4 mobileL:row-start-4 mobileL:col-start-2 mobileL:col-span-6 tablet:row-start-5 col-start-1 mobileL:mt-[24px] mobile:mt-[24px] z-[1]"
      >
        <slot name="card1"></slot>
      </div>

      <div
        class="col-span-4 desktopL:row-start-4 desktop:row-start-4 mobile:row-start-5 mobileL:row-start-5 mobileL:col-start-2 mobileL:col-span-6 tablet:row-start-5 mobile:col-start-1 col-start-5 mobileL:mt-[24px] mobile:mt-[24px] z-[1]"
      >
        <slot name="card2"></slot>
      </div>

      <div
        class="col-span-4 desktopL:row-start-4 desktop:row-start-4 mobile:row-start-6 mobileL:row-start-6 mobileL:col-start-2 mobileL:col-span-6 tablet:row-start-5 mobile:col-start-1 col-start-9 mobileL:mt-[24px] mobile:mt-[24px] z-[1]"
      >
        <slot name="card3"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uiCardViewer",
  props: {
    headerTitle: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
};
</script>
