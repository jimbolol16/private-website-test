export const state = () => ({
  plans: null,
});

export const mutations = {
  setPlans(state, plans) {
    state.plans = plans;
  },
};

export const actions = {
  SET_PLANS({ commit }, plans) {
    commit("setPlans", plans);
  },
};
