<template>
  <div class="flex relative w-full">
    <div class="absolute left-0 mobileL:hidden mobile:hidden">
      <nuxt-img
        :provider="$config.img_provider"
        src="/sectionFive/left-big-square.svg"
        alt="leftbigsquare"
        class="w-full h-[496px] tablet:-translate-x-44 mobileL:hidden mobile:hidden"
      />
    </div>

    <div class="grid-layout section-vertical-padding grow">
      <div
        class="col-span-5 col-start-1 row-start-1 mobileL:row-start-2 mobile:row-start-2 mobileL:col-start-2 mobileL:col-span-7 mobile:col-start-1 mobile:col-span-full z-[1] mt-[72px] mobileL:mt-16 desktopL:ml-[88px] desktop:ml-[48px] mobile:mt-11 tablet:translate-x-4 mobileL:-translate-x-6 mobile:translate-x-4"
      >
        <div
          class="flex w-full h-full mobileL:justify-center mobile:justify-center relative"
        >
          <div
            class="absolute left-0 mobile:bottom-0 desktopL:hidden desktop:hidden tablet:hidden"
          >
            <nuxt-img
              :provider="$config.img_provider"
              src="/sectionFive/square-mobileL-five.svg"
              alt="squaremobilebig"
              class="w-full h-[496px] mobileL:-translate-x-28 mobile:-translate-x-20 z-0"
            />
          </div>

          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionFive/mobile.webp"
            alt="mobile"
            class="w-auto mobileL:mt-8 z-[1]"
            format="webp"
            loading="lazy"
            sizes="xl:422px lg:408px"
            width="408"
          />
        </div>
      </div>

      <div
        class="col-span-full col-start-6 mobileL:col-start-1 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full row-start-1 tablet:mt-8 mt-8 z-[2]"
      >
        <div class="flex flex-col w-full">
          <h2 class="tablet:max-w-[490px]">
            {{ $t("sec5_title") }}
          </h2>
        </div>
        <div class="flex flex-col w-full gap-2 mt-12 tablet:mt-8 mobile:mt-8">
          <h3>{{ $t("sec5_feature_1_title") }}</h3>
          <p
            class="p2 desktopL:max-w-[540px] desktop:max-w-[540px] tablet:max-w-[360px]"
          >
            {{ $t("sec5_feature_1_subtitle") }}
          </p>
        </div>

        <div
          class="flex flex-col w-full mt-4 gap-2 desktopL:max-w-[540px] desktop:max-w-[540px] tablet:max-w-[360px] mobile:mt-6"
        >
          <h3>{{ $t("sec5_feature_2_title") }}</h3>
          <p
            class="p2 desktopL:max-w-[540px] desktop:max-w-[540px] tablet:max-w-[360px]"
          >
            {{ $t("sec5_feature_2_subtitle") }}
          </p>
        </div>

        <div
          class="flex flex-col w-full mt-4 gap-2 desktopL:max-w-[540px] desktop:max-w-[540px] tablet:max-w-[360px] mobile:mt-6"
        >
          <h3>{{ $t("sec5_feature_3_title") }}</h3>
          <p
            class="p2 desktopL:max-w-[540px] desktop:max-w-[540px] tablet:max-w-[360px]"
          >
            {{ $t("sec5_feature_3_subtitle") }}
          </p>
        </div>

        <div class="flex flex-col w-full mt-6">
          <ui-button
            :arrow="true"
            class="desktopL:w-fit desktop:w-fit tablet:w-fit mobileL:w-full mobile:w-full"
            @click="handleClick"
            >{{ $t("sec5_cta") }}</ui-button
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
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/prices") });
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
sec5_title: "Tu trastero en la palma de tu mano"
sec5_feature_1_title: "Inventario 100% online"
sec5_feature_1_subtitle: "¿Quieres saber qué cosas tienes guardadas en el trastero? Muy fácil, visualízalo mediante el inventario online."
sec5_feature_2_title: "¡No pagues de más!"
sec5_feature_2_subtitle: "Deja de pagar por un trastero entero. Paga únicamente por el espacio que ocupan tus cosas."
sec5_feature_3_title: "Acceso fácil y flexible"
sec5_feature_3_subtitle: "Elige cuándo y dónde quieres que recojamos y entreguemos tus cosas."
sec5_cta: "Tarifas"
</i18n>
<i18n lang="yaml" locale="fr">
sec5_title: "Votre box de stockage dans la paume de la main"
sec5_feature_1_title: "Inventaire 100% en ligne"
sec5_feature_1_subtitle: "Vous voulez savoir quelles affaires sont stockées dans votre box ? C'est facile, il suffit de consulter votre inventaire en ligne."
sec5_feature_2_title: "Payez moins !"
sec5_feature_2_subtitle: "Ne payez plus pour un box entier. Ne payez que pour l'espace que vos affaires occupent."
sec5_feature_3_title: "Un accès facile et flexible"
sec5_feature_3_subtitle: "Choisissez le lieu et l'heure de la collecte ou de la livraison de vos affaires."
sec5_cta: "Tarifs"
</i18n>
<i18n lang="yaml" locale="it">
sec5_title: "Il tuo deposito a portata di mano "
sec5_feature_1_title: "Inventario 100% online"
sec5_feature_1_subtitle: "Vuoi sapere gli oggetti nel tuo deposito? Facile! potrai vederlo comodamente nel tuo inventario online"
sec5_feature_2_title: "Non pagare di più !"
sec5_feature_2_subtitle: "Smetti di pagare un deposito intero. Paga solo lo spazio realmente occupato!"
sec5_feature_3_title: "Accesso facile e flessibile"
sec5_feature_3_subtitle: "Scegli quando e dove vuoi che ritiriamo/consegnamo le tue cose "
sec5_cta: "Prezzi"
</i18n>
<i18n lang="yaml" locale="pt">
sec5_title: "O seu armazém na palma da sua mão"
sec5_feature_1_title: "Inventario 100% online"
sec5_feature_1_subtitle: "Quer saber que coisas guardou no seu armazém? É fácil, basta visualizá-lo utilizando o inventário online."
sec5_feature_2_title: "Não pague mais!"
sec5_feature_2_subtitle: "Pare de pagar por um armazém inteiro. Pague apenas pelo espaço que as suas coisas ocupam."
sec5_feature_3_title: "Acesso fácil e flexivél "
sec5_feature_3_subtitle: "Escolha quando e onde quer que recolhemos e entreguemos as suas coisas."
sec5_cta: "Preços"
</i18n>
<i18n lang="yaml" locale="mx">
sec5_title: "Tu mini bodega en la palma de tu mano"
sec5_feature_1_title: "Inventario 100% online"
sec5_feature_1_subtitle: "¿Quieres saber qué cosas tienes guardadas en la mini bodega? Muy fácil, visualízalo mediante el inventario online."
sec5_feature_2_title: "¡No pagues de más!"
sec5_feature_2_subtitle: "Deja de pagar por una mini bodega entera. Paga únicamente por el espacio que ocupan tus cosas."
sec5_feature_3_title: "Acceso fácil y flexible"
sec5_feature_3_subtitle: "Elige cuándo y dónde quieres que recojamos y entreguemos tus cosas."
sec5_cta: "Tarifas"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/sectionFive.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/sectionFive.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/sectionFive.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/sectionFive.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/sectionFive.yaml"></i18n>
