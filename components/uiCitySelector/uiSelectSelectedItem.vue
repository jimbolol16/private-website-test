<template>
  <div class="flex flex-row items-center gap-1.5 h-9">
    <div class="my-auto" v-if="selectedItem">
      {{ selectedItem }}
    </div>
    <div class="my-auto text-electric-input placeholder" v-else>
      {{
        $parent.$parent.isRequired ? `${nonSelectedItem} *` : nonSelectedItem
      }}
    </div>
  </div>
</template>
<script>
/**
 * This component is intended to be used in cojunction with uiCitySelector.vue
 */
export default {
  name: "uiSelectSelectedItem",
  props: {
    selectedItem: {
      type: String,
      default: null,
    },
    nonSelectedItem: {
      type: String,
      default: null,
    },
  },
};
</script>
