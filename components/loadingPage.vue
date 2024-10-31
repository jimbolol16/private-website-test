<template>
  <div class="flex flex-col justify-center h-[calc(100vh-64px)]">
    <!-- Background image -->
    <div class="absolute left-0 top-0 z-0 right-0">
      <div class="relative">
        <div class="overflow-hidden top-0 h-screen">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-hero.svg"
            alt="herobackground"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-full items-center justify-center z-[1] space-y-1"
    >
      <p
        class="font-roboto font-normal not-italic text-[16px] leading-[150%] text-[rgba(20,12,64,0.7)]"
      >
        <slot>{{ $t("loading") }}</slot>
      </p>

      <!-- Progress bar -->
      <div class="w-[80px] bg-electric h-[16px] rounded-[8px] relative">
        <div
          class="w-[56px] bg-soft h-[16px] rounded-[8px] absolute shim-animation"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loadingPage",
};
</script>
<style lang="scss" scoped>
.shim-animation {
  animation: shimmer 1s linear infinite;
}
@keyframes shimmer {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(24px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
<i18n lang="yaml" locale="es">
loading: "Cargando"
</i18n>
<i18n lang="yaml" locale="fr">
loading: "Chargement"
</i18n>
<i18n lang="yaml" locale="it">
loading: "Caricando"
</i18n>
<i18n lang="yaml" locale="pt">
loading: "Carregamento"
</i18n>
<i18n lang="yaml" locale="mx">
loading: "Cargando"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/loadingPage.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/loadingPage.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/loadingPage.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/loadingPage.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/loadingPage.yaml"
></i18n>
