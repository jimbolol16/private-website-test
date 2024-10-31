<template>
  <div class="w-[383px] h-[256px] bg-white shadow-input relative">
    <!-- Absolute icon with quotation marks -->
    <div class="absolute h-14 w-14 bg-electric rounded-full ml-8 -top-[27px]">
      <div class="flex w-full justify-center items-center h-full">
        <nuxt-img
          :provider="$config.img_provider"
          src="/reviewSection/quotes.svg"
          alt="quotes"
          width="19px"
          height="18px"
        />
      </div>
    </div>

    <div class="flex flex-col w-full pl-8 pr-4 pt-4 min-h-[208px]">
      <div class="self-end pb-5">
        <div
          class="h-8 w-8 rounded-full relative border-[1px] border-[#EAEFF3]"
        >
          <nuxt-img
            :provider="$config.img_provider"
            src="/reviewSection/google.svg"
            alt="googleicon"
            class="inline-block bg-cover rounded-[50%] absolute p-[6px]"
          />
        </div>
      </div>
      <div class="inline-flex gap-1">
        <template v-for="item in stars">
          <nuxt-img
            :provider="$config.img_provider"
            src="/reviewSection/star.svg"
            alt="star"
            class="w-4 h-4"
            :key="item"
          />
        </template>
      </div>
      <p class="p2 mt-4">
        <slot name="body"></slot>
      </p>
    </div>
    <div class="w-full border-[#EAEFF3] border-solid border-[1px] mt-4"></div>
    <div class="inline-flex items-center w-full pl-8 pr-4 py-4 gap-3">
      <!-- Avatar -->
      <div class="h-9 w-9 rounded-full relative">
        <div
          class="inline-flex font-bold text-xl rounded-full bg-salmon h-full w-full text-center items-center justify-center"
        >
          {{ firstLetter }}
        </div>
      </div>
      <div class="flex flex-col align-bottom">
        <span class="name">{{ customer }}</span>
        <span class="subname">{{ $t("card_title") }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sectionCard",
  props: {
    stars: {
      type: Number,
      default: 1,
    },
    customer: {
      type: String,
      default: null,
    },
  },
  computed: {
    firstLetter() {
      return this.customer[0] || "";
    },
  },
};
</script>
<style lang="scss" scoped>
.name {
  @apply font-manrope text-[#453232] text-[14px] font-[600] leading-4;
}
.subname {
  @apply font-manrope text-[#797979] text-[12px] font-[400] leading-4;
}
</style>
<i18n lang="yaml" locale="es">
card_title: "Cliente"
</i18n>
<i18n lang="yaml" locale="fr">
card_title: "Client"
</i18n>
<i18n lang="yaml" locale="it">
card_title: "Cliente"
</i18n>
<i18n lang="yaml" locale="pt">
card_title: "Cliente"
</i18n>
<i18n lang="yaml" locale="mx">
card_title: "Cliente"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/sectionCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/sectionCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/sectionCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/sectionCard.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/sectionCard.yaml"
></i18n>
