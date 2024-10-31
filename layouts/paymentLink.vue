<template>
  <div class="bg-white h-full">
    <!-- Background image -->
    <div class="absolute left-0 top-0 z-0 right-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-prices-wizard.svg"
            alt="gradcheckout"
          />
        </div>
      </div>
    </div>

    <section
      class="h-[64px] z-40 grid-layout w-full top-0 bg-none transition-all duration-300"
      key="scrollableHeader"
    >
      <div class="my-auto row-start-1 col-start-1 focus:outline-none z-50">
        <logo-icon
          class="mobile:h-4 mobile:w-[88px] no-stroke fill-electric"
        ></logo-icon>
      </div>
    </section>

    <nuxt />
  </div>
</template>
<script>
export default {
  name: "paymentLink",
  components: {
    "logo-icon": async () => await import("@/components/icons/LogoIcon.vue"),
  },
};
</script>
