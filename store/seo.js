/**
 *  Vuex state to store `fetch()` data in order to use it later for SEO purposes mainly.
 */

export const state = () => ({
  faqContent: [],
});

export const mutations = {
  setfaqContent(state, faqContent) {
    state.faqContent = faqContent;
  },
  resetAll(state) {
    state.faqContent = [];
  },
};

export const actions = {
  SET_FAQ_CONTENT({ commit }, faqContent) {
    commit("setfaqContent", faqContent);
  },
  RESET_ALL({ commit }) {
    commit("resetAll");
  },
};
