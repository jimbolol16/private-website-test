<template>
  <base-calculator-modal :title="title" @close="$emit('close')">
    <div class="pt-6 w-full">
      <ui-field label="Nombre" :validation="validationName">
        <ui-input
          class="w-full"
          placeholder="Nombre"
          v-model.trim="validationName.$model"
        ></ui-input>
      </ui-field>
    </div>

    <!-- View 1 -->
    <item-slot
      ref="item"
      @click="isInitialStep = false"
      v-if="isInitialStep"
      @selected="handlePredefinedSelectedItem"
    ></item-slot>

    <!-- View 2 -->
    <dimension-slot ref="dimension" v-else></dimension-slot>

    <!-- Buttons -->
    <button
      class="inline-flex gap-x-2 items-center mt-10 cursor-pointer justify-center"
      @click="isInitialStep = false"
      v-if="isInitialStep"
    >
      <h4 class="leading-[29px] font-[700]">Editar medidas</h4>
      <arrow-icon class="stroke-electric"></arrow-icon>
    </button>

    <div class="flex w-full justify-center pt-6 pb-10" v-else>
      <ui-button @click="handleClick">Añadir item</ui-button>
    </div>
  </base-calculator-modal>
</template>
<script>
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
import ensureMode from "@/helpers/ensureMode";
import { validationMixin } from "vuelidate";

export default {
  name: "calculatorModal",
  components: {
    "base-calculator-modal": async () =>
      await import(
        "@/components/views/calculator/modal/baseCalculatorModal.vue"
      ),
    "item-slot": async () =>
      await import("@/components/views/calculator/modal/itemSlot.vue"),
    "dimension-slot": async () =>
      await import("@/components/views/calculator/modal/dimensionSlot.vue"),
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-field": async () => await import("@/components/uiField.vue"),
    "arrow-icon": async () => await import("@/components/icons/ArrowIcon.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  mixins: [validationMixin],
  data() {
    return {
      isInitialStep: true,
    };
  },
  computed: {
    title() {
      return this.isInitialStep ? this.$t("add_item") : this.$t("dimension");
    },
    name: {
      get() {
        return this.$store.state.calculatorModal.name;
      },
      set(value) {
        this.$store.dispatch("calculatorModal/SET_NAME", value);
      },
    },
    validationName() {
      return ensureMode("client", this.$v, "name");
    },
    ...mapState("calculatorItems", {
      spaceEstimated: (state) => state.spaceEstimated,
    }),
    ...mapState("calculatorModal", {
      itemId: (state) => state.id,
      itemWidth: (state) => state.width,
      itemHeight: (state) => state.height,
      itemDepth: (state) => state.depth,
      itemFactor: (state) => state.factor,
      itemSpace: (state) => state.space,
    }),
  },
  validations: {
    name: {
      required,
    },
  },
  methods: {
    createItem() {
      // Persist it into vuex
      this.$store.dispatch(
        "calculatorItems/SET_SPACE_ESTIMATED",
        +parseFloat(Math.max(this.spaceEstimated + this.itemSpace, 0)).toFixed(
          2
        )
      );

      // Add it as selected item
      const item = {
        _id: null,
        id: this.itemId,
        width: this.itemWidth,
        height: this.itemHeight,
        depth: this.itemDepth,
        amount: 1,
        factor: this.itemFactor,
        name: this.name,
        room: "custom",
      };

      this.$store.dispatch("calculatorItems/ADD_SELECTED_ITEM", item);
      this.$store.dispatch("calculatorItems/ADD_CUSTOM_ITEM", {
        itemTab: "custom",
        itemKey: this.name,
        item: item,
      });
    },
    handlePredefinedSelectedItem() {
      // Create the item
      this.createItem();

      // Close the modal
      this.$emit("close");
    },
    handleClick() {
      this.$v.$touch();
      this.$refs.dimension.$v.$touch();

      const isInvalid = this.$v.$invalid || this.$refs.dimension.$v.$invalid;

      if (!isInvalid) {
        // Create the item
        this.createItem();

        // Close the modal
        this.$emit("close");
      }
    },
  },
  beforeDestroy() {
    // Clear the store before destroying the component
    this.$store.dispatch("calculatorModal/RESET_ITEM");
  },
};
</script>
<i18n>
{
  "en": {
    "add_item": "Add your own item",
    "dimension": "Dimensions"
  },
  "es": {
    "add_item": "Añade tu propio objeto",
    "dimension": "Dimensiones"
  }
}
</i18n>
