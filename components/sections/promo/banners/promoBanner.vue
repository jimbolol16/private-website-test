<template>
  <div class="mobile:col-span-4 mobileL:col-span-8 col-span-12">
    <section class="grid-layout section-vertical-padding">
      <div
        class="flex row-start-1 col-start-2 mobileL:col-start-1 mobileL:col-span-8 mobile:col-start-1 mobile:col-span-4 col-span-6 mb-6 items-center justify-center mobile:mb-[40px] mobileL:mb-[40px]"
      >
        <div
          class="flex w-full justify-start mobileL:justify-center mobile:justify-center"
        >
          <slot name="image"></slot>
        </div>
      </div>
      <div
        class="flex row-start-1 tablet:row-start-1 mobile:row-start-2 mobileL:row-start-2 col-start-7 mobileL:col-start-1 mobileL:col-span-8 mobile:col-start-1 mobile:col-span-4 col-span-6 mb-6 justify-center items-center"
      >
        <div
          class="flex flex-col w-full justify-center items-center space-y-10 mobileL:mb-4 mobile:mb-4"
        >
          <slot name="titles"></slot>
        </div>
      </div>
      <div
        class="flex row-start-3 col-start-2 col-span-full mobileL:col-span-8 mobile:col-span-4 items-start justify-center"
      >
        <div class="flex flex-col w-full justify-center text-[9px]">
          <slot name="conditions"></slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "promoBanner",
  components: {},
};
</script>
