<template>
  <div class="flex flex-row items-center" v-if="phoneSelector">
    <nuxt-img
      :alt="`${countryData[1]}flag`"
      :src="importImage(countryData[1])"
      class="w-4 h-4"
    />
    <div class="inline-flex" :class="{ 'hide-phone': hidePhonePrefix }">
      <div class="pl-2" v-if="!viewName">{{ countryData[0] }}</div>
      <p
        class="font-roboto font-medium text-[18px] leading-[25px] pl-2 text-electric/40"
      >
        {{ `+${countryData[2]}` }}
      </p>
    </div>
  </div>
  <div v-else class="flex flex-row w-max">
    <nuxt-img
      :provider="$config.img_provider"
      :alt="`${localeConfiguration.flag}flag`"
      class="pr-1 w-[19px] h-auto"
      :src="importImage(localeConfiguration.flag)"
    />
    <slot>{{ $t(localeConfiguration.code) }}</slot>
  </div>
</template>

<script>
export default {
  name: "uiLanguage",
  props: {
    localeConfiguration: {
      type: Object,
      default: () => {
        return { flag: "es", code: "es-en" };
      },
    },
    to: {
      type: String,
      default: "",
    },
    viewName: {
      type: Boolean,
      default: false,
    },
    countryData: {
      type: Array,
      default: () => ["Spain (España)", "es", "34"],
    },
    phoneSelector: {
      type: Boolean,
      default: false,
    },
    hidePhonePrefix: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    importImage(countryFlag) {
      if (countryFlag) {
        return `/flags/${countryFlag}.svg`;
      }
      return "";
    },
  },
};
</script>
<style lang="scss" scoped>
.hide-phone {
  @apply mobile:hidden;
}
</style>
<i18n lang="yaml" locale="es">
es: "Español"
pt: "Portugués"
fr: "Francés"
it: "Italiano"
mx: "Español"
es-en: "Inglés"
pt-en: "Inglés"
fr-en: "Inglés"
it-en: "Inglés"
mx-en: "Inglés"
</i18n>
<i18n lang="yaml" locale="fr">
es: "Espagnol"
pt: "Portugués"
fr: "Français"
it: "Italian"
mx: "Español"
es-en: "Anglais"
pt-en: "Anglais"
fr-en: "Anglais"
it-en: "Anglais"
mx-en: "Anglais"
</i18n>
<i18n lang="yaml" locale="pt">
es: "Español"
pt: "Portugués"
fr: "Francés"
it: "Italiano"
mx: "Español"
es-en: "Inglés"
pt-en: "Inglés"
fr-en: "Inglés"
it-en: "Inglés"
mx-en: "Inglés"
</i18n>
<i18n lang="yaml" locale="it">
es: "Spagnolo"
pt: "Portugaise"
fr: "Francette"
it: "Italiano"
mx: "Español"
es-en: "Inglese"
pt-en: "Inglese"
fr-en: "Inglese"
it-en: "Inglese"
mx-en: "Inglese"
</i18n>
<i18n lang="yaml" locale="mx">
es: "Español"
pt: "Portugués"
fr: "Francés"
it: "Italiano"
mx: "Español"
es-en: "Inglés"
pt-en: "Inglés"
fr-en: "Inglés"
it-en: "Inglés"
mx-en: "Inglés"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/components/uiLanguage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/components/uiLanguage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/components/uiLanguage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/components/uiLanguage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/components/uiLanguage.yaml"></i18n>
