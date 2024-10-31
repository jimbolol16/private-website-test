<template>
  <div
    class="col-span-12 mobile:col-span-4 mobileL:col-span-8"
    :class="inHome ? 'section-vertical-padding' : ''"
  >
    <div class="flex flex-col justify-center w-full">
      <div class="absolute bg-soft w-full h-[290px] left-0 z-0"></div>
      <div class="inline-flex justify-center w-full z-[1] mt-[52px]">
        <h3
          class="mobile:max-w-[328px] mobile:text-center mobileL:text-center mobileL:max-w-[528px]"
        >
          {{ $t("sec2_title") }}
        </h3>
      </div>
      <div class="w-auto mt-10 mb-[52px] flex justify-center z-[1]">
        <div class="mobile:w-fit mobileL:w-fit w-full justify-center flex">
          <ui-button :arrow="true" @click="handleClick">
            {{ $t("sec2_cta") }}</ui-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sectionTwo",
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  props: {
    inHome: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/prices") });
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
sec2_title: "¡Conoce nuestras tarifas en alquiler de trasteros!"
sec2_cta: "Tarifas"
</i18n>
<i18n lang="yaml" locale="fr">
sec2_title: "Consultez nos tarifs de transport et de stockage!"
sec2_cta: "Tarifs"
</i18n>
<i18n lang="yaml" locale="it">
sec2_title: "Conosci le tariffe dei nostri depositi in affitto!"
sec2_cta: "Tariffe"
</i18n>
<i18n lang="yaml" locale="pt">
sec2_title: "Consulte as nossas tarifas de aluguer de armazéns!"
sec2_cta: "Tarifa"
</i18n>
<i18n lang="yaml" locale="mx">
sec2_title: "¡Conoce nuestras tarifas en renta de mini bodegas!"
sec2_cta: "Tarifas"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/sectionTwo.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/sectionTwo.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/sectionTwo.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/sectionTwo.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/sectionTwo.yaml"></i18n>
