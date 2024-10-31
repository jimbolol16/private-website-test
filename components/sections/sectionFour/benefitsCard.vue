<template>
  <div class="benefits-grid row-auto-minmax(min-content, max-content)">
    <div class="benefit-image-container row-start-1 col-start-2 col-span-1">
      <nuxt-img
        :provider="$config.img_provider"
        src="/sectionFour/box2box-title-image.webp"
        alt="box2boxtitleimage"
        loading="lazy"
        sizes="xl:151px lg:151px md:134px sm:98px xs:66px"
        width="151"
      />
    </div>
    <div class="benefit-image-container row-start-1 col-start-3 col-span-1">
      <nuxt-img
        :provider="$config.img_provider"
        src="/sectionFour/warehouse-title-image.webp"
        alt="warehousetitleimage"
        loading="lazy"
        sizes="xl:145px lg:145px md:134px sm:98px xs:66px"
        width="145"
      />
    </div>
    <div
      class="z-[2] col-start-1 col-span-2 row-start-2 row-span-1 bg-white"
    ></div>
    <div
      class="z-[3] col-start-2 col-span-1 row-start-2 row-span-1 bg-soft/50"
    ></div>
    <div
      class="z-[3] col-start-3 col-span-1 row-start-2 row-span-1 bg-white rounded-tr-[12px]"
    ></div>
    <div
      class="z-[3] benefit-list-border shadow-input rounded-[12px] col-start-1 col-end-4 benefits-grid row-start-2 desktop:gap-y-8 desktopL:gap-y-8 tablet:gap-y-8 mobile:gap-y-8 mobileL:gap-y-8 pt-7 pl-10 mobileL:pl-4 mobile:pl-4 pb-14"
    >
      <p
        class="table-description col-start-1 col-span-1 row-start-1 row-span-1 flex items-center"
      >
        {{ $t("sec4_table_title") }}
      </p>
      <div
        class="col-start-2 col-span-1 row-start-1 row-span-1 flex items-center justify-center"
      >
        <logo-icon
          class="mobile:w-[64px] mobileL:w-[96px] z-[5] fill-electric"
        ></logo-icon>
      </div>
      <p
        class="table-subtitle col-start-3 col-span-1 row-start-1 row-span-1 flex items-center justify-center text-center"
      >
        {{ $t("sec4_table_competence_title") }}
      </p>
      <div
        v-for="(service, index) in services"
        :key="index"
        class="col-start-1 col-end-4 benefits-grid z-[5]"
      >
        <p class="col-start-1 col-span-1 my-auto table-content">
          {{ service.text }}
          <span class="font-extrabold text-electric">{{
            service.emphasis
          }}</span>
        </p>
        <div class="col-start-2 col-span-1 flex items-center justify-center">
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionFour/check-square.svg"
            alt="checksquare"
            width="33px"
            height="33px"
          />
        </div>
        <div class="col-start-3 col-span-1 flex items-center justify-center">
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionFour/cross-square.svg"
            alt="crosssquare"
            width="33px"
            height="33px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "benefitsCard",
  components: {
    "logo-icon": async () => await import("@/components/icons/LogoIcon.vue"),
  },
  data() {
    return {
      services: [
        {
          text: this.$t("sec4_table_row_1_main"),
          emphasis: this.$t("sec4_table_row_1_highlight"),
        },
        {
          text: this.$t("sec4_table_row_2_main"),
          emphasis: this.$t("sec4_table_row_2_highlight"),
        },
        {
          text: this.$t("sec4_table_row_3_main"),
          emphasis: this.$t("sec4_table_row_3_highlight"),
        },
        {
          text: this.$t("sec4_table_row_4_main"),
          emphasis: this.$t("sec4_table_row_4_highlight"),
        },
        {
          text: this.$t("sec4_table_row_5_main"),
          emphasis: this.$t("sec4_table_row_5_highlight"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.benefits-grid {
  @apply grid desktopL:grid-cols-[minmax(0,_1fr)_442px_442px] desktop:grid-cols-[minmax(0,_1fr)_328px_328px] tablet:grid-cols-[minmax(0,_1fr)_240px_240px] mobileL:grid-cols-[minmax(0,_1fr)_120px_120px] mobile:grid-cols-[minmax(0,_1fr)_90px_90px];
}

.benefit-list-border {
  @apply border-solid border-[1px] border-[#EDEDED];
}

.benefit-image-border {
  @apply border-solid border-t-[1px] border-x-[1px] border-[#EDEDED];
}
.benefit-image-container {
  @apply flex items-center justify-center desktopL:w-[256px] desktop:w-[256px] tablet:w-[200px] mobileL:w-[116px] mobile:w-[84px] bg-white rounded-[12px] shadow-input desktopL:p-8 desktopL:mx-auto desktop:p-8 desktop:mx-auto tablet:p-8 tablet:mx-auto mobileL:p-2 mobileL:mx-auto mobile:p-2 mobile:mx-auto rounded-b-none benefit-image-border;
}

.table-subtitle {
  @apply font-roboto font-normal text-dark/50 text-[12px] leading-[15px] mobile:text-center tablet:text-[18px] tablet:leading-[25px] desktop:text-[18px] desktop:leading-[25px];
}

.table-description {
  @apply font-roboto font-normal text-dark/50 text-[14px] leading-[25px] tablet:text-[18px] tablet:leading-[25px] desktop:text-[18px] desktop:leading-[25px];
}

.table-content {
  @apply font-roboto font-normal text-dark text-[14px] leading-[22px] tablet:text-[18px] tablet:leading-[25px] desktop:text-[18px] desktop:leading-[25px];
}
</style>
<i18n lang="yaml" locale="es">
sec4_table_title: "Beneficios"
sec4_table_competence_title: "Trasteros tradicionales"
sec4_table_row_1_main: "Servicio de recogida"
sec4_table_row_1_highlight: "a domicilio"
sec4_table_row_2_main: "Paga únicamente por el"
sec4_table_row_2_highlight: "espacio que usas"
sec4_table_row_3_main: "Servicio de devolución"
sec4_table_row_3_highlight: "cuando quieras"
sec4_table_row_4_main: "Cero costes adicionales."
sec4_table_row_4_highlight: "Sin sorpresas"
sec4_table_row_5_main: "Emisiones de C0₂."
sec4_table_row_5_highlight: "Las reducimos"
</i18n>
<i18n lang="yaml" locale="fr">
sec4_table_title: "Avantages"
sec4_table_competence_title: "Stockage traditionnel"
sec4_table_row_1_main: "Service de transport"
sec4_table_row_1_highlight: "à domicile"
sec4_table_row_2_main: "Ne payez que pour l'"
sec4_table_row_2_highlight: "espace que vous utilisez"
sec4_table_row_3_main: "Service de livraison"
sec4_table_row_3_highlight: "quand vous voulez"
sec4_table_row_4_main: "Aucun coût supplémentaire."
sec4_table_row_4_highlight: "Pas de surprise"
sec4_table_row_5_main: "Émissions de C0₂."
sec4_table_row_5_highlight: "Nous les réduisons"
</i18n>
<i18n lang="yaml" locale="it">
sec4_table_title: "Vantaggi"
sec4_table_competence_title: "Depositi classici "
sec4_table_row_1_main: "Servizio di ritiro"
sec4_table_row_1_highlight: "Domicilio"
sec4_table_row_2_main: "Paga solo "
sec4_table_row_2_highlight: "lo spazio che realemente occuperai"
sec4_table_row_3_main: "Servizio di consegna"
sec4_table_row_3_highlight: "quando vuoi "
sec4_table_row_4_main: "nessun costo adizionale"
sec4_table_row_4_highlight: "Senza sorprese"
sec4_table_row_5_main: "Emissioni di C0₂"
sec4_table_row_5_highlight: "le compensiamo"
</i18n>
<i18n lang="yaml" locale="pt">
sec4_table_title: "Vantagens"
sec4_table_competence_title: "Armazéns tradicionais"
sec4_table_row_1_main: "Serviço de recolha"
sec4_table_row_1_highlight: "Domicilio"
sec4_table_row_2_main: "Pague só por"
sec4_table_row_2_highlight: "espaço que utilizar"
sec4_table_row_3_main: "Serviço de devolução"
sec4_table_row_3_highlight: "quando quiser"
sec4_table_row_4_main: "Zero custos adicionais"
sec4_table_row_4_highlight: "Sem surpresas"
sec4_table_row_5_main: "Emissões de C0₂"
sec4_table_row_5_highlight: "Reduzimos"
</i18n>
<i18n lang="yaml" locale="mx">
sec4_table_title: "Beneficios"
sec4_table_competence_title: "Mini bodegas tradicionales"
sec4_table_row_1_main: "Servicio de recogida"
sec4_table_row_1_highlight: "a domicilio"
sec4_table_row_2_main: "Paga únicamente por el"
sec4_table_row_2_highlight: "espacio que usas"
sec4_table_row_3_main: "Servicio de devolución"
sec4_table_row_3_highlight: "cuando quieras"
sec4_table_row_4_main: "Cero costes adicionales."
sec4_table_row_4_highlight: "Sin sorpresas"
sec4_table_row_5_main: "Emisiones de C0₂."
sec4_table_row_5_highlight: "Las reducimos"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/benefitsCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/benefitsCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/benefitsCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/benefitsCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/benefitsCard.yaml"
></i18n>
