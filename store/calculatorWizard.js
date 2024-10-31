export const state = () => ({
  city: null,
  navigateToNextPathAllowed: false,
  spaceEstimated: 0,
});

export const mutations = {
  setCity(state, city) {
    state.city = city;
  },
  setAllowedNavigation(state, navigateToNextPathAllowed) {
    state.navigateToNextPathAllowed = navigateToNextPathAllowed;
  },
  setSpaceEstimated(state, spaceEstimated) {
    state.spaceEstimated = spaceEstimated;
  },
  resetState(state) {
    state.city = null;
    state.navigateToNextPathAllowed = false;
    state.spaceEstimated = 0;
  },
};

export const actions = {
  SET_CITY({ commit }, city) {
    commit("setCity", city);
  },
  SET_ALLOWED_NAVIGATION({ commit }, currentPath) {
    commit("setAllowedNavigation", currentPath);
  },
  SET_SPACE_ESTIMATED({ commit }, spaceEstimated) {
    commit("setSpaceEstimated", spaceEstimated);
  },
  RESET_ALL({ commit }) {
    commit("resetState");
  },
};
