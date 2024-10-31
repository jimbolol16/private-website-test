<template>
  <div class="bg-white h-full z-[2]">
    <ui-wizard-resume
      @click="handleClick"
      class="mobile:pt-20 pt-32 pb-8 desktopL:my-auto desktop:my-auto"
      store="pricesWizard"
    ></ui-wizard-resume>
  </div>
</template>
<script>
import wizardResume from "@/mixins/wizardResume";

export default {
  name: "wizardResume",
  layout: "wizardPage",
  middleware({ store, redirect, app }) {
    const isLastStep =
      store.state.pricesWizard.lastStep ===
        store.state.pricesWizard.currentStep &&
      store.state.pricesWizard.lastStep > 0;
    const isAllowed = store.state.pricesWizard.city && isLastStep;

    // If we don't have filled all data from wizard, avoid go to this route
    if (!isAllowed) redirect(app.localePath("/"));
  },
  mixins: [wizardResume],
};
</script>
