<template>
  <div class="bg-white h-screen">
    <ui-header></ui-header>
    <nuxt />

    <!-- Footer section exclusive for calculator section -->
    <!-- h-[88px] h-[376px]-->
    <transition
      enter-active-class="transition-all duration-700"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <footer
        class="flex flex-row w-full fixed bottom-0 bg-white shadow-calculator"
        :class="{
          'h-[376px]': !isClosed,
          'h-[88px]': isClosed,
        }"
        v-show="selectedItemsCounter > 0"
      >
        <div class="grid-layout py-8 h-full grid-rows-2">
          <div class="col-start-1 col-span-full row-start-2 h-full">
            <div
              class="flex flex-row justify-between h-full"
              :class="{
                'items-center': isClosed,
                'items-end': !isClosed,
              }"
            >
              <h5 class="font-bold w-full">
                Espacio estimado: {{ roundedSpace }}m²
              </h5>
              <ui-button :arrow="true" size="small" @click="handleClick"
                >Continuar</ui-button
              >
            </div>
          </div>

          <div class="row-span-2 col-start-5 col-span-4 row-start-1 h-full">
            <div class="flex flex-col h-full w-full">
              <div
                class="flex flex-row gap-x-2 items-center justify-center cursor-pointer mt-1"
                @click="isClosed = !isClosed"
              >
                <p class="p1">
                  Mostrar {{ selectedItemsCounter }} elementos seleccionados
                </p>
                <dark-chevron-icon
                  class="h-6 w-6"
                  :class="{ 'rotate-180': isClosed }"
                ></dark-chevron-icon>
              </div>

              <div
                class="flex flex-col overflow-auto h-full w-full gap-y-2 scrollbar mt-6"
                v-if="!isClosed"
              >
                <calculator-item
                  v-for="(item, index) in selectedItems"
                  :key="index"
                  :itemKey="item.name"
                  :itemTab="item.room"
                  :isSelected="true"
                  :image="item.image"
                ></calculator-item>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </transition>
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import { mapState } from "vuex";
import { roundToNearestPlan } from "@/utils/itemDimensions";
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";

export default {
  name: "calculatorPage",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "dark-chevron-icon": async () =>
      await import("@/components/icons/DarkChevronIcon.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "calculator-item": async () =>
      await import("@/components/views/calculator/calculatorItem.vue"),
  },
  head() {
    return this.nuxtI18nHeadFixer();
  },
  data() {
    return {
      isClosed: true,
    };
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
  computed: {
    ...mapState("calculatorItems", {
      spaceEstimated: (state) => state.spaceEstimated,
      selectedItems: (state) => state.selectedItems,
      selectedItemsCounter: (state) => state.selectedItemsCounter,
    }),
    roundedSpace() {
      return roundToNearestPlan(Math.max(this.spaceEstimated, 0));
    },
  },
  methods: {
    handleClick() {
      // Persist needed values into vuex
      this.$store.dispatch(
        "calculatorWizard/SET_SPACE_ESTIMATED",
        this.roundedSpace
      );

      // Go to the next route
      this.$router.push({ path: this.localePath("calculator-city") });
    },
  },
  watch: {
    /* Handle selected items dropdown behavior when footer is hidden */
    selectedItemsCounter: {
      handler: function (value) {
        if (value === 0) {
          this.isClosed = true;
        }
      },
    },
  },
  beforeDestroy() {
    // Clear the store before destroying the component
    this.$store.dispatch("calculatorItems/RESET_ITEMS");
  },
};
</script>
