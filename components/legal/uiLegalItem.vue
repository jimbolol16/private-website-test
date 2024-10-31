<template>
  <div>
    <h5 class="font-bold">{{ title }}</h5>
    <div
      class="font-roboto font-normal text-dark/70 text-[18px] leading-[25px] text-justify mt-4"
    >
      <script
        v-if="script"
        id="CookieDeclaration"
        :data-culture="
          $i18n.locales.find((i) => i.code === $i18n.locale).simplifiedLang
        "
        :src="script"
        type="text/javascript"
        async
      ></script>
    </div>
    <div
      class="font-roboto font-normal text-dark/70 text-[18px] leading-[25px] text-justify mt-4"
      v-html="body"
    ></div>
  </div>
</template>
<script>
export default {
  name: "uiLegalItem",
  props: {
    title: {
      type: String,
      default: null,
    },
    body: {
      type: String,
      default: null,
    },
    script: {
      type: String,
      default: null,
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.CookieDeclaration) {
  p {
    @apply hidden;
  }
}
:deep(#CookieDeclarationChangeConsent) {
  @apply font-bold;
}
</style>
