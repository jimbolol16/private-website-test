export const state = () => ({
  allowedAccess: false,
});

export const mutations = {
  setAllowedAccess(state, value) {
    state.allowedAccess = value;
  },
};

export const actions = {
  SET_ALLOWED_ACCESS({ commit }, value) {
    commit("setAllowedAccess", value);
  },
};
