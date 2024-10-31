<template>
  <div class="bg-white h-full z-[2]">
    <ui-wizard-resume
      @click="handleClick"
      class="mobile:pt-20 pt-32 desktopL:my-auto desktop:my-auto"
      :displayPlan="false"
    ></ui-wizard-resume>
  </div>
</template>
<script>
export default {
  name: "generalResume",
  layout: "wizardPage",
  components: {
    "ui-wizard-resume": async () =>
      await import("@/components/wizard/uiWizardResume.vue"),
  },
  middleware({ store, redirect, app }) {
    if (!store.state.confirmationResume.allowedAccess) {
      redirect(app.localePath("/"));
    }
  },
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/") });
    },
  },
  /**
   * Before destroying this component, restore the flag for check if is from genericForm
   */
  beforeDestroy() {
    this.$store.dispatch(`confirmationResume/SET_ALLOWED_ACCESS`, false);
  },
};
</script>
