<template>
  <div
    class="desktopL:pb-96 desktop:pb-96 tablet:pb-96 mobileL:pb-52 mobile:pb-52 mobile:mb-mobile mobileL:mb-mobileL"
  >
    <div class="flex justify-center flex-col bg-electric h-full pb-52">
      <div class="grid-layout w-full h-full">
        <!-- Background image -->
        <div class="absolute z-0 square">
          <div class="relative">
            <div class="overflow-hidden top-0">
              <nuxt-img
                :provider="$config.img_provider"
                src="/aboutus/whereweare.svg"
                alt="whereweare"
                class="w-full min-w-[497px] mobile:min-w-[303px]"
              />
            </div>
          </div>
        </div>
        <div
          class="col-start-4 col-span-6 pt-40 mobileL:col-start-1 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full mobile:pt-[92px]"
        >
          <div class="flex flex-col w-full justify-center items-center">
            <h4 class="uppercase text-white">{{ $t("whe_main_title") }}</h4>
            <h2 class="mt-2 text-white">{{ $t("whe_title") }}</h2>
            <p
              class="font-roboto font-normal text-[18px] leading-[25px] text-center mt-7 text-white/60"
            >
              {{ $t("whe_subtitle") }}
            </p>
          </div>

          <!-- Card section -->
          <div
            class="col-span-12 mobileL:col-span-8 mobile:col-span-4 row-start-3 mt-20"
          >
            <div class="absolute bg-transparent w-full left-0 text-white">
              <div class="relative h-full">
                <div
                  class="swiper-reviews overflow-hidden pt-8 pb-10 pl-6 pr-6"
                >
                  <div class="swiper-wrapper cursor-default">
                    <div
                      class="inline-flex swiper-slide"
                      v-for="([key, value], index) in Object.entries(cities)"
                      :key="index"
                    >
                      <city-card :cityImage="key" :city="value"></city-card>
                    </div>
                  </div>
                  <div class="swiper-pagination w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cityCard from "@/components/views/about/cityCard.vue";
import { Swiper, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  name: "whereWeAre",
  components: {
    "city-card": cityCard,
  },
  mounted() {
    if (!this.swiper) {
      Swiper.use([Pagination]);
      this.swiper = new Swiper(".swiper-reviews", {
        direction: "horizontal",
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 24,
        autoResize: false,
        initialSlide: 3,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        observer: true,
        observeParents: true,
      });
    }
  },
  data() {
    return {
      swiper: null,
      cities: {
        madrid: this.$t("madrid"),
        barcelona: this.$t("barcelona"),
        malaga: this.$t("malaga"),
        sevilla: this.$t("sevilla"),
        valencia: this.$t("valencia"),
        lisboa: this.$t("lisboa"),
        oporto: this.$t("oporto"),
        paris: this.$t("paris"),
        milan: this.$t("milano"),
        queretaro: this.$t("queretaro"),
      },
    };
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
.swiper-pagination {
  margin-top: 40px;
}
.swiper-container-horizontal > .swiper-pagination {
  bottom: unset;
}
.square {
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
<i18n lang="yaml" locale="es">
whe_main_title: "BUSCAMOS ESTAR CERCA DE TI"
whe_title: "Dónde estamos"
whe_subtitle: "Disponemos de trasteros en Madrid, Barcelona, Málaga, Sevilla, Valencia, Lisboa, Oporto, Paris y Querétaro. Ofreciendo un servicio flexible que se adapte a tus necesidades."
madrid: "Madrid"
barcelona: "Barcelona"
malaga: "Málaga"
sevilla: "Sevilla"
valencia: "Valencia"
lisboa: "Lisboa"
oporto: "Oporto"
paris: "París"
milano: "Milán"
queretaro: "Querétaro"
</i18n>
<i18n lang="yaml" locale="fr">
whe_main_title: "ON VEUT ÊTRE PRÈS DE VOUS"
whe_title: "Où sommes-nous "
whe_subtitle: "Nous disposons d'installations de stockage à Madrid, Barcelone, Malaga, Séville, Valence, Lisbonne, Porto, Paris et Querétaro. Nous offrons un service flexible qui s'adapte à vos besoins."
madrid: "Madrid"
barcelona: "Barcelone"
malaga: "Malaga"
sevilla: "Séville"
valencia: "Valence"
lisboa: "Lisbonne"
oporto: "Porto"
paris: "Paris"
milano: "Milan"
queretaro: "Querétaro"
</i18n>
<i18n lang="yaml" locale="it">
whe_main_title: "CERCHIAMO DI STARTI VICINO"
whe_title: "Dove siamo"
whe_subtitle: "Disponiamo di depositi a Madrid, Barcellona, Malaga, Siviglia, Valenza, Lisbona, Oporto, Parigi, Milano e Querétaro"
madrid: "Madrid"
barcelona: "Barcellona"
malaga: "Malaga"
sevilla: "Siviglia"
valencia: "Valenza"
lisboa: "Lisbona"
oporto: "Oporto"
paris: "Parigi"
milano: "Milano"
queretaro: "Querétaro"
</i18n>
<i18n lang="yaml" locale="pt">
whe_main_title: "PROCURAMOS ESTAR PERTO DE SI"
whe_title: "Onde estamos"
whe_subtitle: "Temos armazéns em Madrid, Barcelona, Málaga, Sevilha, Valência, Lisboa, Porto, Paris e Querétaro. Oferecemos um serviço flexível que se adapta às suas necessidades."
madrid: "Madrid"
barcelona: "Barcelona"
malaga: "Málaga"
sevilla: "Sevilha"
valencia: "Valencia"
lisboa: "Lisboa"
oporto: "Porto"
paris: "Paris"
milano: "Milão"
queretaro: "Querétaro"
</i18n>
<i18n lang="yaml" locale="mx">
whe_main_title: "BUSCAMOS ESTAR CERCA DE TI"
whe_title: "Dónde estamos"
whe_subtitle: "Disponemos de mini bodegas en Madrid, Barcelona, Málaga, Sevilla, Valencia, Lisboa, Oporto, Paris y Querétaro. Ofreciendo un servicio flexible que se adapte a tus necesidades."
madrid: "Madrid"
barcelona: "Barcelona"
malaga: "Málaga"
sevilla: "Sevilla"
valencia: "Valencia"
lisboa: "Lisboa"
oporto: "Oporto"
paris: "París"
milano: "Milán"
queretaro: "Querétaro"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/whereWeAre.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/whereWeAre.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/whereWeAre.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/whereWeAre.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/whereWeAre.yaml"></i18n>
