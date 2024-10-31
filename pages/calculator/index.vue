<template>
  <section class="grid-layout gap-y-0">
    <div class="col-start-1 col-span-full row-start-1 mt-32">
      <div class="flex flex-col w-full">
        <h2>¿Qué quieres almacenar?</h2>
        <p class="p2 max-w-[472px] pt-4">
          Suspendisse lacus quam, viverra vel quam et, vulputate mattis risus.
          Maecenas aliquet neque ac ultricies finibus.
        </p>
      </div>
    </div>

    <div class="col-start-2 col-span-6 row-start-2 mt-12">
      <ui-field label="Buscar">
        <ui-input
          class="w-full"
          placeholder="Buscar"
          :debounceTime="250"
          v-model.lazy="lookedItem"
          @change.self="onChange"
        ></ui-input>
      </ui-field>
    </div>
    <div class="col-start-8 col-span-4 row-start-2 mt-12">
      <ui-button :outline="true" class="w-auto" @click="displayModal = true">
        Crear nuevo elemento
      </ui-button>
    </div>

    <!-- Tabs -->
    <div class="col-start-1 col-span-full row-start-3 mt-14">
      <calculator-tabs
        ref="tabs"
        :entries="tabs"
        @click="handleTabClick"
        v-if="tabs"
      ></calculator-tabs>
    </div>

    <!-- Dynamic part -->
    <div class="col-start-1 col-span-full row-start-4 mt-10 mb-28">
      <div class="subgrid-layout gap-y-4">
        <div
          :class="gridClasses[index % 4]"
          v-for="(item, index) in Object.values(items)"
          :key="index"
        >
          <calculator-item
            :itemKey="item.name"
            :itemTab="item.room"
            :image="item.image"
          ></calculator-item>
        </div>
      </div>
    </div>

    <!-- New item modal -->
    <calculator-modal
      v-if="displayModal"
      @close="displayModal = false"
    ></calculator-modal>
  </section>
</template>
<script>
import { mapState } from "vuex";
import sanitizeString from "@/utils/sanitize";
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "calculatorView",
  layout: "calculatorPage",
  components: {
    "ui-field": async () => await import("@/components/uiField.vue"),
    "ui-input": async () => await import("@/components/uiInput.vue"),
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "calculator-modal": async () =>
      await import("@/components/views/calculator/calculatorModal.vue"),
    "calculator-tabs": async () =>
      await import("@/components/views/calculator/calculatorTabs.vue"),
    "calculator-item": async () =>
      await import("@/components/views/calculator/calculatorItem.vue"),
  },
  async fetch() {
    // Bring items data from server
    try {
      const response = await this.$api.$get("/api/items", {
        params: { site: this.localeMetadata.country },
      });
      const tabs = Object.keys(response);

      // Get tab categories and sort them alphabetically
      tabs.sort((a, b) => a.localeCompare(b));

      // Flatten object in order to speedup the lookups
      let lookupItems = {};
      Object.values(response).forEach((item) => {
        Object.assign(lookupItems, item);
      });

      // Save lookup items into vuex
      this.$store.dispatch("calculatorItems/SET_LOOKUP_ITEMS", lookupItems);

      // Store this information into vuex
      this.$store.dispatch("calculatorItems/SET_ITEMS", response);

      // Update dom and set the first tab on initial fetching of data
      this.tabs = tabs;
      this.selectedTab = this.tabs[0];
      this.items = this.calculatorItems[this.selectedTab];

      // If this method is called on the client-side, set the tab accordingly
      if (process.client) {
        this.$nextTick(() => {
          this.$refs.tabs.$el
            .querySelector(`[id="${this.selectedTab}"]`)
            .classList.add("active");
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  mounted() {
    // Only trigger this logic if we are in the server side rendering
    if (this.tabs) {
      this.$refs.tabs.$el
        .querySelector(`[id="${this.selectedTab}"]`)
        .classList.add("active");
    }
  },
  mixins: [localesMetadata],
  data() {
    return {
      displayModal: false,
      tabs: null,
      copyTabs: null, // to restore original tabs after searching
      selectedTab: null,
      gridClasses: {
        0: "col-start-1 col-span-3",
        1: "col-start-4 col-span-3",
        2: "col-start-7 col-span-3",
        3: "col-start-10 col-span-full",
      },
      items: {},
      lookedItem: null,
    };
  },
  computed: {
    ...mapState("calculatorItems", {
      calculatorItems: (state) => state.items,
      lookupItems: (state) => state.lookupItems,
    }),
  },
  methods: {
    handleTabClick(tabIndex) {
      // Remove all active classes
      this.$refs.tabs.$el.querySelectorAll("li").forEach((element) => {
        element.classList.remove("active");
      });

      // Add active class only for the first active element
      this.$refs.tabs.$el
        .querySelector(`[id="${tabIndex}"]`)
        .classList.add("active");

      this.selectedTab = tabIndex;
      this.items = this.calculatorItems[tabIndex];
    },
    onChange(value) {
      if (value) {
        // Filter items with 'value' substring in their name
        const items = Object.values(this.lookupItems).filter(
          (x) =>
            sanitizeString(x.name)
              .toLowerCase()
              .indexOf(sanitizeString(value).toLowerCase()) !== -1
        );

        // Restore the expected format
        let lookedItems = {};
        items.forEach((x) => Object.assign(lookedItems, { [x.name]: x }));

        // Assign items to render the dom
        this.items = lookedItems;

        // Update section tabs accordingly
        if (!this.copyTabs) {
          this.copyTabs = this.tabs;
          this.tabs = null;
        }
      } else {
        // Restore items view keeping the selected tab
        this.tabs = this.copyTabs;
        this.copyTabs = null;
        this.$nextTick(() => {
          this.handleTabClick(this.selectedTab);
        });
      }
    },
  },
};
</script>
