<template>
  <div class="bg-white h-full">
    <section
      class="grid-layout mobile:pt-20 pt-32 pb-8 desktopL:my-auto desktop:my-auto"
    >
      <div
        class="flex flex-col dark font-extrabold text-[30px] leading-10 row-start-1 col-start-2 col-span-12 mobileL:col-span-8 mobile:col-start-1 mobile:col-span-4"
      >
        <div class="gap-x-1 items-center mb-[54px]">
          <span class="text-electric">{{ $t("book_calendar_highlight") }}</span>
          {{ $t("book_calendar_suffix") }}
        </div>
      </div>

      <div
        class="mt-8 mx-auto row-start-2 col-start-5 col-span-5 mobileL:col-start-3 mobile:col-start-1 mobile:col-span-4 mb-6"
      >
        <div
          class="flex flex-col w-full space-y-6"
          @keydown.enter="handleKeyDown"
        >
          <ui-calendar @click="handleCalendarClick"></ui-calendar>
          <div class="flex w-full justify-end">
            <div class="flex flex-col">
              <ui-button
                :arrow="true"
                :disabled="disabledButton"
                @click="handleClick"
                class="w-fit"
              >
                {{ $t("book_calendar_cta") }}
              </ui-button>
              <p
                class="sub-heading-button mt-2 tablet:hidden mobileL:hidden mobile:hidden"
              >
                {{ $t("book_calendar_button_text") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "uiBookingCalendar",
  components: {
    "ui-calendar": async () =>
      await import("@/components/wizard/uiCalendar.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
  },
  data() {
    return {
      disabledButton: true,
    };
  },
  methods: {
    /**
     * Native method to handle button click
     */
    handleClick() {
      // Propagate the change
      this.$emit("click");
    },
    /**
     * Mouse click event on date selector
     */
    handleCalendarClick(date) {
      this.$store.dispatch("bookingWizard/SET_DATE", date);
      this.disabledButton = false;
    },
    /**
     * Enter key press handler to emit the click event to the parent
     */
    handleKeyDown() {
      this.handleClick();
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
book_calendar_highlight: "Elige"
book_calendar_suffix: "un día"
book_calendar_cta: "Siguiente"
book_calendar_button_text: "O presiona ENTER"
</i18n>
<i18n lang="yaml" locale="fr">
book_calendar_highlight: "Choisissez"
book_calendar_suffix: "un jour"
book_calendar_cta: "Suivant"
book_calendar_button_text: "Ou appuyez sur ENTRÉE"
</i18n>
<i18n lang="yaml" locale="it">
book_calendar_highlight: "Scegli"
book_calendar_suffix: "un giorno"
book_calendar_cta: "Continua"
book_calendar_button_text: "o premi INVIO"
</i18n>
<i18n lang="yaml" locale="pt">
book_calendar_highlight: "Escolha"
book_calendar_suffix: "um día"
book_calendar_cta: "Seguinte"
book_calendar_button_text: "Ou prima ENTER"
</i18n>
<i18n lang="yaml" locale="mx">
book_calendar_highlight: "Elige"
book_calendar_suffix: "un día"
book_calendar_cta: "Siguiente"
book_calendar_button_text: "O presiona ENTER"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiBookingCalendar.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiBookingCalendar.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiBookingCalendar.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiBookingCalendar.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiBookingCalendar.yaml"
></i18n>
