export const state = () => ({
  reviews: [],
});

export const mutations = {
  setReviews(state, reviews) {
    state.reviews = reviews;
  },
};

export const actions = {
  SET_REVIEWS({ commit }, id) {
    commit("setReviews", id);
  },
};
