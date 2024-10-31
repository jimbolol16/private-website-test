<template>
  <div></div>
</template>

<script>
/**
 * Workaround to avoid hydration errors when displaying 404 splash screen
 * on dynamic pages.
 */
export default {
  name: "uiError",
  mounted() {
    // Redirect to 404 layout
    this.$root.error({ statusCode: 404 });
  },
};
</script>
