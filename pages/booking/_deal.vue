<template>
  <div>
    <transition name="fade">
      <div id="bookingPage" v-show="areFullLoaded">
        <div ref="boxWizard">
          <ui-city
            id="step0"
            class="my-auto"
            @click="handleNextStep(1)"
            store="bookingWizard"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'uiWizardCity')
            "
          ></ui-city>

          <ui-plans
            id="step1"
            class="transition-all duration-300"
            @click="handleNextStep(2)"
            :class="{ 'deactivated-section': !isValidChange(1) || step <= 0 }"
            store="bookingWizard"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'uiWizardPlan')
            "
          ></ui-plans>

          <ui-calendar
            id="step2"
            class="transition-all duration-300"
            @click="handleNextStep(3)"
            :class="{ 'deactivated-section': !isValidChange(2) || step <= 1 }"
            @hook:mounted="
              $store.dispatch(
                'loading/ADD_LOADED_COMPONENT',
                'uiBookingCalendar'
              )
            "
          ></ui-calendar>

          <ui-extra-service
            id="step3"
            class="transition-all duration-300"
            :class="{ 'deactivated-section': !isValidChange(3) || step <= 2 }"
            @click="handleNextStep(4)"
            :focused="focusOnExtraServices"
            @hook:mounted="
              $store.dispatch('loading/ADD_LOADED_COMPONENT', 'uiExtraService')
            "
            v-intersect="{
              onChange: extraServiceVisible,
              observerOptions: {
                threshold: 0.3,
                rootMargin: '128px 32px 0px 0px',
              },
            }"
          ></ui-extra-service>

          <client-only>
            <ui-form
              id="step4"
              class="transition-all duration-300"
              :class="{ 'deactivated-section': !isValidChange(4) || step <= 3 }"
              store="bookingWizard"
              :displayAddress="true"
              @success="handleFormSubmission"
              @hook:mounted="
                $store.dispatch(
                  'loading/ADD_LOADED_COMPONENT',
                  'uiBookingWizardForm'
                )
              "
            ></ui-form>
          </client-only>

          <!-- Modal to retain the lead here -->
          <ui-generic-modal
            v-if="openModal"
            @close="openModal = false"
            @buttonClick="handleModalLeaveClick(false)"
            @textClick="handleModalLeaveClick(true)"
            :button="true"
            :buttonName="$t('mod_cta_main')"
            :secondOption="true"
            :secondOptionText="$t('mod_cta_secondary')"
            :title="$t('mod_title')"
          >
            <p slot="text" class="max-w-[372px]">{{ $t("mod_message") }}</p>
          </ui-generic-modal>
        </div>
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
    "ui-calendar": async () =>
      await import("@/components/bookingWizard/uiBookingCalendar.vue"),
    "ui-form": async () =>
      await import("@/components/wizard/uiBookingWizardForm.vue"),
    "ui-extra-service": async () =>
      await import("@/components/bookingWizard/uiExtraService.vue"),
    "ui-generic-modal": async () =>
      await import("@/components/uiGenericModal.vue"),
  },
  middleware({ route, redirect, app }) {
    // If we don't have deal_id, avoid go to this route
    if (!route.params.deal) redirect(app.localePath("/"));
  },
  head() {
    return {
      meta: [
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow",
        },
      ],
    };
  },
  data() {
    return {
      lastFilledComponent: null,
      lastStep: 4,
      states: {
        0: () => this.$store.dispatch("bookingWizard/SET_CITY", null),
        1: () => {
          this.$store.dispatch("bookingWizard/SET_CITY", null);
          this.$store.dispatch("bookingWizard/SET_PLAN", null);
        },
        2: () => {
          this.$store.dispatch("bookingWizard/SET_PLAN", null);
          this.$store.dispatch("bookingWizard/SET_DATE", null);
        },
        3: () => {
          this.$store.dispatch("bookingWizard/SET_DATE", null);
          this.$store.dispatch("bookingWizard/RESET_ADDITIONAL_SERVICES", null);
        },
        4: () => {
          this.$store.dispatch("bookingWizard/SET_PLAN", null);
        },
      },
      openModal: false,
      toPath: null,
      formSubmissionStep: false,
      maxScrolls: {},
      focusOnExtraServices: false,
    };
  },
  mounted() {
    // var self = this;
    // window.addEventListener("scroll", self.scrollBehavior);

    // Set max number of steps in the store
    this.$store.dispatch("bookingWizard/SET_LAST_STEP", this.lastStep);

    // Populate max valid scrollY
    // setTimeout(() => {
    //   this.$refs.boxWizard.childNodes.forEach((node) => {
    //     if (node.id) {
    //       this.maxScrolls[node.id] =
    //         Math.abs(node.offsetHeight - window.innerHeight) +
    //         Math.abs(node.getBoundingClientRect().top);
    //     }
    //   });
    // }, 100);

    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState("bookingWizard", {
      city: (state) => state.city,
      step: (state) => state.currentStep,
      plan: (state) => state.plan,
      date: (state) => state.date,
    }),
    ...mapState("loading", {
      uiWizardCity: (state) => state.pageSection?.uiWizardCity,
      uiWizardPlan: (state) => state.pageSection?.uiWizardPlan,
      uiBookingCalendar: (state) => state.pageSection?.uiBookingCalendar,
      uiExtraService: (state) => state.pageSection?.uiExtraService,
      uiBookingWizardForm: (state) => state.pageSection?.uiBookingWizardForm,
    }),
    areFullLoaded() {
      return (
        this.uiWizardCity &&
        this.uiWizardPlan &&
        this.uiBookingCalendar &&
        this.uiExtraService &&
        this.uiBookingWizardForm
      );
    },
    checks() {
      return {
        1: this.city !== null,
        2: this.city !== null && this.plan !== null,
        3: this.city !== null && this.plan !== null && this.date !== null,
        4: this.city !== null && this.plan !== null && this.date !== null,
      };
    },
  },
  methods: {
    /**
     * Detect when extra services area is visible to set an internal variable accordingly
     */
    extraServiceVisible(isIntersecting) {
      this.focusOnExtraServices = isIntersecting;
    },
    handleFormSubmission() {
      this.formSubmissionStep = true;
      this.$router.push({ path: this.localePath("/booking/resume") });
    },
    handleModalLeaveClick(leave) {
      this.openModal = false;
      if (leave) {
        this.$store.dispatch("bookingWizard/RESET_ALL");
        this.$router.push({ path: this.localePath(this.toPath.path) });
      }
    },
    /**
     * Reset vuex state if user tries to 'hack' the step form
     */
    resetStateOnInvalidStep(step) {
      return this.states[step]();
    },
    /**
     * Ensure that next form step is valid before go forward
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

      const maxScrollY = this.maxScrolls[`step${this.step}`];
      if (window.scrollY >= maxScrollY) {
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
        this.$store.dispatch("bookingWizard/SET_STEP", toStep);
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollBehavior);

    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "uiWizardCity");
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "uiWizardPlan");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "uiBookingCalendar"
    );
    this.$store.dispatch("loading/REMOVE_LOADED_COMPONENT", "uiExtraService");
    this.$store.dispatch(
      "loading/REMOVE_LOADED_COMPONENT",
      "uiBookingWizardForm"
    );
  },
  beforeRouteLeave(to, from, next) {
    this.toPath = to;

    if ((this.city || this.plan || this.date) && !this.formSubmissionStep) {
      this.openModal = true;
    } else {
      next();
    }
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
  src="@/i18n/views/bookingWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/views/bookingWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/views/bookingWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/views/bookingWizardIndex.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/views/bookingWizardIndex.yaml"
></i18n>
