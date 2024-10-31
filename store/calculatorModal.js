export const state = () => ({
  id: null, // unique id of the object
  name: null, // name of the object
  width: null, // width of the object
  height: null, // height of the object
  depth: null, // depth of the object
  space: null, // space estimated
  factor: null, // correction factor
});

export const mutations = {
  setId(state, id) {
    state.id = id;
  },
  setName(state, name) {
    state.name = name;
  },
  setWidth(state, width) {
    state.width = width;
  },
  setHeight(state, height) {
    state.height = height;
  },
  setDepth(state, depth) {
    state.depth = depth;
  },
  setSpace(state, space) {
    state.space = space;
  },
  setFactor(state, factor) {
    state.factor = factor;
  },
  clearItem(state) {
    state.id = null;
    state.name = null;
    state.width = null;
    state.height = null;
    state.depth = null;
    state.space = null;
    state.factor = null;
  },
};

export const actions = {
  SET_ID({ commit }, id) {
    commit("setId", id);
  },
  SET_NAME({ commit }, name) {
    commit("setName", name);
  },
  SET_WIDTH({ commit }, width) {
    commit("setWidth", width);
  },
  SET_HEIGHT({ commit }, height) {
    commit("setHeight", height);
  },
  SET_DEPTH({ commit }, depth) {
    commit("setDepth", depth);
  },
  SET_SPACE({ commit }, space) {
    commit("setSpace", space);
  },
  SET_FACTOR({ commit }, factor) {
    commit("setFactor", factor);
  },
  RESET_ITEM({ commit }) {
    commit("clearItem");
  },
};
