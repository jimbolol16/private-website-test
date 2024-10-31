<template>
  <div class="grid-layout pt-[88px]">
    <div class="col-start-2 col-span-full row-start-1">
      <div class="inline-flex gap-x-1 items-center">
        <dark-chevron-icon class="rotate-90"></dark-chevron-icon>
        <nuxt-link
          class="text-dark font-manrope font-medium text-sm"
          :to="localePath('calculator-city')"
          >Volver</nuxt-link
        >
      </div>
    </div>
    <div class="col-start-1 row-start-2 col-span-full">
      <ui-wizard-form @submit="handleFormSubmission"></ui-wizard-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "calculatorFormPage",
  layout: "landingPage",
  components: {
    "ui-wizard-form": async () =>
      await import("@/components/wizard/uiWizardForm.vue"),
    "dark-chevron-icon": async () =>
      await import("@/components/icons/DarkChevronIcon.vue"),
  },
  middleware({ isDev, store, redirect, app }) {
    const spaceEstimated = store.state.calculatorWizard.spaceEstimated;
    const city = store.state.calculatorWizard.city;

    // TODO: drop this when calculator is fully finished
    if (!isDev) redirect(app.localePath("/"));

    // TODO: fetch from database all planes and set it accordingly

    // If we don't have any selected item yet, redirect to calculator step
    if (spaceEstimated <= 0 || !city) redirect(app.localePath("/calculator"));
  },
  computed: {
    ...mapState("pricesWizard", {
      contactData: (state) => state.contactData,
      plan: (state) => state.plan,
      country: (state) => state.country,
      space: (state) => state.space,
    }),
  },
  methods: {
    handleFormSubmission() {
      // TODO: make the hubspot call here passing the data
      console.log("SUBMISSION!");
    },
  },
};
</script>
