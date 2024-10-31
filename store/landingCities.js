export const state = () => ({
  city: {},
  neighborhoods: [],
});

export const mutations = {
  setCity(state, city) {
    state.city = city;
  },
  setNeighborhoods(state, neighborhoods) {
    state.neighborhoods = neighborhoods;
  },
};

export const actions = {
  SET_CITY({ commit }, city) {
    commit("setCity", city);
  },
  SET_NEIGHBORHOODS({ commit }, neighborhoods) {
    commit("setNeighborhoods", neighborhoods);
  },
  RESET_ALL({ commit }) {
    commit("setCity", {});
    commit("setNeighborhoods", []);
  },
};
