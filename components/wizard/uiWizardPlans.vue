<template>
  <div class="bg-white h-full">
    <section
      class="desktopL:my-auto desktop:my-auto"
      :class="{
        'grid-layout mobile:pt-20 pt-32 pb-8': !isLandingLayout,
        'subgrid-layout': isLandingLayout,
      }"
    >
      <h2
        class="wizard-title desktopL:col-span-full desktop:col-span-full mobile:col-end-5 mobile:col-start-1"
        :class="{
          'desktopL:col-start-2 desktop:col-start-2 tablet:col-span-8 tablet:col-start-3 mobileL:col-span-8 mobileL:col-start-1':
            !isLandingLayout,
          'desktopL:col-start-1 desktop:col-start-1 tablet:col-start-1 tablet:col-span-full mobileL:col-span-full mobileL:col-start-1':
            isLandingLayout,
        }"
      >
        {{
          !isLandingLayout ? $t("step_2_title_1") : $t("step_2_title_1_landing")
        }}
        <span class="text-electric">{{
          !isLandingLayout
            ? $t("step_2_highlight")
            : $t("step_2_highlight_landing")
        }}</span>
        {{
          !isLandingLayout ? $t("step_2_title_2") : $t("step_2_title_2_landing")
        }}
      </h2>

      <div class="col-start-1 col-span-full pt-6 flex justify-center z-[3]">
        <ui-button-pills-group
          :values="[
            { name: $t('step_2_monthly'), value: 'monthly' },
            { name: $t('step_2_biannual'), value: 'biannual' },
            { name: $t('step_2_annual'), value: 'annual' },
          ]"
          @input="handlePaymentPeriodChange"
          :defaultSelectedValue="paymentPeriod"
        ></ui-button-pills-group>
      </div>

      <!-- Card section -->
      <div
        class="col-span-10 tablet:col-span-full mobileL:col-span-8 mobile:col-span-4 row-start-3 col-start-2"
      >
        <div class="flex flex-row align-middle h-full mb-4">
          <slide-navigation-arrow-icon
            class="swiper-button-prev tablet:hidden mobileL:hidden mobile:hidden"
          ></slide-navigation-arrow-icon>
          <div class="swiper-plans overflow-hidden pt-10 pb-12 pl-16 pr-16">
            <div class="swiper-wrapper cursor-default">
              <div
                class="inline-flex swiper-slide"
                v-for="(availablePlan, index) in availablePlans"
                :key="index"
              >
                <ui-plan-card
                  :displayButton="true"
                  :title="availablePlan.space"
                  :price="availablePlan.price"
                  :price_promo="availablePlan.price_promo"
                  :pickup_promo="availablePlan.pickup_promo"
                  :paymentPeriod="paymentPeriod"
                  :features="availablePlan.features"
                  :space="availablePlan.space"
                  :currencyCode="availablePlan.currency"
                  :highlight="availablePlan.popular"
                  :isSelected="availablePlan.space === plan?.space"
                  @click="handleClickOnSelectedPlan(availablePlan, index)"
                >
                </ui-plan-card>
              </div>
            </div>
          </div>
          <slide-navigation-arrow-icon
            class="swiper-button-next"
          ></slide-navigation-arrow-icon>
        </div>
        <div
          class="swiper-pagination-plans flex justify-center space-x-2 w-full cursor-pointer"
        ></div>
      </div>

      <!-- Common info section -->
      <div
        class="col-span-full flex justify-center row-start-4 mt-14 pb-[72px] font-poppins text-[12px] leading-[13px] -tracking-[0.02em] text-center font-normal"
      >
        {{ $t("step_2_minimum_stay") }}
        <br />
        {{ $t("step_2_insurance") }}
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import uiPlanCard from "@/components/wizard/uiPlanCard.vue"; // Cannot be imported lazily due to swiper behavior
import uiButtonPillsGroup from "@/components/uiButtonPillsGroup.vue"; // Cannot be imported lazily due to swiper behavior
import slideNaviationArrowIcon from "@/components/icons/SlideNavigationArrowIcon.vue"; // Cannot be imported lazily due to swiper behavior
import localesMetadata from "@/mixins/localesMetadata";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

export default {
  name: "uiWizardPlans",
  props: {
    store: {
      type: String,
      default: null,
    },
    isLandingLayout: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "ui-button-pills-group": uiButtonPillsGroup,
    "ui-plan-card": uiPlanCard,
    "slide-navigation-arrow-icon": slideNaviationArrowIcon,
  },
  async fetch() {
    if (this.fromLandingPage && this.plans !== null) {
      return;
    }

    try {
      const response = await this.$api.$get("/api/prices", {
        params: {
          site: this.localeMetadata.country,
          lang: this.localeMetadata.simplifiedLang,
        },
      });

      // Save prices into vuex in order to get them later
      this.$store.dispatch("plans/SET_PLANS", response);

      // Force updating the swiper on client-side
      if (process.client && this.swiper) {
        this.$nextTick(() => {
          this.swiper.update();
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  mounted() {
    if (!this.swiper) {
      Swiper.use([Pagination, Navigation]);
      this.swiper = new Swiper(".swiper-plans", {
        direction: "horizontal",
        loop: false,
        autoResize: true,
        centeredSlides: true,
        breakpoints: {
          0: {
            initialSlide: 3,
            slidesPerView: 1,
            spaceBetween: 16,
          },
          755: {
            initialSlide: 2,
            slidesPerView: 2,
            spaceBetween: 16,
          },
          905: {
            initialSlide: 3,
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1240: {
            initialSlide: 3,
            slidesPerView: 2.5,
            spaceBetween: 24,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          1920: {
            initialSlide: 3,
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
        },
        pagination: {
          el: ".swiper-pagination-plans",
          type: "bullets",
          clickable: true,
        },
        observer: true,
        observeParents: true,
      });
    }
  },
  mixins: [localesMetadata],
  data() {
    return {
      swiper: null,
      localStore: this.store,
    };
  },
  computed: {
    ...mapState("plans", {
      plans: (state) => state.plans,
    }),
    ...mapState("pricesWizard", {
      fromLandingPage: (state) => state.fromLandingPage,
    }),
    /**
     * Cannot be used the namespaced convention when store is passed as prop
     */
    ...mapState({
      city(state) {
        return state[this.store].city;
      },
      plan(state) {
        return state[this.store].plan;
      },
    }),
    paymentPeriod: {
      get() {
        if (this.store) {
          return this.$store.state[this.store].paymentPeriod;
        }
        return "";
      },
      set(value) {
        this.$store.dispatch(`${this.store}/SET_PAYMENT_PERIOD`, value);
      },
    },
    availablePlans() {
      if (this.plans) {
        const plans = this.plans[this.paymentPeriod];
        const city = this.city || Object.keys(plans)[0];
        return plans[city];
      }

      return [];
    },
  },
  methods: {
    handlePaymentPeriodChange(value) {
      // Force updating the swiper on client-side
      if (process.client && this.swiper) {
        this.$nextTick(() => {
          this.swiper.update();
        });
      }
      this.paymentPeriod = value;
    },
    handleClickOnSelectedPlan(selectedPlan, index) {
      this.$store.dispatch(`${this.store}/SET_PLAN`, selectedPlan);

      // Force updating the swiper on client-side
      if (process.client && this.swiper) {
        this.$nextTick(() => {
          this.swiper.slideTo(index);
        });
      }

      // Propagate change to parent
      this.$emit("click");
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: auto;
}
.swiper-slide div {
  height: 100%;
}
.swiper-container-horizontal > .swiper-pagination-plans {
  bottom: unset;
}
:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
}
:deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  background-color: #4760ff;
}
:deep(.swiper-slide-active) {
  width: 450px;
}
.swiper-button-prev,
.swiper-button-next {
  position: relative;
  width: 32px;
  height: 32px;

  @media (max-width: 1239px) {
    display: none;
  }
}

.swiper-button-prev {
  left: -75px;
}

.swiper-button-next {
  right: -75px;
  transform: rotate(180deg);
}
</style>
<i18n lang="yaml" locale="es">
step_2_title_1: "Elige el"
step_2_highlight: "espacio"
step_2_title_2: "que más se ajuste a tus necesidades"
step_2_title_1_landing: "Calcula el"
step_2_highlight_landing: "precio"
step_2_title_2_landing: "del trastero que necesitas"
step_2_monthly: "Mensual"
step_2_biannual: "Semestral (-15%)"
step_2_annual: "Anual (-25%)"
step_2_minimum_stay: "El periodo mínimo de contratación es de 3 meses"
step_2_insurance: "¡Seguro incluido!"
step_2_undefined_title: "¿No estás seguro?"
step_2_undefined_subtitle: "Deja que te orientemos"
step_2_undefined_cta: "Seleccionar"
</i18n>
<i18n lang="yaml" locale="fr">
step_2_title_1: "Choisissez le"
step_2_highlight: "espace"
step_2_title_2: "qui correspond le mieux à vos besoins"
step_2_title_1_landing: "Calcule le"
step_2_highlight_landing: "prix"
step_2_title_2_landing: "de l'espace de stockage nécessaire"
step_2_monthly: "Mensuel"
step_2_biannual: "Semestriel (-10%)"
step_2_annual: "Annuel (-20%)"
step_2_minimum_stay: "La durée minimale du contrat est de 3 mois"
step_2_insurance: "Assurance incluse !"
step_2_undefined_title: "Vous n'êtes pas sûr ?"
step_2_undefined_subtitle: "Laissez-nous vous guider"
step_2_undefined_cta: "Sélectionnez"
</i18n>
<i18n lang="yaml" locale="it">
step_2_title_1: "Scegli lo"
step_2_highlight: "spazio"
step_2_title_2: "che più si adatti alle tue necessità "
step_2_title_1_landing: "Calcola il"
step_2_highlight_landing: "prezzo"
step_2_title_2_landing: "del magazzino di cui avete bisogno"
step_2_monthly: "Mensile"
step_2_biannual: "Semestrale (-10%)"
step_2_annual: "Annuale (-20%)"
step_2_minimum_stay: "Il periodo minimo del contratto é di 3 mesi "
step_2_insurance: "Assicurazione inclusa"
step_2_undefined_title: "Non sei sicuro?"
step_2_undefined_subtitle: "Lasciatevi guidare da noi"
step_2_undefined_cta: "Seleziona"
</i18n>
<i18n lang="yaml" locale="pt">
step_2_title_1: "Escolha o "
step_2_highlight: "espaço"
step_2_title_2: "que melhor se adapta às suas necessidades"
step_2_title_1_landing: "Calcula o"
step_2_highlight_landing: "preço"
step_2_title_2_landing: "do espaço de armazenamento de que necessita"
step_2_monthly: "Mensal"
step_2_biannual: "Semestral (-15%)"
step_2_annual: "Anual (-25%)"
step_2_minimum_stay: "O período mínimo do contrato é de 3 meses"
step_2_insurance: "Seguro incluído!"
step_2_undefined_title: "Não tem a certeza?"
step_2_undefined_subtitle: "Deixe-nos guiá-lo"
step_2_undefined_cta: "Seleccione"
</i18n>
<i18n lang="yaml" locale="mx">
step_2_title_1: "Elige el"
step_2_highlight: "espacio"
step_2_title_2: "que más se ajuste a tus necesidades"
step_2_title_1_landing: "Calcula el"
step_2_highlight_landing: "precio"
step_2_title_2_landing: "de la mini bodega que necesitas"
step_2_monthly: "Mensual"
step_2_biannual: "Semestral"
step_2_annual: "Anual"
step_2_minimum_stay: "El periodo mínimo de contratación es de 3 meses"
step_2_insurance: "¡Seguro incluido!"
step_2_undefined_title: "¿No estás seguro?"
step_2_undefined_subtitle: "Deja que te orientemos"
step_2_undefined_cta: "Seleccionar"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiWizardPlans/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiWizardPlans/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiWizardPlans/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiWizardPlans/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiWizardPlans/en_mx.yaml"
></i18n>
