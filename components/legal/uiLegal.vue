<template>
  <div>
    <h3 class="first-letter:capitalize mb-10">{{ sectionName }}</h3>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "uiLegal",
  props: {
    sectionName: {
      type: String,
      default: null,
    },
  },
};
</script>
