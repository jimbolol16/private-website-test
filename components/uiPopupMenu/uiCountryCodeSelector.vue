<template>
  <div
    class="min-w-[190px] bg-white max-h-52 overflow-y-auto scrollbar flex flex-col gap-y-2 z-50"
    v-scroll="addElementsToDropdown"
  >
    <div
      v-for="(country, index) in renderList"
      :key="index"
      class="flex items-center"
    >
      <div
        class="flex flex-row w-full hover:bg-soft/50"
        @click="$emit('change', country)"
      >
        <span class="flex items-center pointer-events-none">
          <ui-language
            :phoneSelector="true"
            :countryData="country"
          ></ui-language>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import countryCodeMetadata from "@/utils/phoneCountryCodes";
const maxNumberOfElements = 15;

export default {
  name: "uiDropdown",
  components: {
    "ui-language": async () =>
      await import("@/components/header/uiLanguage.vue"),
  },
  props: {
    data: {
      type: [Array, Object],
      default: () => {},
    },
  },
  /**
   * On mounted, start adding elements to dropdown menu
   */
  mounted() {
    this.addElementsToDropdown();
  },
  data() {
    return {
      initialSize: 0,
      renderList: [],
    };
  },
  methods: {
    addElementsToDropdown() {
      const slicedData = countryCodeMetadata.slice(
        this.initialSize,
        maxNumberOfElements + this.initialSize
      );

      // Only if we have new data available, append them to render list
      if (slicedData.length > 0) {
        this.renderList.push(...slicedData);
        this.initialSize += maxNumberOfElements;
      }
    },
  },
};
</script>
