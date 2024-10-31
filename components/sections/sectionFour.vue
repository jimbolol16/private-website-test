<template>
  <div class="section-vertical-padding mobile:col-span-4 col-span-full">
    <!-- Background image -->
    <div class="absolute right-0 z-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-benefits.svg"
            alt="benefitsbackground"
            class="max-h-[2256px] opacity-60"
            sizes="xl:608px lg:608px"
            width="608"
          />
        </div>
      </div>
    </div>
    <div class="subgrid-layout bg-white">
      <div
        class="col-span-full desktop:row-start-1 desktopL:row-start-1 tablet:row-start-2 mobile:row-start-1 mobileL:row-start-1"
      >
        <h4 class="uppercase">{{ $t("sec4_main_title") }}</h4>
      </div>
      <div
        class="desktopL:col-span-6 desktop:col-span-8 tablet:col-span-10 mobile:col-span-4 mt-2 desktopL:row-start-2 desktop:row-start-2 tablet:row-start-3 col-start-1 mobile:row-start-2 mobileL:row-start-2 mobileL:col-span-8"
      >
        <h2 class="max-w-[712px]">
          {{ $t("sec4_title") }}
        </h2>
      </div>
      <div
        class="desktopL:col-span-4 desktop:col-span-5 tablet:col-span-7 mobile:col-span-4 mt-4 desktopL:row-start-3 desktop:row-start-3 tablet:row-start-4 mobile:row-start-3 mobileL:row-start-3 mobileL:col-span-8"
      >
        <p class="p2 max-w-[472px]">
          {{ $t("sec4_subtitle") }}
        </p>
      </div>

      <div
        class="desktopL:col-span-12 desktopL:row-start-4 desktop:col-span-12 tablet:col-span-12 mobile:row-start-4 mobile:col-span-4 mt-12 z-[5] desktop:row-start-4 tablet:row-start-5 mobileL:row-start-4 mobileL:col-span-8"
      >
        <div
          class="absolute bg-soft w-full h-[310px] left-0 z-0 mt-[264px] mobileL:mt-[174px] mobile:hidden"
        ></div>
        <benefits-card></benefits-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sectionFour",
  components: {
    "benefits-card": async () =>
      await import("@/components/sections/sectionFour/benefitsCard.vue"),
  },
};
</script>
<i18n lang="yaml" locale="es">
sec4_main_title: "DISFRUTA TU TIEMPO LIBRE COMO TÚ QUIERAS"
sec4_title: "Tus cosas no pesan si las llevamos nosotros ¡garantizado!"
sec4_subtitle: "Sabemos que tu tiempo es valioso. Por eso, nos encargamos del trabajo duro"
</i18n>
<i18n lang="yaml" locale="fr">
sec4_main_title: "PROFITEZ DE VOTRE TEMPS LIBRE COMME VOUS LE SOUHAITEZ"
sec4_title: "La vie est belle quand nous portons les objets lourds à votre place"
sec4_subtitle: "Nous savons que votre temps est précieux. C'est pourquoi nous nous occupons du travail difficile."
</i18n>
<i18n lang="yaml" locale="it">
sec4_main_title: "SFRUTTA IL TUO TEMPO LIBERO COME PIÙ TI PIACE"
sec4_title: "Le tue cose non pesano se le carichiamo noi!"
sec4_subtitle: "Sappiamo che il tuo tempo é importante. Per questo, ci occupiamo noi del lavoro sporco!"
</i18n>
<i18n lang="yaml" locale="pt">
sec4_main_title: "Desfrute do seu tempo livre como quiser"
sec4_title: "As suas coisas não pesam se somos nós a levá-las!"
sec4_subtitle: "Sabemos que o seu tempo é valioso. Por isso, nós fazemos o trabalho duro"
</i18n>
<i18n lang="yaml" locale="mx">
sec4_main_title: "DISFRUTA TU TIEMPO LIBRE COMO TÚ QUIERAS"
sec4_title: "Tus cosas no pesan si las llevamos nosotros ¡garantizado!"
sec4_subtitle: "Sabemos que tu tiempo es valioso. Por eso, nos encargamos del trabajo duro"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/sectionFour.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/sectionFour.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/sectionFour.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/sectionFour.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/sectionFour.yaml"></i18n>
