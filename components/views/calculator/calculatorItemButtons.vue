<template>
  <!-- This component is intended to be used only with calculator item inside a flex container -->
  <div class="contents">
    <span
      class="font-bold font-roboto text-[22px] leading-4 cursor-pointer"
      @click="handleClick(-1)"
    >
      -
    </span>
    <input
      v-debounce="150"
      placeholder="0"
      :maxlength="maxNumber.toString().length"
      class="font-bold font-roboto text-[24px] leading-5 w-12 text-center caret-electric focus:outline-none focus:bg-transparent placeholder:text-electric focus:placeholder:text-electric/50 bg-transparent"
      :value="amount"
      @keypress="isNumber"
      @change="handleChange"
      @blur="handleBlur"
    />
    <!-- <span class="font-bold font-roboto text-[24px] leading-5 cursor-pointer">{{
      amount
    }}</span> -->
    <span
      class="font-bold font-roboto text-[22px] leading-4 cursor-pointer"
      @click="handleClick(1)"
      >+</span
    >
  </div>
</template>
<script>
import { mapState } from "vuex";
import debounce from "@/directives/debounce";

export default {
  name: "calculatorItemButtons",
  directives: {
    debounce,
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
  },
  data() {
    return {
      maxNumber: 999,
    };
  },
  computed: {
    ...mapState("calculatorItems", {
      calculatorItems: (state) => state.items,
    }),
    amount() {
      return this.$store.state.calculatorItems.items[this.itemTab][this.itemKey]
        .amount;
    },
  },
  methods: {
    /**
     * Avoid different inputs from numbers (only positive integer numbers)
     */
    isNumber(event) {
      const keysAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const keyPressed = event.key;

      if (!keysAllowed.includes(keyPressed)) {
        event.preventDefault();
      }
    },
    handleClick(value) {
      const amount = this.amount || 0;
      const nextValue = amount + value;

      // Avoid to propagate numbers out of bounds
      if (0 <= nextValue && nextValue <= this.maxNumber) {
        this.$emit("click", value);
      }
    },
    handleChange(event) {
      const value = event.target.value;
      const amount = this.amount || 0;
      let valueToEmit = value - amount;

      if (value === 0) {
        valueToEmit = -amount;
      }

      if (value) {
        this.$emit("click", valueToEmit);
      }
    },
    handleBlur(event) {
      // On blur event, if there is no event, emit the event to trigger side-effects
      if (!event.target.value) {
        this.$emit("click", -this.amount || 0);
      }
    },
  },
};
</script>
