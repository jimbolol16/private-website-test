<template>
  <client-only>
    <v-date-picker
      v-model="date"
      :min-date="tomorrow"
      :locale="{ id: this.$i18n.locale, masks: { weekdays: 'WWW' } }"
      :disabled-dates="[{ weekdays: closed }]"
      class="rounded-xl p-5 gap-5 shadow-input"
      titlePosition="left"
      :attributes="attrs"
      :select-attribute="selectedAttribute"
      @dayclick="handleClick"
      is-required
    >
    </v-date-picker>
  </client-only>
</template>

<script>
import { mapState } from "vuex";
import closedDays from "@/utils/closedDays";

export default {
  name: "uiCalendar",
  components: {
    "v-date-picker": async () =>
      await import("v-calendar/lib/components/date-picker.umd"),
  },
  data() {
    return {
      date: null,
      selectedAttribute: {
        highlight: {
          style: {
            backgroundColor: "#4760FF",
            borderRadius: "8px",
            gap: "8px",
            padding: "8px",
            width: "32px",
            height: "32px",
          },
          contentStyle: {
            color: "white",
          },
        },
      },
      attrs: [
        {
          key: "today",
          dates: new Date(),
          highlight: {
            style: {
              backgroundColor: "transparent",
            },
            contentStyle: {
              color: "#4760FF",
              fontWeight: "600",
            },
          },
        },
      ],
    };
  },
  computed: {
    ...mapState("bookingWizard", {
      city: (state) => state.city,
    }),
    tomorrow() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    },
    closed() {
      return closedDays[this.city]?.days || [7, 1];
    },
  },
  methods: {
    /**
     * Trigger the click event only if day is not disabled
     */
    handleClick(day) {
      if (!day.isDisabled) {
        this.$emit("click", day.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.vc-weekday) {
  @apply capitalize font-roboto font-normal text-[12px] leading-4 text-dark;
}
:deep(.vc-weekday):nth-child(7) {
  @apply text-red-200;
}
:deep(.weekday-1 > .vc-day-content) {
  @apply text-red-200;
}
:deep(.vc-day-content):focus {
  @apply bg-transparent font-roboto font-bold;
}
:deep(.vc-day-content):hover {
  @apply w-8 h-8 p-2 gap-2 rounded-none;
}
:deep(.vc-day-content) {
  @apply text-[#85819B] font-roboto font-bold leading-4 text-[12px];
}
:deep(.vc-weeks) {
  @apply mt-5;
}
</style>
