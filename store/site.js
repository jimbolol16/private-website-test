export const state = () => ({
  displayBanner: false,
  targetDomain: null,
});

export const mutations = {
  setTargetDomain(state, targetDomain) {
    state.targetDomain = targetDomain;
  },
  setDisposable(state, displayBanner) {
    state.displayBanner = displayBanner;
  },
};

export const actions = {
  SET_TARGET_DOMAIN({ commit }, targetDomain) {
    commit("setTargetDomain", targetDomain);
  },
  UNSET_TARGET_DOMAIN({ commit }) {
    commit("setTargetDomain", null);
  },
  SET_DISPLAY_BANNER({ commit }, displayBanner) {
    commit("setDisposable", displayBanner);
  },
  UNSET_DISPLAY_BANNER({ commit }) {
    commit("setDisposable", false);
  },
};
