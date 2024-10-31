<template>
  <div class="bg-white h-full">
    <section class="grid-layout tablet:items-start h-full">
      <div
        class="row-start-1 col-start-2 col-span-5 mt-12 tablet:col-start-1 tablet:col-span-6 mobileL:col-start-1 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full z-[1]"
      >
        <h2 class="wizard-title">
          {{ $t("res_title_prefix") }}
          <span class="text-electric">{{ $t("res_title_highlight") }}</span>
          {{ $t("res_title_suffix") }}
        </h2>
        <p
          class="pt-2 font-roboto font-normal text-dark/60 text-[18px] leading-[25px]"
        >
          {{ $t("res_subtitle") }}
        </p>
        <div class="mobileL:subgrid-layout mobile:subgrid-layout">
          <div
            class="pt-6 w-fit z-[1] mobileL:w-full mobileL:col-start-2 mobileL:col-span-6 mobile:w-full mobile:col-start-1 mobile:col-span-6"
          >
            <ui-button size="small" @click="$emit('click')">
              {{ $t("res_cta") }}
            </ui-button>
          </div>
        </div>
      </div>

      <div
        class="row-start-1 col-start-8 desktopL:row-span-full desktop:row-span-full desktop:col-span-4 desktop:col-start-8 col-span-3 tablet:row-span-full tablet:col-start-7 tablet:col-span-5 mobileL:row-start-2 mobileL:col-start-2 mobileL:col-span-6 mobileL:mt-10 mobile:row-start-2 mobile:col-start-1 mobile:col-span-full mobile:mt-10 z-[1]"
        v-if="displayPlan"
      >
        <div class="flex flex-col space-y-2">
          <p class="wizard-subtitles">
            {{ $t("res_city") }}:
            <span class="text-electric">{{ $t(`cities.${city}`) }}</span>
          </p>
          <div class="contents" v-if="plan">
            <p class="wizard-subtitles">{{ $t("res_choosen_plan") }}:</p>
            <div class="flex mt-2">
              <ui-plan-card
                :displayButton="false"
                :title="plan.space"
                :price="plan.price"
                :price_promo="plan.price_promo"
                :pickup_promo="plan.pickup_promo"
                :paymentPeriod="paymentPeriod"
                :features="plan.features"
                :space="plan.space"
                :highlight="plan.popular"
                :currencyCode="plan.currency"
              ></ui-plan-card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "uiWizardResume",
  components: {
    "ui-plan-card": async () =>
      await import("@/components/wizard/uiPlanCard.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  props: {
    store: {
      type: String,
      default: null,
    },
    displayPlan: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState({
      plan(state) {
        return state[this.store].plan;
      },
      paymentPeriod(state) {
        return state[this.store].paymentPeriod;
      },
      city(state) {
        return state[this.store].city;
      },
    }),
  },
};
</script>
<i18n lang="yaml" locale="es">
res_title_prefix: "¡Gracias! Nos pondremos en"
res_title_highlight: "contacto"
res_title_suffix: "contigo lo antes posible"
res_subtitle: " "
res_cta: "Página principal"
res_city: "Ciudad"
res_choosen_plan: "Espacio elegido"
</i18n>
<i18n lang="yaml" locale="fr">
res_title_prefix: "Merci ! Nous allons vous"
res_title_highlight: "contacter"
res_title_suffix: "dès que possible"
res_subtitle: " "
res_cta: "Page d'accueil"
res_city: "Ville"
res_choosen_plan: "Espace choisi"
</i18n>
<i18n lang="yaml" locale="it">
res_title_prefix: "Grazie, Ci metteremo in "
res_title_highlight: "contatto"
res_title_suffix: "il prima possibile"
res_subtitle: " "
res_cta: "Home"
res_city: "Città "
res_choosen_plan: "Spazio scelto"
</i18n>
<i18n lang="yaml" locale="pt">
res_title_prefix: "Obrigado! Entrearemos em "
res_title_highlight: "contato"
res_title_suffix: "consigo o mais rápido possível"
res_subtitle: " "
res_cta: "Página principal "
res_city: "Cidade"
res_choosen_plan: "Espaço escolhido"
</i18n>
<i18n lang="yaml" locale="mx">
res_title_prefix: "¡Gracias! Nos pondremos en"
res_title_highlight: "contacto"
res_title_suffix: "contigo lo antes posible"
res_subtitle: " "
res_cta: "Página principal"
res_city: "Ciudad"
res_choosen_plan: "Espacio elegido"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiWizardResume.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiWizardResume.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiWizardResume.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiWizardResume.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiWizardResume.yaml"
></i18n>
