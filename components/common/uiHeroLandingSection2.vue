<template>
  <div
    class="desktopL:h-screen desktop:h-screen flex justify-center flex-col min-h-[720px]"
  >
    <div class="w-full h-full min-h-[inherit]" :class="backgroundImage">
      <!-- Background image -->
      <div
        class="absolute top-0 z-0 right-0 tablet:hidden mobileL:hidden mobile:hidden"
      >
        <div class="relative">
          <div class="overflow-hidden top-0">
            <nuxt-img
              :provider="$config.img_provider"
              src="/aboutus/hero-right-square.svg"
              alt="herorightsquare"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Background image -->
      <div
        class="absolute z-[1] left-0 desktopL:bottom-0 desktop:bottom-0 desktopL:translate-y-28 desktop:translate-y-28 tablet:hidden mobileL:hidden mobile:hidden"
      >
        <div class="relative">
          <div class="overflow-hidden">
            <nuxt-img
              :provider="$config.img_provider"
              src="/aboutus/hero-left-square.svg"
              alt="heroleftsquare"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <div class="grid-layout w-full h-full min-h-[inherit]">
        <div
          class="col-start-4 col-span-6 row-start-1 mt-auto mobileL:col-start-1 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full"
        >
          <h1 class="text-center text-white">
            {{ hero_prefix }}
            <span class="text-salmon">{{ hero_highlight_1 }}</span>
            {{ hero_suffix }}
            <span v-if="hero_highlight_2" class="text-salmon">
              {{ hero_highlight_2 }}</span
            >
          </h1>
        </div>

        <div class="subgrid-layout row-start-2 col-span-full mt-12">
          <div class="col-start-1 col-span-full" v-if="displayButtons">
            <div class="flex justify-center">
              <ui-button-and-video
                colorButton="pink"
                colorPlay="white"
              ></ui-button-and-video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "uiHeroLandingSection",
  components: {
    "ui-button-and-video": async () =>
      await import("@/components/common/uiButtonAndVideo.vue"),
  },
  props: {
    backgroundImage: {
      type: String,
      values: () => ["about", "business"],
      default: "about",
    },
    hero_highlight_1: {
      type: String,
      default: null,
    },
    hero_highlight_2: {
      type: String,
      default: null,
    },
    hero_prefix: {
      type: String,
      default: null,
    },
    hero_suffix: {
      type: String,
      default: null,
    },
    displayButtons: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  background: linear-gradient(
      0deg,
      rgba(71, 96, 255, 0.85),
      rgba(71, 96, 255, 0.85)
    ),
    url("~/static/aboutus/aboutus.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% 0;
  position: relative;
  width: 100%;
}
.business {
  background: linear-gradient(
      0deg,
      rgba(71, 96, 255, 0.85),
      rgba(71, 96, 255, 0.85)
    ),
    url("~/static/business/businessHero.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% 0;
  position: relative;
  width: 100%;
}
</style>
