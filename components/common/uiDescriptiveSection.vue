<template>
  <div class="mobile:col-span-4 mobileL:col-span-8 col-span-12 bg-soft">
    <div class="grid-layout">
      <!-- Text section -->
      <div
        class="col-span-6 col-start-1 mobileL:col-start-1 tablet:col-start-3 tablet:col-span-8 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full row-start-1 mobileL:mt-[140px] tablet:mt-16 mt-[187px] mobile:mt-16 z-[2]"
      >
        <div class="flex flex-col w-full">
          <h2>
            <span class="text-electric">{{ mainTitle }}</span>
            {{ secondaryTitle }}
          </h2>
          <p class="p1 mt-2">
            {{ subTitle }}
          </p>
        </div>

        <div class="flex flex-col w-full mt-4 space-y-4 text-justify">
          <p class="p2" v-html="body"></p>
        </div>

        <ui-button-and-video
          colorPlay="dark"
          class="pt-12"
        ></ui-button-and-video>
      </div>

      <div
        class="col-span-6 col-start-7 row-start-1 tablet:row-start-2 tablet:col-start-3 tablet:col-span-8 mobileL:row-start-2 mobile:row-start-2 mobileL:col-start-2 mobileL:col-span-7 mobile:col-start-1 mobile:col-span-4 z-[1] mt-40 tablet:mt-10 mobileL:mt-16 desktopL:ml-[88px] desktop:ml-[48px] mobile:mt-11 tablet:translate-x-4 mobileL:-translate-x-6"
      >
        <div
          class="flex w-full h-full tablet:justify-center mobileL:justify-center"
        >
          <nuxt-img
            :provider="$config.img_provider"
            src="/aboutus/hat-guy.png"
            alt="hatguy"
            class="w-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "uiDescriptiveSection",
  components: {
    "ui-button-and-video": async () =>
      await import("@/components/common/uiButtonAndVideo.vue"),
  },
  props: {
    mainTitle: {
      type: String,
      default: null,
    },
    secondaryTitle: {
      type: String,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
    body: {
      type: String,
      default: null,
    },
  },
};
</script>
