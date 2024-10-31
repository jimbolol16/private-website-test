<template>
  <div
    class="flex relative w-full bg-electric h-[712px] mobileL:h-[832px] mobile:h-[768px]"
  >
    <div class="grid-layout mt-40 mb-80 mobileL:my-14 mobile:my-20">
      <div
        class="col-start-1 col-span-6 tablet:col-span-5 mobileL:col-span-full mobile:col-span-full"
      >
        <div class="flex flex-col">
          <h4 class="uppercase text-white">{{ $t("map_main_title") }}</h4>
          <h2 class="text-white mt-2">{{ $t("map_title") }}</h2>
          <p class="map-text mt-6">
            {{ $t("map_body_1") }}
          </p>
          <p class="map-text mt-6">
            {{ $t("map_body_2") }}
          </p>
        </div>
      </div>

      <!-- Map section -->
      <div
        class="col-start-7 col-span-full tablet:col-start-6 mobileL:row-start-2 mobileL:col-start-1 mobile:row-start-2 mobile:col-start-1"
      >
        <div
          class="flex w-full flex-col desktopL:ml-16 desktop:ml-8 tablet:ml-6 tablet:items-end mobileL:items-center mobileL:-ml-6 mobile:items-center mobile:m-[5px]"
        >
          <!-- Map top right big square -->
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/white-large-square.svg"
            alt="whitelargesquare"
            class="absolute z-[3] desktopL:-mt-[26px] desktopL:ml-[494px] desktop:-mt-[26px] desktop:ml-[424px] tablet:-mt-[26px] tablet:mr-[108px] mobileL:-mt-[26px] mobileL:ml-[428px] mobile:hidden"
          />

          <!-- Map top right small square -->
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/white-small-square.svg"
            alt="whitesmallsquare"
            class="absolute z-[3] desktopL:-mt-[18px] desktopL:ml-[548px] desktop:-mt-[18px] desktop:ml-[485px] tablet:-mt-[18px] tablet:mr-[71px] mobileL:-mt-[18px] mobileL:ml-[522px] mobile:hidden"
          />

          <!-- Map bottom left big square -->
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/white-large-square.svg"
            alt="whitelargesquare"
            class="absolute z-[3] desktopL:mt-[386px] desktopL:ml-[16px] desktop:mt-[340px] desktop:ml-[8px] tablet:mt-[270px] tablet:mr-[440px] mobileL:mt-[346px] mobileL:-ml-[414px] mobile:hidden"
          />

          <!-- Map bottom left small square -->
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/white-small-square.svg"
            alt="whitesmallsquare"
            class="absolute z-[3] desktopL:mt-[420px] desktopL:ml-[64px] desktop:mt-[372px] desktop:ml-[56px] tablet:mt-[312px] tablet:mr-[410px] mobileL:mt-[380px] mobileL:-ml-[341px] mobile:hidden"
          />

          <!-- Map itself -->
          <slot></slot>

          <!-- Map background squares -->
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/map-thin-squares-stack.svg"
            alt="mapthinsquares"
            class="absolute z-[1] desktopL:ml-[102px] desktopL:-mt-[29px] desktopL:h-[488px] desktop:ml-[92px] desktop:-mt-[25px] desktop:h-[432px] tablet:mr-[62px] tablet:-mt-[23px] tablet:h-[352px] mobileL:ml-[135px] mobileL:-mt-[28px] mobileL:h-[440px] mobile:hidden"
          />
        </div>
      </div>
    </div>

    <!-- DesktopL square -->
    <div
      class="absolute left-[88px] z-0 bottom-0 desktop:hidden tablet:hidden mobileL:hidden mobile:hidden"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/desktop-square.svg"
            alt="desktopleftsquare"
          />
        </div>
      </div>
    </div>

    <!-- Desktop square -->
    <div
      class="absolute left-0 z-0 bottom-0 tablet:-ml-[304px] mobileL:-ml-[162px] desktopL:hidden mobile:hidden"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/left-big-square.svg"
            alt="leftbigsquare"
            sizes="lg:423px md:423px sm:423px"
            width="423"
          />
        </div>
      </div>
    </div>

    <!-- Mobile square -->
    <div
      class="absolute left-0 z-0 bottom-0 desktopL:hidden desktop:hidden tablet:hidden mobileL:hidden"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/mapSection/mobile-square.svg"
            alt="leftmobilesquare"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "baseMapSection",
};
</script>
<style lang="scss" scoped>
.map-text {
  @apply font-roboto font-normal text-white/60 text-[18px] leading-[25px];
}
</style>
<i18n lang="yaml" locale="es">
map_main_title: "TU TRASTERO DONDE LO NECESITES"
map_title: "¿Dónde operamos?"
map_body_1: "Recogemos y te llevamos tus muebles donde lo necesites."
map_body_2: "Si estás fuera de la zona de operación, no te preocupes, ¡solicita un presupuesto personalizado!"
</i18n>
<i18n lang="yaml" locale="fr">
map_main_title: "VOTRE STOCKAGE LÀ OÙ VOUS EN AVEZ BESOIN"
map_title: "Où intervenons-nous ?"
map_body_1: "Nous transportons et livrons vos affaires là où vous en avez besoin."
map_body_2: "Si vous êtes en dehors de la zone, ne vous inquiétez pas, demandez un devis personnalisé!"
</i18n>
<i18n lang="yaml" locale="it">
map_main_title: "Il tuo deposito dove vorrai"
map_title: "Dove operiamo?"
map_body_1: "Ritiriamo e trasportiamo i mobili dove vorrai"
map_body_2: "Se sei fuori dall'area operativa, non preoccuparti, richiedi un preventivo personalizzato !"
</i18n>
<i18n lang="yaml" locale="pt">
map_main_title: "O seu armazém onde precisar"
map_title: "Onde trabalhamos?"
map_body_1: "Recolhemos e levamos os seu móveis onde precisar"
map_body_2: "Se está fora da zona de trabalho, não se preocupe! Solicite um orçamento personalizado."
</i18n>
<i18n lang="yaml" locale="mx">
map_main_title: "TU MINI BODEGA DONDE LO NECESITES"
map_title: "¿Dónde operamos?"
map_body_1: "Recogemos y te llevamos tus muebles donde lo necesites."
map_body_2: "Si estás fuera de la zona de operación, no te preocupes, ¡solicita un presupuesto personalizado!"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/mapSection.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/mapSection.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/mapSection.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/mapSection.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/mapSection.yaml"></i18n>
