<template>
  <div class="mobile:col-span-4 col-span-12 mobileL:col-span-8">
    <!-- Right square tablet -->
    <div
      class="absolute right-0 z-0 tablet:py-14 desktopL:hidden desktop:hidden mobileL:hidden mobile:hidden"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/reviewSection/right-big-square.svg"
            alt="rightbigsquare"
            class="w-full h-[496px] tablet:translate-x-60"
          />
        </div>
      </div>
    </div>

    <!-- Right square mobile -->
    <div
      class="absolute right-0 z-0 tablet:hidden mobileL:translate-y-72 desktop:hidden desktopL:hidden mobile:hidden"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/reviewSection/right-square-mobile.svg"
            alt="rightsquaremobile"
            class="w-full h-[368px]"
          />
        </div>
      </div>
    </div>

    <!-- Right square mobile S -->
    <div
      class="absolute right-0 z-0 tablet:hidden mobileL:hidden desktop:hidden desktopL:hidden mobile:translate-y-52"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/reviewSection/right-square-mobile-s.svg"
            alt="rightsquaremobilesmall"
            class="w-full h-[312px]"
          />
        </div>
      </div>
    </div>

    <div class="subgrid-layout section-vertical-padding mb-[252px]">
      <!-- Right squares -->
      <div
        class="absolute right-0 z-0 tablet:hidden mobileL:hidden mobile:hidden"
      >
        <div class="relative">
          <div class="overflow-hidden">
            <nuxt-img
              :provider="$config.img_provider"
              src="/reviewSection/right-big-square.svg"
              alt="rightbigsquare"
              class="w-full h-[496px]"
            />
          </div>
        </div>
      </div>

      <!-- Left square tablet+ -->
      <div class="absolute left-0 z-0 mt-56 mobileL:hidden mobile:hidden">
        <div class="relative">
          <div class="overflow-hidden">
            <nuxt-img
              :provider="$config.img_provider"
              src="/left-big-square.svg"
              alt="leftbigsquare"
              class="w-full h-[496px] tablet:-translate-x-28"
            />
          </div>
        </div>
      </div>

      <!-- Left square mobile- -->
      <div
        class="absolute left-0 z-0 mt-56 mobileL:mt-96 desktop:hidden desktopL:hidden tablet:hidden mobile:-translate-x-24 mobile:mt-[232px]"
      >
        <div class="relative">
          <div class="overflow-hidden">
            <nuxt-img
              :provider="$config.img_provider"
              src="/reviewSection/left-square-mobile.svg"
              alt="leftsquaremobile"
              class="w-full h-[368px]"
            />
          </div>
        </div>
      </div>

      <div
        class="col-span-2 col-start-6 row-start-1 mt-8 mobileL:col-start-1 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full"
      >
        <div
          class="flex justify-center mobileL:justify-start mobile:justify-start w-full"
        >
          <h4 class="uppercase">{{ $t("rev_main_title") }}</h4>
        </div>
      </div>
      <div
        class="col-span-4 col-start-5 tablet:col-span-6 tablet:col-start-4 mobileL:col-start-1 mobileL:col-span-6 mobile:col-start-1 mobile:col-span-4 row-start-2 mt-2"
      >
        <div
          class="flex justify-center self-start mobileL:justify-start mobile:justify-start"
        >
          <h2 class="text-center mobileL:text-start mobile:text-start z-[1]">
            {{ $t("rev_title") }}
          </h2>
        </div>
      </div>

      <!-- Card section -->
      <div
        class="col-span-12 mobileL:col-span-8 mobile:col-span-4 row-start-3 mt-20"
      >
        <div class="absolute bg-transparent w-full left-0 text-white">
          <div class="relative h-full">
            <div class="swiper-reviews overflow-hidden pt-8 pb-10 pl-6 pr-6">
              <div class="swiper-wrapper cursor-default p-">
                <div
                  class="inline-flex swiper-slide desktop:first:ml-24 desktopL:first:ml-72"
                  v-for="(item, index) in reviews"
                  :key="index"
                >
                  <ui-section-card :stars="item.rating" :customer="item.user">
                    <template slot="body">
                      {{ item.content }}
                    </template>
                  </ui-section-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom margin before next section -->
      <div class="col-span-full row-start-4 mt-20">
        <div class="mt-[120px]"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import localesMetadata from "@/mixins/localesMetadata";
import { Swiper } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  name: "reviewSection",
  components: {
    "ui-section-card": async () =>
      await import("@/components/sections/reviewSection/sectionCard.vue"),
  },
  async fetch() {
    // Bring reviews data from server
    try {
      const response = await this.$api.$get("/api/reviews", {
        params: { site: this.localeMetadata.simplifiedLang },
      });

      // Save reviews into vuex in order to get them later
      this.$store.dispatch("customerReviews/SET_REVIEWS", response);

      // Force updating the swiper on client-side
      if (process.client && this.swiper) {
        this.$nextTick(() => {
          this.swiper.update();
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  mounted() {
    if (!this.swiper) {
      this.swiper = new Swiper(".swiper-reviews", {
        direction: "horizontal",
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 32,
        autoResize: false,
        observer: true,
        observeParents: true,
      });
    }
  },
  mixins: [localesMetadata],
  data() {
    return {
      swiper: null,
    };
  },
  computed: {
    ...mapState("customerReviews", {
      reviews: (state) => state.reviews,
    }),
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: auto;
}
.swiper-slide div {
  height: 100%;
}
</style>
<i18n lang="yaml" locale="es">
rev_main_title: "TESTIMONIOS"
rev_title: "Qué dicen de nosotros"
</i18n>
<i18n lang="yaml" locale="fr">
rev_main_title: "TÉMOIGNAGES"
rev_title: "Ce qu'ils disent de nous"
</i18n>
<i18n lang="yaml" locale="it">
rev_main_title: "Opinioni"
rev_title: "Cosa dicono su di noi"
</i18n>
<i18n lang="yaml" locale="pt">
rev_main_title: "Opiniões"
rev_title: "O que dizem de nós"
</i18n>
<i18n lang="yaml" locale="mx">
rev_main_title: "TESTIMONIOS"
rev_title: "Qué dicen de nosotros"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/reviewSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/reviewSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/reviewSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/reviewSection.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/reviewSection.yaml"
></i18n>
