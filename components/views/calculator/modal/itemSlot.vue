<template>
  <div class="flex flex-col w-full">
    <!-- Content -->
    <div class="flex flex-row gap-x-2 pt-10">
      <item-slot-element
        image="/calculator/small.png"
        item-index="small"
        name="Pequeño"
        @click="handleSelectedItem('small')"
        :disabled="!name"
      ></item-slot-element>

      <item-slot-element
        image="/calculator/medium.png"
        item-index="medium"
        name="Mediano"
        @click="handleSelectedItem('medium')"
        :disabled="!name"
      ></item-slot-element>

      <item-slot-element
        image="/calculator/large.png"
        item-index="large"
        name="Grande"
        @click="handleSelectedItem('large')"
        :disabled="!name"
      ></item-slot-element>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { itemDimensions } from "@/utils/itemDimensions";
import performSpaceEstimation from "@/mixins/calculatorModalItemSpaceEstimation";

export default {
  name: "itemSlot",
  components: {
    "item-slot-element": async () =>
      await import("@/components/views/calculator/modal/itemSlotElement.vue"),
  },
  mixins: [performSpaceEstimation],
  computed: {
    ...mapState("calculatorModal", {
      itemId: (state) => state.id,
    }),
    name() {
      return this.$store.state.calculatorModal.name;
    },
  },
  methods: {
    handleSelectedItem(index) {
      // Remove all active classes
      this.$el.querySelectorAll("[item-index]").forEach((element) => {
        element.classList.remove("active");
      });

      this.$el.querySelector(`[item-index="${index}"]`).classList.add("active");

      // Calculate the space
      const dimensions = itemDimensions[index];
      const space = this.$_spaceEstimation(
        dimensions.width,
        dimensions.height,
        dimensions.depth,
        1.5
      );

      // Fill the remaining state
      if (!this.itemId) {
        const randomId =
          Date.now().toString(36) + Math.random().toString(36).substr(2);

        this.$store.dispatch("calculatorModal/SET_ID", randomId);
      }
      this.$store.dispatch("calculatorModal/SET_WIDTH", dimensions.width);
      this.$store.dispatch("calculatorModal/SET_HEIGHT", dimensions.height);
      this.$store.dispatch("calculatorModal/SET_DEPTH", dimensions.depth);
      this.$store.dispatch("calculatorModal/SET_SPACE", space);
      this.$store.dispatch("calculatorModal/SET_FACTOR", this.factor);

      // Propagate change to parent component
      this.$emit("selected");
    },
  },
};
</script>
