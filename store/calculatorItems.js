import Vue from "vue";

export const state = () => ({
  items: {},
  spaceEstimated: 0,
  selectedItems: {},
  selectedItemsCounter: 0,
  lookupItems: [],
});

export const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  setAmount(state, { itemTab, itemKey, value }) {
    // Needed to make the nested array reactive to changes
    // DO NOT THIS UNDER NORMAL CIRCUMSTANCES
    Vue.set(state.items[itemTab][itemKey], "amount", value);
  },
  setSpaceEstimated(state, value) {
    state.spaceEstimated = value;
  },
  addSelectedItem(state, item) {
    // Increase the counter only if item is not present yet
    if (state.selectedItems[item.id] === undefined) {
      state.selectedItemsCounter++;
    }

    // Needed to make the nested array reactive to changes
    // DO NOT THIS UNDER NORMAL CIRCUMSTANCES
    Vue.set(state.selectedItems, item.id, item);
  },
  removeSelectedItem(state, item) {
    // Decrease the counter only if item is not present yet
    if (state.selectedItems[item.id] !== undefined) {
      state.selectedItemsCounter = Math.max(state.selectedItemsCounter - 1, 0);
    }

    delete state.selectedItems[item.id];

    // If it is a custom object, delete it as well
    if (item.room === "custom") {
      delete state.items[item.room][item.id];
    }
  },
  addCustomItem(state, { itemTab, itemKey, item }) {
    // Ensure that itemTab exists in state
    if (state.items[itemTab] === undefined) {
      state.items[itemTab] = {};
    }

    // Finally, add item to items
    Vue.set(state.items[itemTab], itemKey, item);
  },
  setLookupItems(state, items) {
    state.lookupItems = items;
  },
  setSelectedItems(state, items) {
    state.selectedItems = items;
  },
  resetAll(state) {
    state.items = {};
    state.spaceEstimated = 0;
    state.selectedItems = {};
    state.selectedItemsCounter = 0;
    state.lookupItems = [];
  },
};

export const actions = {
  SET_ITEMS({ commit }, items) {
    commit("setItems", items);
  },
  SET_AMOUNT({ commit }, { itemTab, itemKey, value }) {
    commit("setAmount", { itemTab, itemKey, value });
  },
  SET_SPACE_ESTIMATED({ commit }, value) {
    commit("setSpaceEstimated", value);
  },
  ADD_SELECTED_ITEM({ commit }, item) {
    commit("addSelectedItem", item);
  },
  REMOVE_SELECTED_ITEM({ commit }, item) {
    commit("removeSelectedItem", item);
  },
  ADD_CUSTOM_ITEM({ commit }, { itemTab, itemKey, item }) {
    commit("addCustomItem", { itemTab, itemKey, item });
  },
  SET_LOOKUP_ITEMS({ commit }, items) {
    commit("setLookupItems", items);
  },
  RESET_ITEMS({ commit }) {
    commit("resetAll");
  },
};
