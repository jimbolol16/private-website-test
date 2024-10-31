<template>
  <div
    class="fixed bottom-0 right-0 mr-3 mb-3 z-[99999]"
    :class="{
      'desktopL:hidden': localeMetadata.country !== 'mx',
      'desktop:hidden': localeMetadata.country !== 'mx',
      'tablet:hidden': localeMetadata.country !== 'mx',
      'mobileL:hidden': localeMetadata.country !== 'mx',
    }"
  >
    <a
      :href="`https://wa.me/${$t('wha_phone')}?text=${$t('wha_text')}`"
      target="_blank"
    >
      <nuxt-img
        :provider="$config.img_provider"
        src="/wa.svg"
        alt="whatsapp"
        class="w-16 h-16"
      />
    </a>
  </div>
</template>
<script>
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "uiWhatsappWidget",
  mixins: [localesMetadata],
};
</script>
<i18n lang="yaml" locale="es">
wha_phone: "+34919033033"
wha_text: "Hola, solicito información sobre vuestro servicio."
</i18n>
<i18n lang="yaml" locale="fr">
wha_phone: "+33626565474"
wha_text: "Bonjour, je demande des informations sur votre service."
</i18n>
<i18n lang="yaml" locale="it">
wha_phone: "+390282942526"
wha_text: "Salve, Salve, sto richiedendo informazioni sul vostro servizio."
</i18n>
<i18n lang="yaml" locale="pt">
wha_phone: "+351210203366"
wha_text: "Olá, estou a pedir mais informações sobre o vosso serviço."
</i18n>
<i18n lang="yaml" locale="mx">
wha_phone: "+525580374700"
wha_text: "Hola, solicito información sobre vuestro servicio."
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiWhatsappWidget/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiWhatsappWidget/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiWhatsappWidget/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiWhatsappWidget/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiWhatsappWidget/en_mx.yaml"
></i18n>
