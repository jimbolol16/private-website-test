<template>
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.47461 8.24219H13.9746M13.9746 8.24219L9.47461 4.24219M13.9746 8.24219L9.47461 12.7422"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: "ArrowIcon",
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      values: () => ["small", "large"],
      default: "small",
    },
  },
};
</script>
