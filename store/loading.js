export const state = () => ({
  pageSection: {},
});

export const mutations = {
  addLoadedComponent(state, component) {
    let partialObject = state.pageSection;
    partialObject[component] = true;

    // Handle reactivity
    state.pageSection = Object.assign({}, partialObject);
  },
  removeLoadedComponent(state, component) {
    delete state.pageSection[component];

    // Handle reactivity
    state.pageSection = Object.assign({}, state.pageSection);
  },
  resetLoadedComponents(state) {
    state.pageSection = {};
  },
};

export const actions = {
  ADD_LOADED_COMPONENT({ commit }, additionalService) {
    commit("addLoadedComponent", additionalService);
  },
  REMOVE_LOADED_COMPONENT({ commit }, additionalService) {
    commit("removeLoadedComponent", additionalService);
  },
  RESET_ALL({ commit }) {
    commit("resetLoadedComponents");
  },
};
