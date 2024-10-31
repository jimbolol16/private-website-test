<template>
  <div class="mobile:col-span-4 mobileL:col-span-8 col-span-12">
    <!-- Background image -->
    <div class="absolute left-0 z-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-review.svg"
            alt="reviewbackground"
            class="max-h-[2256px] opacity-60 mt-2 -translate-x-4"
            sizes="xl:742px lg:742px"
            width="742"
          />
        </div>
      </div>
    </div>

    <div class="absolute w-full left-0">
      <div class="absolute bg-[#E3E6E9] w-full h-[1px]"></div>
      <div class="inline-flex w-full justify-between tablet:hidden">
        <nuxt-img
          :provider="$config.img_provider"
          src="/sectionOne/left-squares.webp"
          alt="leftsquares"
          class="tablet:w-28 tablet:h-20 mobile:w-12 mobileL:w-12"
          sizes="xl:132px lg:132px md:112px sm:48px xs:48px"
          width="132"
        />
        <nuxt-img
          :provider="$config.img_provider"
          src="/sectionOne/right-squares.webp"
          alt="rightsquares"
          class="tablet:w-28 tablet:h-20 mobile:w-12 mobileL:w-12"
          sizes="xl:132px lg:132px md:112px sm:48px xs:48px"
          width="132"
        />
      </div>
    </div>

    <div
      class="subgrid-layout section-vertical-padding desktop:mt-32 desktopL:mt-32 mobileL:mt-32 mobile:mt-16"
    >
      <div
        class="col-span-12 desktopL:hidden desktop:hidden mobileL:hidden mobile:hidden tablet:row-start-1 mb-6"
      >
        <div class="flex flex-row w-full justify-between">
          <div class="self-start">
            <nuxt-img
              :provider="$config.img_provider"
              src="/sectionOne/left-squares.webp"
              alt="leftsquares"
              class="w-full h-20 cursor-pointer"
            />
          </div>

          <div class="self-end">
            <nuxt-img
              :provider="$config.img_provider"
              src="/sectionOne/right-squares.webp"
              alt="rightsquares"
              class="w-full h-20"
            />
          </div>
        </div>
      </div>

      <div
        class="col-span-4 desktopL:row-start-1 desktop:row-start-1 tablet:row-start-2 mobileL:row-start-1 mobile:row-start-1 z-[1]"
      >
        <h4 class="uppercase">{{ translate("sec1_main_title") }}</h4>
      </div>
      <div
        class="desktopL:col-span-6 desktop:col-span-8 tablet:col-span-10 mobile:col-span-4 mobileL:col-span-8 mt-2 desktopL:row-start-2 desktop:row-start-2 tablet:row-start-3 mobileL:row-start-2 mobile:row-start-2 col-start-1 z-[1]"
      >
        <h2 class="max-w-[712px]">
          {{ translate("sec1_title") }}
        </h2>
      </div>
      <div
        class="desktopL:col-span-4 desktop:col-span-5 tablet:col-span-7 mobileL:col-span-8 mobile:col-span-4 mt-4 desktopL:row-start-3 desktop:row-start-3 tablet:row-start-4 mobileL:row-start-3 mobile:row-start-3 z-[1]"
      >
        <p class="p2 desktop:max-w-[472px] desktopL:max-w-[488px]">
          {{ translate("sec1_subtitle") }}
        </p>
      </div>

      <div
        class="col-span-full desktopL:col-span-8 desktop:col-span-8 tablet:col-span-8 mobileL:col-span-6 desktopL:col-start-3 desktop:col-start-3 tablet:col-start-3 mobileL:col-start-2 z-[1] desktopL:row-start-4 desktop:row-start-4 tablet:row-start-5 mt-[32px]"
        v-if="renderVideo && videoId"
      >
        <ui-video :id="videoId" :title="videoTitle" class="mb-[40px]">
        </ui-video>
      </div>

      <div
        class="col-span-4 desktopL:ml-4 desktop:ml-4 mobileL:col-start-2 mobileL:col-span-6 col-start-1 mt-[54px] z-[1]"
        :class="{
          'desktopL:row-start-5 desktop:row-start-5 mobileL:row-start-5 tablet:row-start-6':
            renderVideo && videoId,
          'desktopL:row-start-4 desktop:row-start-4 mobileL:row-start-4 tablet:row-start-5':
            !(renderVideo && videoId),
        }"
      >
        <section-content
          image="pickup"
          :title="translate('sec1_item1_title')"
          :header="translate('sec1_item1_subtitle')"
          :body="translate('sec1_item1_body', { city: context })"
        >
        </section-content>
      </div>

      <div
        class="col-span-4 desktopL:ml-4 desktop:ml-4 mobileL:col-start-2 mobileL:col-span-6 mobile:col-start-1 col-start-5 mt-[54px] z-[1]"
        :class="{
          'desktopL:row-start-5 desktop:row-start-5 mobile:row-start-6 mobileL:row-start-6 tablet:row-start-6':
            renderVideo && videoId,
          'desktopL:row-start-4 desktop:row-start-4 mobile:row-start-5 mobileL:row-start-5 tablet:row-start-5':
            !(renderVideo && videoId),
        }"
      >
        <section-content
          image="storage"
          :title="translate('sec1_item2_title')"
          :header="translate('sec1_item2_subtitle')"
          :body="translate('sec1_item2_body')"
        >
        </section-content>
      </div>

      <div
        class="col-span-4 desktopL:ml-4 desktop:ml-4 mobileL:col-start-2 mobileL:col-span-6 mobile:col-start-1 col-start-9 mt-[54px] z-[1]"
        :class="{
          'desktopL:row-start-5 desktop:row-start-5 mobile:row-start-7 mobileL:row-start-7 tablet:row-start-6':
            renderVideo && videoId,
          'desktopL:row-start-4 desktop:row-start-4 mobile:row-start-6 mobileL:row-start-6 tablet:row-start-5':
            !(renderVideo && videoId),
        }"
      >
        <section-content
          image="delivery"
          :title="translate('sec1_item3_title')"
          :header="translate('sec1_item3_subtitle')"
          :body="translate('sec1_item3_body')"
        >
        </section-content>
      </div>
    </div>
  </div>
</template>
<script>
import localesMetadata from "@/mixins/localesMetadata";
export default {
  name: "sectionOne",
  props: {
    context: {
      type: String,
      default: "",
    },
    renderVideo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "section-content": async () =>
      await import("@/components/sections/sectionOne/sectionContent.vue"),
    "ui-video": async () => await import("@/components/uiVideo.vue"),
  },
  mixins: [localesMetadata],
  data() {
    return {
      videoPerLocale: {
        es: "DLY21CkeFh8",
        "es-en": "uOMmvmNBgpM",
        pt: "wjKsnNfIZvQ",
        "pt-en": "wjKsnNfIZvQ",
        fr: null,
        "fr-en": null,
        it: null,
        "it-en": null,
        mx: "35AUor40Fek",
        "mx-en": "35AUor40Fek",
      },
    };
  },
  computed: {
    videoId() {
      return this.videoPerLocale[this.localeMetadata?.code];
    },
    videoTitle() {
      if (this.context) {
        return `${this.translate("video_title")} | ${this.context}`;
      }
      return this.translate("video_title");
    },
  },
  methods: {
    /* Helper method to handle parent translations in order to allow 'inheritance' */
    translate(key, context) {
      if (this.$parent?.$te(key, context)) return this.$parent.$t(key, context);
      return this.$t(key, context);
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
sec1_main_title: "TE HACEMOS LA VIDA MÁS FÁCIL"
sec1_title: "¿Cómo funciona tu alquiler de trastero con box2box?"
sec1_subtitle: " "
sec1_item1_title: "Recogemos"
sec1_item1_subtitle: " "
sec1_item1_body: "Recogemos tus cosas donde nos digas, las protegemos para el transporte y nos las llevamos... Sin pausa pero sin prisa."
sec1_item2_title: "Guardamos"
sec1_item2_subtitle: " "
sec1_item2_body: "Sabemos que tus cosas te importan y estarán vigiladas 24 horas al día. Puedes relajarte y disfrutar de tu casa, tu familia, tu viaje..."
sec1_item3_title: "Devolvemos"
sec1_item3_subtitle: " "
sec1_item3_body: "Con un clic, te entregamos tus cosas. Elige los artículos que necesites de tu inventario y te los llevamos donde y cuando quieras."
video_title: "Box2box - tu servicio de alquiler de trasteros a domicilio"
</i18n>
<i18n lang="yaml" locale="fr">
sec1_main_title: "NOUS VOUS SIMPLIFIONS LA VIE"
sec1_title: "Comment fonctionne la location de stockage avec box2box ?"
sec1_subtitle: " "
sec1_item1_title: "Transport"
sec1_item1_subtitle: " "
sec1_item1_body: "Nous démontons vos meubles et protégeons vos affaires pour le transport afin que tout soit facile et économique pour vous."
sec1_item2_title: "Stockage"
sec1_item2_subtitle: " "
sec1_item2_body: "Nous savons que vos affaires sont importantes pour vous. Elles seront surveillées 24h/24h. Vous pouvez vous détendre et profiter de votre temps libre."
sec1_item3_title: "Livraison"
sec1_item3_subtitle: " "
sec1_item3_body: "En un clic, nous livrons vos affaires. Choisissez les articles dont vous avez besoin dans votre inventaire et nous vous les livrons où vous le souhaitez."
video_title: " "
</i18n>
<i18n lang="yaml" locale="it">
sec1_main_title: "TI SEMPLIFICHIAMO LA VITA"
sec1_title: "Come funzionano i deposito in affitto con box2box?"
sec1_subtitle: " "
sec1_item1_title: "Ritiriamo"
sec1_item1_subtitle: " "
sec1_item1_body: "Ritiriamo le tue cose dove vorrai, le imballeremo per il trasporto e le ritireremo...Senza pause però senza fretta."
sec1_item2_title: "Custodiamo"
sec1_item2_subtitle: " "
sec1_item2_body: "Sappiamo che le tue cose sono importanti, saranno vigilate 24 ore su 24. Rilassati e goditi la tua casa, la tua famiglia, il tuo viaggio..."
sec1_item3_title: "Restituiamo"
sec1_item3_subtitle: " "
sec1_item3_body: "Con un semplice click ti riconsegneremo le tue cose. Quello che ti servirà, dove e quando vuoi, con massima flessibilità sul luogo e sull'orario"
video_title: " "
</i18n>
<i18n lang="yaml" locale="pt">
sec1_main_title: "FACILITAMOS-LHE A VIDA"
sec1_title: "Como funciona o aluguer de armazéns com a box2box?"
sec1_subtitle: " "
sec1_item1_title: "Recolhemos"
sec1_item1_subtitle: " "
sec1_item1_body: "Recolhemos as tuas coisas onde queira, protegemos tudo para o transporte e levamos... Fácil e rápido"
sec1_item2_title: "Guardamos"
sec1_item2_subtitle: " "
sec1_item2_body: "Sabemos que as suas coisas são importantes para si e que serão vigiadas 24 horas por dia. Pode relaxar e desfrutar da sua casa, da sua família, da sua viagem..."
sec1_item3_title: "Devolvemos"
sec1_item3_subtitle: " "
sec1_item3_body: "Com um clique, nós entregamos o seu material. Escolha os artigos que precisa do seu inventário e nós entregar-lhe-emos onde e quando quiser."
video_title: " "
</i18n>
<i18n lang="yaml" locale="mx">
sec1_main_title: "TE HACEMOS LA VIDA MÁS FÁCIL"
sec1_title: "¿Cómo funciona tu renta de mini bodega con box2box?"
sec1_subtitle: " "
sec1_item1_title: "Recogemos"
sec1_item1_subtitle: " "
sec1_item1_body: "Recogemos tus cosas donde nos digas, las protegemos para el transporte y nos las llevamos... Sin pausa pero sin prisa."
sec1_item2_title: "Guardamos"
sec1_item2_subtitle: " "
sec1_item2_body: "Sabemos que tus cosas te importan y estarán vigiladas 24 horas al día. Puedes relajarte y disfrutar de tu casa, tu familia, tu viaje..."
sec1_item3_title: "Devolvemos"
sec1_item3_subtitle: " "
sec1_item3_body: "Con un clic, te entregamos tus cosas. Elige los artículos que necesites de tu inventario y te los llevamos donde y cuando quieras."
video_title: " "
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/sectionOne.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/sectionOne.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/sectionOne.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/sectionOne.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/sectionOne.yaml"></i18n>
