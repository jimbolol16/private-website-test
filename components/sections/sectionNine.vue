<template>
  <div class="mobile:col-span-4 col-span-12 mobileL:col-span-8">
    <div class="relative contents w-full">
      <div class="absolute bg-[#E3E6E9] h-[1px] w-full left-0"></div>
    </div>

    <div class="subgrid-layout py-20">
      <div class="col-span-full col-start-1 row-start-1">
        <div class="flex flex-col w-full justify-center items-center gap-y-14">
          <h5>{{ $t("sec9_title") }}</h5>

          <!-- Tablet+ view -->
          <div
            class="inline-flex gap-x-32 tablet:gap-x-24 w-full justify-center items-center mobileL:hidden mobile:hidden tablet:hidden"
          >
            <nuxt-img
              :provider="$config.img_provider"
              src="/elreferente.svg"
              alt="elreferente"
              sizes="xl:171px lg:171px md:171px sm:170px xs:170px"
              width="171"
            />
            <nuxt-img
              :provider="$config.img_provider"
              src="/elpais.svg"
              alt="elpais"
              sizes="xl:130px lg:130px md:130px sm:170px xs:170px"
              width="130"
            />
            <nuxt-img
              :provider="$config.img_provider"
              src="/elmundo.svg"
              alt="elmundo"
              loading="lazy"
              sizes="xl:201px lg:201px md:201px sm:170px xs:170px"
              width="201"
            />
            <nuxt-img
              :provider="$config.img_provider"
              src="/diarioqueretaro.svg"
              alt="diariodequeretaro"
              loading="lazy"
              sizes="xl:201px lg:201px md:201px sm:170px xs:170px"
              width="201"
            />
            <nuxt-img
              :provider="$config.img_provider"
              src="/efe.svg"
              alt="efe"
              sizes="xl:55px lg:55px md:55px sm:55px xs:55px"
              width="55"
            />
          </div>

          <!-- Mobile- view -->
          <div
            class="inline-flex desktopL:hidden desktop:hidden h-[37px]"
            v-intersect="{
              onChange: swiperPressOnChange,
              observerOptions: {
                threshold: 1,
                rootMargin: '0px 0px 0px 0px',
              },
            }"
          >
            <div class="swiper overflow-hidden">
              <div class="swiper-wrapper cursor-default">
                <nuxt-img
                  :provider="$config.img_provider"
                  class="swiper-slide"
                  src="/elreferente.svg"
                  alt="elreferente"
                  loading="lazy"
                />
                <nuxt-img
                  :provider="$config.img_provider"
                  class="swiper-slide"
                  src="/elpais.svg"
                  alt="elpais"
                  loading="lazy"
                />
                <nuxt-img
                  :provider="$config.img_provider"
                  class="swiper-slide"
                  src="/elmundo.svg"
                  alt="elmundo"
                  loading="lazy"
                />
                <nuxt-img
                  :provider="$config.img_provider"
                  class="swiper-slide"
                  src="/diarioqueretaro.svg"
                  alt="diariodequeretaro"
                  loading="lazy"
                />
                <nuxt-img
                  :provider="$config.img_provider"
                  class="swiper-slide"
                  src="/efe.svg"
                  alt="efe"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative contents w-full">
      <div class="absolute bg-[#E3E6E9] h-[1px] w-full left-0"></div>
    </div>
  </div>
</template>
<script>
import { Swiper } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  name: "sectionNine",
  mounted() {
    this.initSwiper();
  },
  data() {
    return {
      swiper: null,
      swiperPressRendered: false,
    };
  },
  methods: {
    initSwiper() {
      if (!this.swiper && this.swiperPressRendered) {
        this.swiper = new Swiper(".swiper", {
          direction: "horizontal",
          loop: false,
          slidesPerView: "auto",
          spaceBetween: 32,
          initialSlide: 1,
          autoResize: false,
          observer: true,
          observeParents: true,
        });
      }
    },
    swiperPressOnChange(isVisible) {
      this.swiperPressRendered = isVisible;
      this.initSwiper();
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide:last-child {
  width: 55px;
}
.swiper-slide {
  width: 170px;
}
.swiper-slide img {
  height: 100%;
}
</style>
<i18n lang="yaml" locale="es">
sec9_title: "Hablan de nosotros"
</i18n>
<i18n lang="yaml" locale="fr">
sec9_title: "Ils parlent de nous"
</i18n>
<i18n lang="yaml" locale="it">
sec9_title: "Dicono di noi"
</i18n>
<i18n lang="yaml" locale="pt">
sec9_title: "Fale de nós"
</i18n>
<i18n lang="yaml" locale="mx">
sec9_title: "Hablan de nosotros"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/sectionNine.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/sectionNine.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/sectionNine.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/sectionNine.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/sectionNine.yaml"></i18n>
