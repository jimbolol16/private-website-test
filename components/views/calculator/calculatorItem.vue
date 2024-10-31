<template>
  <div>
    <div
      class="flex flex-col items-center w-full border-[1px] border-soft rounded-xl"
      :class="{ 'bg-soft/20': selectedItem.amount > 0 }"
      v-if="!isSelected"
    >
      <h4 class="py-4">{{ selectedItem.name }}</h4>
      <nuxt-img
        :provider="$config.img_provider"
        :src="importImage(image)"
        :alt="image"
        class="w-28 h-28 mb-4"
      />

      <div
        class="flex flex-row justify-between items-center w-full px-6 py-4 border-t-[1px] text-electric"
      >
        <calculator-item-buttons
          :itemKey="itemKey"
          :itemTab="itemTab"
          @click="handleItemSelection"
        ></calculator-item-buttons>
      </div>
    </div>

    <!-- Selected item -->
    <div class="flex flex-row justify-between w-full mb-3 h-11" v-else>
      <div class="inline-flex gap-x-2 items-center justify-start w-full">
        <nuxt-img
          :provider="$config.img_provider"
          :src="importImage(selectedItem.image)"
          :alt="selectedItem.image"
          class="w-10 h-10"
        />
        <h4 class="block max-w-[104px] break-words max-h-full">
          {{ selectedItem.name || selectedItem.id }}
        </h4>
      </div>

      <div
        class="inline-flex px-8 py-3 gap-x-6 max-w-[148px] items-center text-electric w-auto justify-center border-[1px] border-soft rounded-xl"
      >
        <calculator-item-buttons
          :itemKey="itemKey"
          :itemTab="itemTab"
          @click="handleItemSelection"
        ></calculator-item-buttons>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { performSpace } from "@/utils/itemDimensions";

export default {
  name: "calculatorItem",
  components: {
    "calculator-item-buttons": async () =>
      await import("@/components/views/calculator/calculatorItemButtons.vue"),
  },
  props: {
    itemKey: {
      type: String,
      default: null,
    },
    itemTab: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState("calculatorItems", {
      calculatorItems: (state) => state.items,
      spaceEstimated: (state) => state.spaceEstimated,
    }),
    amount: {
      get() {
        return (
          this.$store.state.calculatorItems.items[this.itemTab][this.itemKey]
            .amount || 0
        );
      },
      set(value) {
        this.$store.dispatch("calculatorItems/SET_AMOUNT", {
          itemTab: this.itemTab,
          itemKey: this.itemKey,
          value: value,
        });
      },
    },
    selectedItem() {
      return this.calculatorItems[this.itemTab][this.itemKey];
    },
  },
  methods: {
    importImage(imageName) {
      try {
        return `/calculator/${imageName}.svg`;
      } catch (error) {
        return "/calculator/default.svg";
      }
    },
    handleItemSelection(value) {
      // Update amount of items selected
      this.amount = Math.max(this.amount + value, 0) || null;

      // Perform individual delta space per item and multiply by value in order to add or substract over total space estimated
      const estimatedSpace =
        performSpace(
          this.selectedItem.width,
          this.selectedItem.height,
          this.selectedItem.depth,
          this.selectedItem.factor
        ) * value;

      // Persist it into vuex
      this.$store.dispatch(
        "calculatorItems/SET_SPACE_ESTIMATED",
        +parseFloat(Math.max(this.spaceEstimated + estimatedSpace, 0)).toFixed(
          3
        )
      );

      // Add or drop it from selected items
      if (this.amount > 0) {
        this.$store.dispatch(
          "calculatorItems/ADD_SELECTED_ITEM",
          this.selectedItem
        );
      } else {
        this.$store.dispatch(
          "calculatorItems/REMOVE_SELECTED_ITEM",
          this.selectedItem
        );
      }
    },
  },
};
</script>
