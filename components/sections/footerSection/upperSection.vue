<template>
  <div class="grid-layout">
    <div
      class="pt-12 col-span-8 col-start-3 tablet:col-span-8 tablet:col-start-3 text-center row-start-1 mobileL:col-start-1 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full"
    >
      <div class="flex w-full items-center justify-center">
        <h2 class="alternative max-w-[744px] mobile:max-w-[328px]">
          {{ $t("foo_title_prefix") }}
          <span class="text-salmon">{{ $t("foo_title_highlight") }}</span>
          {{ $t("foo_title_suffix") }}
        </h2>
      </div>
    </div>

    <div class="col-span-full pt-6 desktopL:pt-8 row-start-2">
      <div class="flex justify-center items-center">
        <div
          class="flex flex-col z-[3] gap-2 justify-center items-center max-w-[528px]"
        >
          <form class="w-full">
            <ui-field
              class="w-full z-[0]"
              :label="$t('form_phone')"
              :validation="validationPhone"
              :displayBackgroundOnError="true"
              :messages="$t('error_phone')"
            >
              <ui-input
                :displayCTAButton="true"
                :placeholder="$t('form_phone')"
                :onlyRightRadius="true"
                :hidePhonePrefix="true"
                v-model.trim="validationPhone.$model"
                type="tel"
                class="h-12"
                :debounceTime="100"
                :loadingCTAButton="loading"
                @click="handleFormSubmission"
                @change="handleInputChange"
              ></ui-input>
            </ui-field>
          </form>

          <p class="text-white font-roboto font-medium text-xs -z-[1] bottom">
            {{ $t("foo_input_legal_prefix") }}
            <nuxt-link
              :to="localePath('/legal/privacy')"
              class="text-salmon underline"
              >{{ $t("foo_input_legal_span") }}</nuxt-link
            >
            {{ $t("foo_input_legal_suffix") }}
            <span
              class="inline-flex cursor-pointer"
              @click="showLegalModal = true"
            >
              <info-icon class="h-3 w-3 fill-salmon"></info-icon>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="col-span-full pt-6 row-start-3 mobile:pt-8 bottom">
      <div class="flex w-full items-center justify-center bottom">
        <p class="p2 mobile:max-w-[328px] text-white bottom">
          {{ $t("foo_body_prefix") }}
          <a :href="`tel:${$t('foo_body_phone')}`" class="font-bold">{{
            $t("foo_body_span")
          }}</a>
          {{ $t("foo_body_prefix_email") }}
          <a :href="`mailto:${$t('foo_body_email')}`" class="font-bold">{{
            $t("foo_body_email")
          }}</a>
          {{ $t("foo_body_suffix") }}
        </p>
      </div>
    </div>

    <!-- Legal modal -->
    <ui-legal-modal
      class="bottom z-50"
      v-if="showLegalModal"
      @close="showLegalModal = false"
    ></ui-legal-modal>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import ensureMode from "@/helpers/ensureMode";
import { validatePhoneNumber } from "@/utils/validations";
import localesMetadata from "@/mixins/localesMetadata";
import {
  retrieveGclid,
  retrievePartnershipReferrer,
} from "@/utils/queryStrings";
import { validationMixin } from "vuelidate";

export default {
  name: "upperSection",
  components: {
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-field": async () => await import("@/components/uiField.vue"),
    "info-icon": async () => await import("@/components/icons/InfoIcon.vue"),
    "ui-legal-modal": async () =>
      await import("@/components/legal/uiLegalModal.vue"),
  },
  validations: {
    phone: { required, validatePhoneNumber },
  },
  mixins: [localesMetadata, validationMixin],
  data() {
    return {
      showLegalModal: false,
      phone: "",
      loading: false,
    };
  },
  computed: {
    validationPhone() {
      return ensureMode("client", this.$v, "phone");
    },
  },
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/prices") });
    },
    /**
     * Submit the form
     */
    async handleFormSubmission() {
      this.$v.$touch();
      this.loading = true;

      try {
        if (!this.$v.$invalid) {
          await this.$api.$post("/api/submit", {
            email: this.phone,
            phone: this.phone,
            pageUri: window.location.href,
            pageName: this.$route.meta.pageName,
            pipeline: this.localeMetadata.country.toUpperCase(),
            gclid: retrieveGclid(), // Although has this name, is a convention for legacy data. It should return the full url parameters
            partnershipCode: retrievePartnershipReferrer(),
            livensaPromo:
              this.$route.meta.pageName === "livensaPage"
                ? this.$route.params.page
                : null,
            ciudadelaPromo: this.$route.meta.pageName === "ciudadelaPage",
            cbrePromo: this.$route.meta.pageName === "c200Page",
            studentsPromo: this.$route.meta.pageName === "studentsPage",
            resaPromo:
              this.$route.meta.pageName === "resaPage"
                ? this.$route.params.page
                : null,
          });

          // On success, go to success page
          this.$store.dispatch(`confirmationResume/SET_ALLOWED_ACCESS`, true);
          this.$router.push({ path: this.localePath("/resume") });
        }
      } catch (error) {
        this.$toast({
          message: this.$t("generic_error"),
          type: "danger",
          displayTime: 3500,
        });
      } finally {
        this.loading = false;
      }
    },
    /**
     * Reset vuelidate state when clearing the input
     */
    handleInputChange(value) {
      if (!value) {
        this.$v.$reset();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(p.p2) {
  @apply text-white leading-[25px] text-center;
}
div * :not(.bottom) {
  @apply z-[0];
}
.overlapping {
  transform: translateX(75%);

  :deep(svg) {
    @apply stroke-white;
  }
}
:deep(input) {
  @apply h-12;
}
:deep(div.backgroundError) {
  @apply -z-[1];
}
:deep(.input-label-error-container) {
  @apply top-3 right-32;
}
:deep(.input-clear-button) {
  @apply top-3 right-36;
}
</style>

<i18n lang="yaml" locale="es">
foo_title_prefix: "Déjanos tu"
foo_title_highlight: "teléfono"
foo_title_suffix: "y te llamaremos lo antes posible"
foo_input_legal_prefix: 'Al pulsar en "Enviar" aceptas nuestra'
foo_input_legal_span: "política de privacidad"
foo_input_legal_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
foo_body_prefix: "O si lo prefieres, llámanos al"
foo_body_span: "919 033 033"
foo_body_phone: "+34919033033"
foo_body_prefix_email: "o escríbenos a"
foo_body_email: "hola@box2boxstorage.com"
foo_body_suffix: "y resolveremos todas tus dudas"
form_phone: "Teléfono"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>
<i18n lang="yaml" locale="fr">
foo_title_prefix: "Laissez-nous votre"
foo_title_highlight: "numéro de téléphone"
foo_title_suffix: "et nous vous rappellerons dès que possible."
foo_input_legal_prefix: 'En cliquant sur "Envoyer", vous acceptez que notre'
foo_input_legal_span: "politique de confidentialité"
foo_input_legal_suffix: "pour traiter vos données dans le but de répondre à votre question"
foo_body_prefix: "Ou si vous préférez, appelez-nous au"
foo_body_span: "06 26 56 54 74"
foo_body_phone: "+33626565474"
foo_body_prefix_email: "ou écrivez-nous à"
foo_body_email: "contact@box2boxstorage.com"
foo_body_suffix: "et nous répondrons à vos questions"
form_phone: "Téléphone"
error_phone:
  validatePhoneNumber: "Téléphone non valide"
generic_error: "Erreur de validation du formulaire. Veuillez réessayer plus tard"
</i18n>
<i18n lang="yaml" locale="it">
foo_title_prefix: "Lasciaci il tuo"
foo_title_highlight: "Telefono"
foo_title_suffix: "e ti ricontatteremo il prima possibile"
foo_input_legal_prefix: "Cliccando su 'Chiamami' accetti la nostra"
foo_input_legal_span: "informativa sulla privacy"
foo_input_legal_suffix: "per gestire i tuoi dati con lo scopo di processare le tue richieste o domande"
foo_body_prefix: "O se preferite, contattaci al "
foo_body_span: "02 8294 2526"
foo_body_phone: "+390282942526"
foo_body_prefix_email: "o scriveteci all'indirizzo"
foo_body_email: "info@box2boxstorage.com"
foo_body_suffix: "e chiariremo tutti i tuoi dubbi"
form_phone: "Telefono"
error_phone:
  validatePhoneNumber: "Telefone inválido"
generic_error: "Si é verificato un errore durante l'invio. Riprova più tardi "
</i18n>
<i18n lang="yaml" locale="pt">
foo_title_prefix: "Deixa o teu"
foo_title_highlight: "Telefone"
foo_title_suffix: "e voltaremos a ligar-lhe assim que possível"
foo_input_legal_prefix: 'Ao clicar em "Enviar" está a concordar com a nossa'
foo_input_legal_span: "política de privacidade"
foo_input_legal_suffix: "para tratar os seus dados com o objectivoresponder à sua consulta ou pedido"
foo_body_prefix: "Ou se preferir, contacte-nos para"
foo_body_span: "21 020 33 66"
foo_body_phone: "+351210203366"
foo_body_prefix_email: "ou escreva-nos para"
foo_body_email: "contacto@box2boxstorage.com"
foo_body_suffix: "e resolveremos todas as suas dúvidas"
form_phone: "Telefone"
error_phone:
  validatePhoneNumber: "Telefone inválido"
generic_error: "Erro ao submeter o formulário. Por favor tente novamente mais tarde"
</i18n>
<i18n lang="yaml" locale="mx">
foo_title_prefix: "Déjanos tu"
foo_title_highlight: "teléfono"
foo_title_suffix: "y te llamaremos lo antes posible"
foo_input_legal_prefix: 'Al pulsar en "Enviar" aceptas nuestra'
foo_input_legal_span: "política de privacidad"
foo_input_legal_suffix: "para tratar tus datos con la finalidad de tramitar tu consulta o solicitud"
foo_body_prefix: "O llámanos al"
foo_body_span: "55 8037 4700"
foo_body_phone: "+525580374700"
foo_body_prefix_email: "o escríbenos a"
foo_body_email: "atencion@box2boxstorage.com"
foo_body_suffix: "y resolveremos todas tus dudas"
form_phone: "Teléfono"
error_phone:
  validatePhoneNumber: "Teléfono inválido"
generic_error: "Error al enviar el formulario. Inténtelo de nuevo más tarde"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/upperSection/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/upperSection/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/upperSection/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/upperSection/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/upperSection/en_mx.yaml"
></i18n>
