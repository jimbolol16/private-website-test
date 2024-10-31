<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row w-full pt-10">
      <div class="flex flex-col space-y-6 w-full">
        <ui-field label="Ancho" :validation="validationWidth">
          <ui-input
            type="number"
            placeholder="Ancho"
            v-model.trim="validationWidth.$model"
          ></ui-input>
        </ui-field>
        <ui-field label="Alto" :validation="validationHeight">
          <ui-input
            type="number"
            placeholder="Alto"
            v-model.trim="validationHeight.$model"
          ></ui-input>
        </ui-field>
        <ui-field label="Largo" :validation="validationDepth">
          <ui-input
            type="number"
            placeholder="Largo"
            v-model.trim="validationDepth.$model"
          ></ui-input>
        </ui-field>
      </div>
      <div class="flex w-full justify-end">
        <nuxt-img
          :provider="$config.img_provider"
          src="/calculator/box.svg"
          alt="box"
        />
      </div>
    </div>

    <div class="flex w-full justify-center pt-6">
      <h5 class="font-bold" v-if="width && height && depth">
        Espacio estimado: {{ performDimensions }}m²
      </h5>
      <h5 v-else>-</h5>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
import ensureMode from "@/helpers/ensureMode";
import performSpaceEstimation from "@/mixins/calculatorModalItemSpaceEstimation";
import { validationMixin } from "vuelidate";

export default {
  name: "dimensionSlot",
  components: {
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-field": async () => await import("@/components/uiField.vue"),
  },
  mixins: [performSpaceEstimation, validationMixin],
  validations: {
    width: {
      required,
    },
    height: {
      required,
    },
    depth: {
      required,
    },
  },
  computed: {
    ...mapState("calculatorModal", {
      itemId: (state) => state.id,
    }),
    width: {
      get() {
        return this.$store.state.calculatorModal.width;
      },
      set(value) {
        this.$store.dispatch("calculatorModal/SET_WIDTH", value);
      },
    },
    height: {
      get() {
        return this.$store.state.calculatorModal.height;
      },
      set(value) {
        this.$store.dispatch("calculatorModal/SET_HEIGHT", value);
      },
    },
    depth: {
      get() {
        return this.$store.state.calculatorModal.depth;
      },
      set(value) {
        this.$store.dispatch("calculatorModal/SET_DEPTH", value);
      },
    },
    validationWidth() {
      return ensureMode("client", this.$v, "width");
    },
    validationHeight() {
      return ensureMode("client", this.$v, "height");
    },
    validationDepth() {
      return ensureMode("client", this.$v, "depth");
    },
    changedData() {
      const { width, height, depth } = this;
      return { width, height, depth };
    },
    performDimensions() {
      return this.$_spaceEstimationRounded(
        this.width,
        this.height,
        this.depth,
        this.factor
      );
    },
  },
  watch: {
    changedData: {
      handler: function (value) {
        const isFullyFilledDimensions = Object.values(value).every(
          (val) => val
        );
        if (isFullyFilledDimensions) {
          const space = this.$_spaceEstimation(
            this.width,
            this.height,
            this.depth,
            this.factor
          );

          // Fill the remaining state
          if (!this.itemId) {
            const randomId =
              Date.now().toString(36) + Math.random().toString(36).substr(2);

            this.$store.dispatch("calculatorModal/SET_ID", randomId);
          }
          this.$store.dispatch("calculatorModal/SET_SPACE", space);
          this.$store.dispatch("calculatorModal/SET_FACTOR", this.factor);

          // Propagate change to parent component
          this.$emit("selected");
        }
      },
    },
  },
};
</script>
