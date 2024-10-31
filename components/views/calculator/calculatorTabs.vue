<template>
  <div class="flex flex-row justify-center items-center w-full">
    <ul class="-mt-px flex flex-row justify-center gap-x-24 w-full">
      <li
        class="cursor-pointer pb-2 capitalize text-[rgba(71,96,255,0.35)]"
        v-for="entry in entries"
        :key="entry"
        :id="entry"
        @click="$emit('click', entry)"
      >
        {{ $t(entry) }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "calculatorTabs",
  props: {
    entries: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  @apply border-electric border-b-[3px] text-electric;
}
</style>
<i18n>
{
  "es": {
    "bedroom": "Dormitiorio",
    "kitchen": "Cocina",
    "livingroom": "Salón",
    "other": "Otros",
    "search": "Búsqueda"
  }
}
</i18n>
