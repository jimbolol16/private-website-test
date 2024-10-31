<template>
  <div class="mobile:col-span-4 col-span-12 mobileL:col-span-8 z-[1]">
    <div class="subgrid-layout section-vertical-padding">
      <div
        class="col-span-5 tablet:col-span-6 row-start-1 col-start-1 mobileL:col-span-full mobile:col-span-full"
      >
        <div class="flex flex-col w-full gap-4">
          <h2>{{ $t("faq_title") }}</h2>
          <p class="p2">
            {{ $t("faq_subtitle") }}
          </p>
        </div>

        <!-- SEO compatibility -->
        <nuxt-link :to="this.localePath('/faq')">
          <div
            class="inline-flex gap-x-2 items-center mt-16 tablet:mt-10 cursor-pointer mobileL:mt-8 mobile:mt-6"
          >
            <h4 class="leading-[29px] font-[700]">{{ $t("faq_cta") }}</h4>
            <arrow-icon class="stroke-electric"></arrow-icon>
          </div>
        </nuxt-link>
      </div>

      <div
        class="col-span-7 tablet:col-span-6 col-start-6 row-start-1 mobileL:row-start-2 mobileL:col-span-full mobileL:mt-10 mobile:row-start-2 mobile:col-span-full mobile:mt-14"
      >
        <faq-entries></faq-entries>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "faqSection",
  components: {
    "faq-entries": async () =>
      await import("@/components/sections/faqSection/faqEntries.vue"),
    "arrow-icon": async () => await import("@/components/icons/ArrowIcon.vue"),
  },
};
</script>
<i18n lang="yaml" locale="es">
faq_title: "¿Dudas? Te las resolvemos"
faq_subtitle: " "
faq_cta: "Más FAQs"
</i18n>
<i18n lang="yaml" locale="fr">
faq_title: "Vous avez encore des doutes ? Nous les levons pour vous"
faq_subtitle: " "
faq_cta: "Plus de FAQs"
</i18n>
<i18n lang="yaml" locale="it">
faq_title: "Dubbi? Gli chiariremo noi!"
faq_subtitle: " "
faq_cta: "Altre FAQ"
</i18n>
<i18n lang="yaml" locale="pt">
faq_title: "Dúvidas? Nós esclarecemos"
faq_subtitle: " "
faq_cta: "Mais FAQs"
</i18n>
<i18n lang="yaml" locale="mx">
faq_title: "¿Dudas? Te las resolvemos"
faq_subtitle: " "
faq_cta: "Más FAQs"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/faqSection.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/faqSection.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/faqSection.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/faqSection.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/faqSection.yaml"></i18n>
