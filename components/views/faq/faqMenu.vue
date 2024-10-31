<template>
  <div class="flex flex-col">
    <ul class="-ml-px">
      <li class="border-l-2 border-soft px-4 pb-2" id="faqMenu">
        <h5
          class="inline-block uppercase text-[14px] leading-[21px] font-normal"
        >
          {{ $t("faq_menu_title") }}
        </h5>
      </li>

      <li
        class="border-l-2 border-soft cursor-pointer"
        v-for="(entry, index) in entries"
        :key="entry"
        :id="`${entry.replace(/\s/g, '')}-content`"
        @click="$emit('click', index)"
      >
        <p class="p2 text-[#140C40B2]">
          {{ entry }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "faqMenu",
  props: {
    entries: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  @apply text-[#140C40B2];

  p {
    @apply px-4 py-1 first-letter:capitalize;
  }
}
.active {
  @apply border-electric;
}
</style>
<i18n lang="yaml" locale="es">
faq_menu_title: "Categorías"
</i18n>
<i18n lang="yaml" locale="fr">
faq_menu_title: "Catégories"
</i18n>
<i18n lang="yaml" locale="it">
faq_menu_title: "Categorie"
</i18n>
<i18n lang="yaml" locale="pt">
faq_menu_title: "Categorias"
</i18n>
<i18n lang="yaml" locale="mx">
faq_menu_title: "Categorías"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/components/faqMenu.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/components/faqMenu.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/components/faqMenu.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/components/faqMenu.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/components/faqMenu.yaml"></i18n>
