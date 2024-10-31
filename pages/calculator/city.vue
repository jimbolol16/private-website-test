<template>
  <div class="pt-[88px]">
    <ui-wizard-city @click="handleClick"></ui-wizard-city>
  </div>
</template>
<script>
export default {
  name: "calculatorCity",
  layout: "landingPage",
  components: {
    "ui-wizard-city": async () =>
      await import("@/components/wizard/uiWizardCity.vue"),
  },
  meta: {
    is: "child",
  },
  middleware({ isDev, store, redirect, app }) {
    const spaceEstimated = store.state.calculatorWizard.spaceEstimated;

    // TODO: drop this when calculator is fully finished
    if (!isDev) redirect(app.localePath("/"));

    // If we don't have any selected item yet, redirect to calculator step
    if (spaceEstimated <= 0) redirect(app.localePath("/calculator"));
  },
  methods: {
    handleClick(value) {
      // Once a city is selected, set the navigation allowed to the next step and redirect to it
      this.$store.dispatch("calculatorWizard/SET_CITY", value);
      this.$store.dispatch("calculatorWizard/SET_ALLOWED_NAVIGATION", true);

      // Go to next route
      this.$router.push({ path: this.localePath("calculator-form") });
    },
  },
};
</script>
