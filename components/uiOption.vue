<template>
  <div @click="handleClick()" class="flex justify-between items-center py-1 px-[24px] hover:bg-soft/50 ">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "uiOption",
  props: {
    value: {
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.$parent.$emit("clicked", this.value);
    },
  },
};
</script>
