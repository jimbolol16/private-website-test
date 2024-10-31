<template>
  <div
    class="mobile:col-span-4 mobileL:col-span-8 col-span-12 section-vertical-padding"
  >
    <!-- Background image -->
    <div class="absolute right-0 z-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-benefits.svg"
            alt="gradbenefits"
            class="max-h-[2256px] opacity-60"
            sizes="xl:608px lg:608px"
            width="608"
          />
        </div>
      </div>
    </div>
    <!-- Card 1-->
    <div class="subgrid-layout mobile:mb-14 mobileL:mb-12">
      <!-- image section-->
      <div
        class="flex col-span-6 col-start-1 row-start-1 mobileL:row-start-1 mobile:row-start-1 mobileL:col-start-1 mobileL:col-span-8 mobile:col-span-4 mobile:col-start-1 z-[1] mobileL:justify-center mobileL:items-center mobile:justify-center mobile:items-center mb-12"
      >
        <div
          class="w-[456px] h-[557px] mobileL:w-[446px] mobileL:h-[522px] mobile:w-[262px] mobile:h-[307px]"
        >
          <nuxt-img
            :provider="$config.img_provider"
            src="/business/sectionFiveImage1.png"
            class="w-full"
            alt="sectionfiveimage"
          />
        </div>
      </div>

      <!-- Text section -->
      <div
        class="flex flex-col col-span-6 col-start-7 mobileL:col-start-1 mobileL:row-start-2 mobileL:col-span-8 mobile:col-span-4 mobile:row-start-2 mobile:col-start-1 row-start-1 z-[2] justify-center items-left"
      >
        <h3
          class="mb-4 max-w-[552px] text-[54px] leading-[64px] mobile:leading-[38px] mobile:text-[34px]"
        >
          {{ $t("bus_sec5_title_card1") }}
        </h3>
        <p class="p2 mb-8">
          {{ $t("bus_sec5_body_card1") }}
        </p>
        <div
          class="flex justify-start items-left mobileL:justify-center mobileL:items-center mobile:justify-center mobile:items-center mobileL:mx-auto"
        >
          <ui-button
            :arrow="true"
            class="w-fit"
            v-if="$t('bus_sec5_button_card1') !== ' '"
          >
            {{ $t("bus_sec5_button_card1") }}</ui-button
          >
        </div>
      </div>
    </div>

    <!-- Card 2-->
    <div class="subgrid-layout mobile:my-14 mobileL:my-12">
      <!-- Text section -->
      <div
        class="flex flex-col col-span-6 col-start-1 mobileL:col-start-1 mobileL:row-start-2 mobileL:col-span-8 mobile:col-span-4 mobile:row-start-2 mobile:col-start-1 row-start-1 z-[2] justify-center items-left"
      >
        <h3
          class="max-w-[552px] mobileL:max-w-[536px] mobile:max-w-[328px] text-[54px] leading-[64px] mobile:leading-[38px] mobile:text-[34px] mb-4"
        >
          {{ $t("bus_sec5_title_card2") }}
        </h3>
        <p class="p2 mb-8">
          {{ $t("bus_sec5_body_card2") }}
        </p>
        <div
          class="flex justify-start items-left mobileL:justify-center mobileL:items-center mobile:justify-center mobile:items-center mobileL:mx-auto"
        >
          <ui-button
            :arrow="true"
            class="w-fit"
            v-if="$t('bus_sec5_button_card2') !== ' '"
          >
            {{ $t("bus_sec5_button_card2") }}</ui-button
          >
        </div>
      </div>
      <!-- image section-->
      <div
        class="flex col-span-6 col-start-7 row-start-1 mobileL:row-start-1 mobile:row-start-1 mobileL:col-start-1 mobileL:col-span-8 mobile:col-span-4 mobile:col-start-1 z-[1] mobileL:justify-center mobileL:items-center mobile:justify-center mobile:items-center mb-12"
      >
        <div
          class="w-[456px] h-[557px] mobileL:w-[446px] mobileL:max-w-[536px] mobile:max-w-[328px] mobileL:h-[522px] mobile:w-[262px] mobile:h-[307px]"
        >
          <nuxt-img
            :provider="$config.img_provider"
            src="/business/sectionFiveImage2.png"
            class="w-full"
            alt="sectionfiveimagetwo"
          />
        </div>
      </div>
    </div>
    <!-- Card 3-->
    <div class="subgrid-layout mobile:mt-14 mobileL:mt-12">
      <!-- image section-->
      <div
        class="flex col-span-6 col-start-1 row-start-1 mobileL:row-start-1 mobile:row-start-1 mobileL:col-start-1 mobileL:col-span-8 mobile:col-span-4 mobile:col-start-1 z-[1] mobileL:justify-center mobileL:items-center mobile:justify-center mobile:items-center mb-12"
      >
        <div
          class="w-[456px] h-[557px] mobileL:w-[446px] mobileL:h-[522px] mobile:w-[262px] mobile:h-[307px]"
        >
          <nuxt-img
            :provider="$config.img_provider"
            src="/business/sectionFiveImage3.png"
            class="w-full"
            alt="sectionfiveimagethree"
          />
        </div>
      </div>

      <!-- Text section -->
      <div
        class="flex flex-col col-span-6 col-start-7 mobileL:col-start-1 mobileL:row-start-2 mobileL:col-span-8 mobile:col-span-4 mobile:row-start-2 mobile:col-start-1 row-start-1 z-[2] justify-center items-left mobile:mb-[82px]"
      >
        <h3
          class="mobile:mt-6 mobileL:mt-6 max-w-[552px] mobileL:max-w-[536px] mobile:max-w-[328px] text-[54px] leading-[64px] mobile:leading-[38px] mobile:text-[34px] mb-4"
        >
          {{ $t("bus_sec5_title_card3") }}
        </h3>
        <p class="p2 mb-8">
          {{ $t("bus_sec5_body_card3") }}
        </p>
        <div
          class="flex justify-start items-left mobileL:justify-center mobileL:items-center mobile:justify-center mobile:items-center mobileL:mx-auto mb-7"
        >
          <ui-button
            :arrow="true"
            class="w-fit"
            v-if="$t('bus_sec5_button_card3') !== ' '"
          >
            {{ $t("bus_sec5_button_card3") }}</ui-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sectionFive",
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
};
</script>

<i18n lang="yaml" locale="es">
bus_sec5_title_card1: "Servicio de trasteros a domicilio "
bus_sec5_body_card1: "El equipo de trasporte acude a recoger tus pertenencias, desde mercancía, mobiliario hasta archivos y documentos."
bus_sec5_button_card1: " "
bus_sec5_title_card2: "Tu inventario online disponible para ti"
bus_sec5_body_card2: "¿Te precupa perder el control de tus pertenencias? Tus objetos quedan registrados digitalmente, disponibles 24h."
bus_sec5_button_card2: " "
bus_sec5_title_card3: "Pide la devolución cuando desees"
bus_sec5_body_card3: "Nuestro equipo almacena tus objetos personales y te los devuelve cuándo y dónde lo necesites. "
bus_sec5_button_card3: " "
</i18n>
<i18n lang="yaml" locale="fr">
bus_sec5_title_card1: "Service de stockage à domicile"
bus_sec5_body_card1: "L'équipe de transport vient chercher vos biens, qu'il s'agisse de marchandises, de meubles ou de dossiers et documents."
bus_sec5_button_card1: " "
bus_sec5_title_card2: "Votre inventaire en ligne à votre disposition"
bus_sec5_body_card2: "Vous craignez de perdre le contrôle de vos biens ? Vos articles sont enregistrés numériquement et sont disponibles 24 heures sur 24."
bus_sec5_button_card2: " "
bus_sec5_title_card3: "Demandez un retour quand vous le souhaitez"
bus_sec5_body_card3: "Notre équipe stocke vos objets personnels et vous les rend quand et où vous en avez besoin."
bus_sec5_button_card3: " "
</i18n>
<i18n lang="yaml" locale="it">
bus_sec5_title_card1: ""
bus_sec5_body_card1: ""
bus_sec5_button_card1: ""
bus_sec5_title_card2: ""
bus_sec5_body_card2: ""
bus_sec5_button_card2: ""
bus_sec5_title_card3: ""
bus_sec5_body_card3: ""
bus_sec5_button_card3: ""
</i18n>
<i18n lang="yaml" locale="pt">
bus_sec5_title_card1: "Servço de armazéns a domicilio"
bus_sec5_body_card1: "A equipa de transporte vem recolher os seus pertences, desde a mercadoria e mobiliário até aos ficheiros e documentos."
bus_sec5_button_card1: " "
bus_sec5_title_card2: "O seu inventário online à sua disposição"
bus_sec5_body_card2: "Preocupado em perder o controlo dos seus pertences? Os seus objectos são registados digitalmente, disponíveis 24 horas por dia."
bus_sec5_button_card2: " "
bus_sec5_title_card3: "Solicite a devolução quando precise"
bus_sec5_body_card3: "A nossa equipa armazena os seus bens pessoais e devolve-lhos quando e onde precisar deles. "
bus_sec5_button_card3: " "
</i18n>
<i18n lang="yaml" locale="mx">
bus_sec5_title_card1: ""
bus_sec5_body_card1: ""
bus_sec5_button_card1: ""
bus_sec5_title_card2: ""
bus_sec5_body_card2: ""
bus_sec5_button_card2: ""
bus_sec5_title_card3: ""
bus_sec5_body_card3: ""
bus_sec5_button_card3: ""
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/businessSectionFive.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/businessSectionFive.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/businessSectionFive.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/businessSectionFive.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/businessSectionFive.yaml"
></i18n>
