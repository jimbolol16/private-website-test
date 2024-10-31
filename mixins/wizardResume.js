import uiWizardResume from "@/components/wizard/uiWizardResume.vue";
const warehouseCities = {
  components: {
    "ui-wizard-resume": uiWizardResume,
  },
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/") });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.meta.isWizard) {
      this.$router.push({ path: this.localePath("/") });
    }

    // Go ahead by default
    next();
  },
};
export default warehouseCities;
