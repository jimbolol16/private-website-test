<template>
  <client-only>
    <ui-popup-base-menu
      openedAt="right"
      ref="popupMenu"
      :dropdownPosition="dropdownPosition"
    >
      <template v-slot:selected="{ openedMenu }">
        <div class="flex flex-row items-center gap-x-1">
          <ui-language :localeConfiguration="localeMetadata"> </ui-language>
          <chevron-icon
            class="w-4 h-4"
            :class="[
              openedMenu ? 'rotate-180' : '',
              parentClass || 'fill-dark',
            ]"
          ></chevron-icon>
        </div>
      </template>

      <template slot="list">
        <div
          v-for="(locale, index) in localeMetadata.availableLocales"
          :key="index"
          class="flex flex-row gap-y-2"
          @click.prevent.stop="handleClick(locale)"
        >
          <!-- Workaround to handle click event on route change -->
          <a class="contents">
            <ui-language :localeConfiguration="locale"> </ui-language>
          </a>
        </div>
      </template>
    </ui-popup-base-menu>

    <template #placeholder>
      <ui-popup-base-menu
        openedAt="right"
        ref="popupMenu"
        :dropdownPosition="dropdownPosition"
      >
        <template v-slot:selected="{ openedMenu }">
          <div class="flex flex-row items-center gap-x-1">
            <ui-language :localeConfiguration="localeMetadata"> </ui-language>
            <chevron-icon
              class="w-4 h-4"
              :class="[
                openedMenu ? 'rotate-180' : '',
                parentClass || 'fill-dark',
              ]"
            ></chevron-icon>
          </div>
        </template>

        <template slot="list">
          <div
            v-for="(locale, index) in localeMetadata.availableLocales"
            :key="index"
            class="flex flex-row gap-y-2"
            @click.prevent.stop="handleClick(locale)"
          >
            <!-- Workaround to handle click event on route change -->
            <a class="contents">
              <ui-language :localeConfiguration="locale"> </ui-language>
            </a>
          </div>
        </template>
      </ui-popup-base-menu>
    </template>
  </client-only>
</template>

<script>
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "uiLocaleMenu",
  components: {
    "ui-popup-base-menu": async () =>
      await import("@/components/uiPopupMenu/uiPopupBaseMenu.vue"),
    "ui-language": async () =>
      await import("@/components/header/uiLanguage.vue"),
    "chevron-icon": async () =>
      await import("@/components/icons/ChevronIcon.vue"),
  },
  props: {
    datas: {
      type: Array,
      default: null,
    },
    parentClass: {
      type: String,
      default: null,
    },
    dropdownPosition: {
      type: String,
      values: () => ["top", "bottom"],
      default: "bottom",
    },
  },
  mixins: [localesMetadata],
  data() {
    return {
      shouldCloseMenu: false,
    };
  },
  methods: {
    handleClick(locale) {
      // Close the popup menu
      this.$refs.popupMenu.handleChange();
      this.$router.push({ path: this.switchLocalePath(locale.code) });
    },
  },
};
</script>
