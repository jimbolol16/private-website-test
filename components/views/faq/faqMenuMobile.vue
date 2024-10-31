<template>
  <ui-field :label="$t('faq_menu_title')">
    <ui-select
      v-model="selectedEntry"
      class="w-full"
      @input="onSelect"
      size="large"
      :dropdownPosition="dropdownPosition"
    >
      <template slot="selected">
        <span v-if="selectedEntry">{{ selectedEntry }}</span>
        <span class="text-electric-input" v-else>{{
          $t("faq_menu_title")
        }}</span>
      </template>
      <ui-option
        v-for="(entry, index) in entries"
        :key="index"
        :value="entry"
        :attr-index="index"
        :id="entry.replace(/\s/g, '')"
        :selected="entry === selectedEntry"
        >{{ entry }}</ui-option
      >
    </ui-select>
  </ui-field>
</template>
<script>
export default {
  name: "faqMenuMobile",
  components: {
    "ui-select": async () => await import("@/components/uiSelect.vue"),
    "ui-option": async () => await import("@/components/uiOption.vue"),
    "ui-field": async () => await import("@/components/uiField.vue"),
  },
  props: {
    entries: {
      type: Array,
      default: () => [],
    },
    dropdownPosition: {
      type: String,
      default: "bottom",
    },
  },
  data() {
    return {
      selectedEntry: null,
    };
  },
  methods: {
    onSelect(value) {
      const indexSection = this.$el
        .querySelector(`#${value.replace(/\s/g, "")}`)
        .getAttribute("attr-index");
      this.$emit("click", indexSection);
    },
  },
};
</script>
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
