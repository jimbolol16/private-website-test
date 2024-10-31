<template>
  <fieldset
    class="w-auto flex flex-row items-center select-none bg-electric/5 rounded-full"
  >
    <div v-for="value in values" :key="value.value" class="w-44 mobile:w-auto">
      <input
        type="radio"
        :id="`radio-${value.value}`"
        :name="`button-pills-${value.value}`"
        class="peer hidden"
        v-model="selectedOption"
        :value="value.value"
        @input="onInput"
        @change="onChange"
      />
      <label
        :for="`radio-${value.value}`"
        class="font-roboto font-normal text-[14px] leading-[16px] h-10 items-center py-2 px-4 rounded-full bg-none text-electric peer-checked:bg-white peer-checked:shadow-lg peer-checked:font-extrabold cursor-pointer transition-all duration-150 flex justify-center text-center"
      >
        {{ value.name }}
      </label>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "uiButtonPillsGroup",
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    defaultSelectedValue: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedOption: this.defaultSelectedValue,
    };
  },
  methods: {
    onInput(event) {
      this.selectedOption = event.target.value;
      this.$emit("input", this.selectedOption);
    },
    onChange(event) {
      this.selectedOption = event.target.value;
      this.$emit("change", this.selectedOption);
    },
  },
};
</script>
