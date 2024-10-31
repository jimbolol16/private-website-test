<template>
  <div class="bg-white h-full outline-none">
    <section
      class="grid-layout s mobile:pt-20 pt-32 pb-8 desktopL:my-auto desktop:my-auto"
    >
      <div
        class="flex flex-col dark font-extrabold text-[30px] leading-10 row-start-1 row-end-1 col-start-2 col-span-12 mobileL:col-span-8 mobile:col-start-1 mobile:col-span-4"
      >
        <div class="gap-x-1 items-center mb-[54px]">
          {{ $t("book_additional_prefix") }}
          <span class="text-electric">{{
            $t("book_additional_highlight")
          }}</span>
          {{ $t("book_additional_suffix") }}
        </div>
      </div>
      <div
        class="row-start-2 col-start-4 mobileL:col-start-1 mobileL:col-span-4 mobile:col-start-1 mobile:col-span-4 col-span-3 mb-6"
      >
        <div class="flex w-full justify-end mobile:justify-center">
          <div
            class="flex flex-col space-y-6"
            @click="handleItemClick('furniturePackaging')"
          >
            <ui-service-card>
              <template v-slot:image
                ><nuxt-img
                  :provider="$config.img_provider"
                  src="/wizard/extraService/furniturepackaging.svg"
                  class="w-[104px] h-[104px]"
                  alt="furniturepackaging"
              /></template>
              <template v-slot:title>
                <div class="flex w-full justify-center">
                  <h4 class="text-dark max-w-[128px] text-center">
                    {{ $t("service_additional_1") }}
                  </h4>
                </div>
              </template>
            </ui-service-card>
          </div>
        </div>
      </div>
      <div
        class="row-start-2 mobile:row-start-3 col-start-7 mobileL:col-start-5 mobileL:col-span-4 mobile:col-start-1 mobile:col-span-4 col-span-3 mb-6"
      >
        <div class="flex w-full justify-start mobile:justify-center">
          <div
            class="flex flex-col space-y-6"
            @click="handleItemClick('boxPackaging')"
          >
            <ui-service-card>
              <template v-slot:image
                ><nuxt-img
                  :provider="$config.img_provider"
                  src="/wizard/extraService/boxpackaging.svg"
                  class="w-[104px] h-[104px]"
                  alt="boxpackaging"
              /></template>
              <template v-slot:title>
                <div class="flex w-full justify-center">
                  <h4 class="text-dark max-w-[128px] text-center">
                    {{ $t("service_additional_2") }}
                  </h4>
                </div>
              </template>
            </ui-service-card>
          </div>
        </div>
      </div>
      <div
        class="row-start-3 col-start-4 mobile:row-start-4 c mobileL:col-start-1 mobileL:col-span-4 mobile:col-start-1 mobile:col-span-4 col-span-3 mb-6"
      >
        <div class="flex w-full justify-end mobile:justify-center">
          <div
            class="flex flex-col space-y-6"
            @click="handleItemClick('furnitureDisassembly')"
          >
            <ui-service-card>
              <template v-slot:image
                ><nuxt-img
                  :provider="$config.img_provider"
                  src="/wizard/extraService/disassemblefurniture.svg"
                  class="w-[104px] h-[104px]"
                  alt="disassemblefurniture"
              /></template>
              <template v-slot:title>
                <div class="flex w-full justify-center">
                  <h4 class="text-dark max-w-[128px] text-center">
                    {{ $t("service_additional_3") }}
                  </h4>
                </div>
              </template>
            </ui-service-card>
          </div>
        </div>
      </div>
      <div
        class="row-start-3 mobile:row-start-5 col-start-7 mobileL:col-start-5 mobileL:col-span-4 mobile:col-start-1 mobile:col-span-4 col-span-3 mb-6"
      >
        <div class="flex w-full justify-start mobile:justify-center">
          <div class="flex flex-col space-y-6">
            <div @click="handleItemClick('stairs')">
              <ui-service-card>
                <template v-slot:image
                  ><nuxt-img
                    :provider="$config.img_provider"
                    src="/wizard/extraService/stair.svg"
                    class="w-[104px] h-[104px]"
                    alt="stairs"
                /></template>
                <template v-slot:title>
                  <div class="flex w-full justify-center">
                    <h4 class="text-dark max-w-[128px] text-center">
                      {{ $t("service_additional_4") }}
                    </h4>
                  </div>
                </template>
              </ui-service-card>
            </div>
            <div class="flex w-full justify-end">
              <div class="flex flex-col">
                <ui-button :arrow="true" @click="handleClick" class="w-fit">
                  {{ $t("book_additional_cta") }}
                </ui-button>
                <p
                  class="sub-heading-button mt-2 tablet:hidden mobileL:hidden mobile:hidden"
                >
                  {{ $t("book_additional_button_text") }}
                </p>
              </div>
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
  name: "uiExtraService",
  props: {
    focused: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "ui-service-card": async () =>
      await import("@/components/wizard/uiServiceCard.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  computed: {
    ...mapState("bookingWizard", {
      additionalServices: (state) => state.additionalServices,
    }),
  },
  methods: {
    /**
     * Native method to handle button click
     */
    handleClick() {
      // Propagate the change
      this.$emit("click");
    },
    handleItemClick(item) {
      if (item in this.additionalServices) {
        this.$store.dispatch("bookingWizard/REMOVE_ADDITIONAL_SERVICE", item);
      } else {
        this.$store.dispatch("bookingWizard/ADD_ADDITIONAL_SERVICE", item);
      }
    },
    /**
     * On enter press, propagate the event to parent node
     */
    keydownEvent(evt) {
      if (evt.keyCode === 13) {
        this.handleClick();
      }
    },
  },
  watch: {
    /*eslint-disable */
    focused: function (newValue, oldValue) {
      if (newValue) {
        window.addEventListener("keydown", this.keydownEvent);
      } else {
        window.removeEventListener("keydown", this.keydownEvent);
      }
    },
  },
  beforeDestroy() {
    // Sanity check... unmount event listener on destroy
    window.removeEventListener("keydown", this.keydownEvent);
  },
};
</script>
<i18n lang="yaml" locale="es">
book_additional_prefix: "¿Necesitas algún"
book_additional_highlight: "servicio"
book_additional_suffix: "adicional?"
book_additional_cta: "Siguiente"
book_additional_button_text: "O presiona ENTER"
service_additional_1: "Embalaje de muebles"
service_additional_2: "Embalaje de cajas"
service_additional_3: "Desmontaje de muebles"
service_additional_4: "Carga/descarga por escalera"
</i18n>
<i18n lang="yaml" locale="fr">
book_additional_prefix: "Avez-vous besoin de"
book_additional_highlight: "de service"
book_additional_suffix: "des services supplémentaires ?"
book_additional_cta: "Suivant"
book_additional_button_text: "Ou appuyez sur ENTRÉE"
service_additional_1: "Emballage de meubles"
service_additional_2: "Emballage des boîtes"
service_additional_3: "Démontage de meubles"
service_additional_4: "Chargement/déchargement par les escaliers"
</i18n>
<i18n lang="yaml" locale="it">
book_additional_prefix: "Hai bisogno di qualche"
book_additional_highlight: "servizio "
book_additional_suffix: "addizionale?"
book_additional_cta: "Continua"
book_additional_button_text: "O premi INVIO"
service_additional_1: "Imballaggio di mobili"
service_additional_2: "Imballaggio delle scatole"
service_additional_3: "Smontaggio di mobili"
service_additional_4: "Carico/scarico con scale"
</i18n>
<i18n lang="yaml" locale="pt">
book_additional_prefix: "Precisa de algum"
book_additional_highlight: "serviço"
book_additional_suffix: "adicional?"
book_additional_cta: "Seguinte"
book_additional_button_text: "Ou prima ENTER"
service_additional_1: "Embalagem de móveis"
service_additional_2: "Empacotamento de caixas"
service_additional_3: "Desmontagem de móveis"
service_additional_4: "Carga/descarga por escadas"
</i18n>
<i18n lang="yaml" locale="mx">
book_additional_prefix: "¿Necesitas algún"
book_additional_highlight: "servicio"
book_additional_suffix: "adicional?"
book_additional_cta: "Siguiente"
book_additional_button_text: "O presiona ENTER"
service_additional_1: "Embalaje de muebles"
service_additional_2: "Embalaje de cajas"
service_additional_3: "Desmontaje de muebles"
service_additional_4: "Carga/descarga por escalera"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiExtraService.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiExtraService.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiExtraService.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiExtraService.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiExtraService.yaml"
></i18n>
