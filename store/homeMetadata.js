export const state = () => ({
  cities: [],
});

export const mutations = {
  setCities(state, cities) {
    state.cities = cities;
  },
};

export const actions = {
  SET_CITIES({ commit }, cities) {
    commit("setCities", cities);
  },
  RESET_ALL({ commit }) {
    commit("setCities", []);
  },
};
