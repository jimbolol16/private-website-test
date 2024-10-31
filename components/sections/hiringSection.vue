<template>
  <div class="subgrid-layout my-6" id="mainSection">
    <h3
      class="col-span-full col-start-1 row-start-1 flex justify-center z-[1] mb-28 mobileL:mb-14 mobile:mb-14"
      v-if="displayTitle"
    >
      {{ $t(`title_${routePath}`, { city: city.display_name }) }}
    </h3>
    <div
      class="col-span-4 col-start-1 mobileL:col-start-2 mobileL:col-span-6 mobileL:row-start-2 mobile:col-start-1 mobile:col-span-full mobile:row-start-2 row-start-2 z-[1] desktopL:border-r-[1px] desktop:border-r-[1px] tablet:border-r-[1px]"
    >
      <div class="flex flex-col w-full p-4">
        <div class="flex w-full justify-center items-center">
          <nuxt-img
            :provider="$config.img_provider"
            src="/hiringSection/laptop.webp"
            alt="support-team-online"
            class="w-auto h-[100px] mb-6"
            sizes="xl:120px lg:120px md:120px sm:120px xs:120px"
            width="120"
          />
        </div>
        <p class="uppercase">{{ $t("box_one_title") }}</p>
        <p class="font-roboto font-normal text-dark/60 text-[16px]">
          {{ $t("box_one_body") }}
        </p>
        <div class="flex justify-center items-center w-full mt-4">
          <ui-button size="small" :arrow="true" @click="handleClick">
            {{ $t("box_one_cta") }}
          </ui-button>
        </div>
      </div>
    </div>

    <div
      class="col-span-4 col-start-5 mobileL:col-start-2 mobileL:col-span-6 mobileL:row-start-3 mobile:col-start-1 mobile:col-span-full mobile:row-start-3 row-start-2 z-[1] desktopL:border-r-[1px] desktop:border-r-[1px] tablet:border-r-[1px] mobileL:mt-3 mobile:mt-3"
    >
      <div class="flex flex-col w-full p-4">
        <div class="flex w-full justify-center items-center">
          <nuxt-img
            :provider="$config.img_provider"
            src="/hiringSection/person.webp"
            alt="support-team-phone"
            class="w-auto h-[100px] mb-6"
            sizes="xl:120px lg:120px md:120px sm:120px xs:120px"
            width="120"
          />
        </div>
        <p class="uppercase">{{ $t("box_two_title") }}</p>
        <p class="font-roboto font-normal text-dark/60 text-[16px]">
          {{ $t("box_two_body") }}
        </p>
        <div class="flex justify-center items-center w-full mt-4">
          <a
            class="font-medium flex flex-row items-center rounded-[4px] px-8 py-3 bg-electric hover:bg-[#2E48EC] focus:ring-electric/50 focus:ring-4 text-white stroke-white justify-center mobileL:w-full mobile:w-full"
            :href="`tel:${city.phone}`"
            >{{ $t("box_two_cta") }}</a
          >
        </div>
      </div>
    </div>

    <div
      class="col-span-4 col-start-9 mobileL:col-start-2 mobileL:col-span-6 mobileL:row-start-4 mobile:col-start-1 mobile:col-span-full mobile:row-start-4 row-start-2 z-[1] mobileL:w-full mobile:w-full"
    >
      <div class="flex flex-col w-full p-4">
        <div class="flex w-full justify-center items-center">
          <nuxt-img
            :provider="$config.img_provider"
            src="/hiringSection/phone.webp"
            alt="support-team-email"
            class="w-auto h-[100px] mb-6"
            sizes="xl:120px lg:120px md:120px sm:120px xs:120px"
            width="120"
          />
        </div>
        <p class="uppercase">{{ $t("box_three_title") }}</p>
        <p class="font-roboto font-normal text-dark/60 text-[16px]">
          {{ $t("box_three_body") }}
        </p>
        <div class="flex justify-center items-center w-full mt-4">
          <a
            class="font-medium flex flex-row items-center rounded-[4px] px-8 py-3 bg-electric hover:bg-[#2E48EC] focus:ring-electric/50 focus:ring-4 text-white stroke-white justify-center mobileL:w-full mobile:w-full"
            :href="`mailto:${city.email}`"
            >{{ $t("box_three_cta") }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "hiringSection",
  props: {
    displayTitle: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  computed: {
    ...mapState("landingCities", {
      city: (state) => state.city,
    }),
    routePath() {
      const routeName = this.$route.name.split("-")[0];
      return ["warehouses", "storages"].indexOf(routeName) !== -1
        ? routeName
        : "warehouses";
    },
  },
  methods: {
    handleClick() {
      // Set the selected city
      this.$store.dispatch(`pricesWizard/SET_CITY_ON_LANDING`, this.city.city);
      this.$store.dispatch("pricesWizard/SET_CITY", this.city.city);
      this.handleCityClick();
    },
    handleCityClick() {
      this.$router.push({ path: this.localePath("/prices") });
    },
  },
};
</script>

<i18n lang="yaml" locale="es">
title_warehouses: "Contrata tu trastero en {city} ahora"
title_storages: "Contrata tu guardamuebles en {city} ahora"
box_one_title: "Online"
box_one_body: "¡Calcula tu presupuesto en 3 cómodos pasos y en menos de 2 minutos!"
box_one_cta: "Precios"
box_two_title: "Teléfono"
box_two_body: "Atención al cliente de Lunes a Sábado. ¡Llámanos y pide tu presupuesto a medida!"
box_two_cta: "Llámanos"
box_three_title: "Correo electrónico"
box_three_body: "Contacta con nosotros a través de nuestro email y resolveremos todas tus dudas."
box_three_cta: "Escríbenos"
</i18n>
<i18n lang="yaml" locale="fr">
title_warehouses: "Louez votre box de stockage à {city} maintenant"
title_storages: "Louez votre garde meuble à {city} maintenant"
box_one_title: "En ligne"
box_one_body: "Calculez votre devis en 3 étapes faciles et en moins de 2 minutes !"
box_one_cta: "Tarifs"
box_two_title: "Téléphone"
box_two_body: "Service clientèle du Lundi au Samedi, appelez-nous et demandez votre devis sur mesure!"
box_two_cta: "Appelez-nous"
box_three_title: "E-mail"
box_three_body: "Contactez-nous par e-mail et nous résoudrons tous vos doutes."
box_three_cta: "Écrivez-nous"
</i18n>
<i18n lang="yaml" locale="it">
title_warehouses: "Affitta il tuo deposito a {city}"
title_storages: "Affitta il tuo deposito mobili a {city}"
box_one_title: "Online"
box_one_body: "Calcola il tuo preventivo in 3 semplici passi e in meno di 2 minuti!"
box_one_cta: "Prezzi"
box_two_title: "Telefono"
box_two_body: "Servizio clienti dal Lunedì al Sabato, chiamaci e richiedi il tuo preventivo su misura!"
box_two_cta: "Chiamaci"
box_three_title: "E-mail"
box_three_body: "Contattaci tramite la nostra e-mail e risolveremo tutti i vostri dubbi."
box_three_cta: "Scrivici"
</i18n>
<i18n lang="yaml" locale="pt">
title_warehouses: "Alugue agora o seu armazén em {city}"
title_storages: "Alugue agora o seu guarda-móveis em {city}"
box_one_title: "Online"
box_one_body: "Calcule o seu orçamento em 3 passos simples e em menos de 2 minutos!"
box_one_cta: "Preços"
box_two_title: "Telefone"
box_two_body: "Apoio ao cliente de Segunda a Sexta, ligue-nos e peça um orçamento personalizado!"
box_two_cta: "Telefone-nos"
box_three_title: "E-mail"
box_three_body: "Contacte-nos através do nosso e-mail e resolveremos todas as suas dúvidas."
box_three_cta: "Escreva-nos"
</i18n>
<i18n lang="yaml" locale="mx">
title_warehouses: "Contrata tu mini bodega en {city} ahora"
title_storages: "Contrata tu mini bodega en {city} ahora"
box_one_title: "Online"
box_one_body: "¡Calcula tu presupuesto en 3 cómodos pasos y en menos de 2 minutos!"
box_one_cta: "Precios"
box_two_title: "Teléfono"
box_two_body: "Atención al cliente de Lunes a Sábado. ¡Llámanos y pide tu presupuesto a medida!"
box_two_cta: "Llámanos"
box_three_title: "Correo electrónico"
box_three_body: "Contacta con nosotros a través de nuestro email y resolveremos todas tus dudas."
box_three_cta: "Escríbenos"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/hiringSection/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/hiringSection/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/hiringSection/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/hiringSection/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/hiringSection/en_mx.yaml"
></i18n>
