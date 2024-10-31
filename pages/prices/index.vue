<template>
  <div>
    <transition name="fade">
      <div id="indexPricePage" v-show="areFullLoaded">
        <client-only>
          <ui-city
            id="step0"
            class="my-auto"
            @click="handleNextStep(1)"
            store="pricesWizard"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'uiWizardCity')
            "
          ></ui-city>

          <template #placeholder>
            <ui-city class="my-auto"></ui-city>
          </template>
        </client-only>

        <ui-plans
          id="step1"
          class="transition-all duration-300"
          @click="handleNextStep(2)"
          :class="{ 'deactivated-section': !isValidChange(1) || step <= 0 }"
          store="pricesWizard"
          @hook:mounted="planComponentMounted()"
        ></ui-plans>

        <client-only>
          <ui-form
            id="step2"
            class="transition-all duration-300"
            :class="{ 'deactivated-section': !isValidChange(2) || step <= 1 }"
            store="pricesWizard"
            @success="handleFormSubmission"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'uiWizardForm')
            "
          ></ui-form>
          <template #placeholder>
            <ui-form></ui-form>
          </template>
        </client-only>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "indexPricesWizard",
  layout: "wizardPage",
  meta: {
    isWizard: true,
  },
  components: {
    "ui-city": async () => await import("@/components/wizard/uiWizardCity.vue"),
    "ui-plans": async () =>
      await import("@/components/wizard/uiWizardPlans.vue"),
    "ui-form": async () => await import("@/components/wizard/uiWizardForm.vue"),
  },
  data() {
    return {
      lastFilledComponent: null,
      lastFilledComponentSibling: null,
      lastStep: 2,
      states: {
        0: () => this.$store.dispatch("pricesWizard/SET_CITY", null),
        1: () => {
          this.$store.dispatch("pricesWizard/SET_CITY", null),
            this.$store.dispatch("pricesWizard/SET_PLAN", null);
        },
        2: () => {
          this.$store.dispatch("pricesWizard/SET_PLAN", null);
        },
      },
      formSubmissionStep: false,
    };
  },
  mounted() {
    // var self = this;
    // window.addEventListener("scroll", self.scrollBehavior);

    // Set max number of steps in the store
    this.$store.dispatch("pricesWizard/SET_LAST_STEP", this.lastStep);

    // Always scroll on top
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState("pricesWizard", {
      city: (state) => state.city,
      step: (state) => state.currentStep,
      plan: (state) => state.plan,
      fromLandingPage: (state) => state.fromLandingPage,
    }),
    ...mapState("loading", {
      uiWizardCity: (state) => state.pageSection?.uiWizardCity,
      uiWizardPlans: (state) => state.pageSection?.uiWizardPlans,
      uiWizardForm: (state) => state.pageSection?.uiWizardForm,
    }),
    areFullLoaded() {
      return this.uiWizardCity && this.uiWizardPlans && this.uiWizardForm;
    },
    checks() {
      return {
        1: this.city !== null,
        2: this.city !== null && this.plan !== null,
      };
    },
  },
  methods: {
    planComponentMounted() {
      this.$store.dispatch("loading/ADD_LOADED_COMPONENT", "uiWizardPlans");

      // On selected city, set the current step accordingly
      if (this.city && !this.fromLandingPage) {
        // Timeout is needed to perform the smooth transition into view
        setTimeout(() => {
          this.handleNextStep(1);
        }, 100);
      }
    },
    handleFormSubmission(event) {
      // Send to GA4 an event to track form submissions
      this.$gtm.push({
        event: "formprecios",
        ciudad: event.city,
        tiempo: event.duration,
        metros: event.space,
        precio: event.price,
      });

      this.formSubmissionStep = true;
      this.$router.push({ path: this.localePath("/prices/resume") });
    },
    /**
     * Reset vuex state if user tries to 'hack' the step form
     */
    resetStateOnInvalidStep(step) {
      return this.states[step]();
    },
    /**
     * Ensure that next form step is valid before going forward
     */
    isValidChange(toStep) {
      return this.checks[toStep];
    },
    scrollBehavior() {
      // If we are on the last component, don't block the scroll
      if (this.step === this.lastStep) {
        return true;
      }

      if (!this.lastFilledComponent) {
        window.scrollTo(0, 0);
        return false;
      }

      // Do some arithmetic in order to block scroll position on the right viewport
      const maxViewportHeight = document.body.offsetHeight - window.innerHeight;
      const componentHeight =
        maxViewportHeight -
        this.lastFilledComponent.top -
        (this.lastFilledComponentSibling?.height || 0);
      const maxScrollY = componentHeight + this.lastFilledComponent.top;

      if (window.scrollY > maxScrollY) {
        window.scrollTo(0, maxScrollY);
        return false;
      }
    },
    handleNextStep(toStep) {
      const component = this.$el.querySelector(`#step${toStep}`);

      // Ensure that is a valid step change
      if (!this.isValidChange(toStep)) {
        this.$toast({
          message: this.$t("wrong_form_step"),
          type: "danger",
        });

        // Reset state
        this.resetStateOnInvalidStep(toStep);
        return;
      }

      component.scrollIntoView({
        behavior: "smooth",
      });

      // Save last unlocked component
      if (
        !this.lastFilledComponent ||
        this.lastFilledComponent?.top < component.getBoundingClientRect().top
      ) {
        this.lastFilledComponent = component.getBoundingClientRect();
        this.lastFilledComponentSibling = this.$el
          .querySelector(`#step${toStep + 1}`)
          ?.getBoundingClientRect();
      }

      // Save current step only if go ahead from current saved step
      if (toStep > this.step) {
        this.$store.dispatch("pricesWizard/SET_STEP", toStep);
      }
    },
  },
  watch: {
    /**
     * Listen changes on uiWizardForm computed property to be sure that form component is properly mounted
     */
    uiWizardForm(newValue) {
      if (newValue && this.fromLandingPage) {
        // If we comes from city landing page, set the current step accordingly
        setTimeout(() => {
          this.handleNextStep(2);
        }, 100);
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollBehavior);

    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "uiWizardCity");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "uiWizardPlans");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "uiWizardForm");
  },
};
</script>
<style lang="scss" scoped>
.deactivated-section {
  @apply pointer-events-none opacity-20;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 0s;
  opacity: 0;
}
</style>
<i18n lang="yaml" locale="es">
mod_title: "¿Estás seguro?"
mod_message: "Si abandonas esta página perderás el progreso conseguido hasta ahora"
mod_cta_main: "Continuar"
mod_cta_secondary: "Salir"
</i18n>
<i18n lang="yaml" locale="fr">
mod_title: "Vous êtes sûr ?"
mod_message: "Si vous quittez cette page, vous perdrez les progrès que vous avez réalisés jusqu'à présent."
mod_cta_main: "Continuer"
mod_cta_secondary: "Sortie"
</i18n>
<i18n lang="yaml" locale="it">
mod_title: "Vuoi uscire?"
mod_message: "Se abbandoni questa pagina perderai ogni progresso"
mod_cta_main: "Continua"
mod_cta_secondary: "Esci"
</i18n>
<i18n lang="yaml" locale="pt">
mod_title: "Tens a certeza?"
mod_message: "Se sair desta página, perderá o progresso que fez até agora."
mod_cta_main: "Continuar"
mod_cta_secondary: "Sair"
</i18n>
<i18n lang="yaml" locale="mx">
mod_title: "¿Estás seguro?"
mod_message: "Si abandonas esta página perderás el progreso conseguido hasta ahora"
mod_cta_main: "Continuar"
mod_cta_secondary: "Salir"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/views/pricesWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/views/pricesWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/views/pricesWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/views/pricesWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/views/pricesWizardIndex.yaml"
></i18n>
