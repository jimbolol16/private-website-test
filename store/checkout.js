export const state = () => ({
  firstName: "",
  lastName: "",
  id: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
  phone: "",
  isBusiness: false,
});

export const mutations = {
  setFirstName(state, firstName) {
    state.firstName = firstName;
  },
  setLastName(state, lastName) {
    state.lastName = lastName;
  },
  setId(state, id) {
    state.id = id;
  },
  setAddress(state, address) {
    state.address = address;
  },
  setCity(state, city) {
    state.city = city;
  },
  setState(state, value) {
    state.state = value;
  },
  setCountry(state, country) {
    state.country = country;
  },
  setZipCode(state, zipCode) {
    state.zipCode = zipCode;
  },
  setPhone(state, phone) {
    state.phone = phone;
  },
  setIsBusiness(state, isBusiness) {
    state.isBusiness = isBusiness;
  },
};

export const actions = {
  SET_FIRST_NAME({ commit }, firstName) {
    commit("setFirstName", firstName);
  },
  SET_LAST_NAME({ commit }, lastName) {
    commit("setLastName", lastName);
  },
  SET_ID({ commit }, id) {
    commit("setId", id);
  },
  SET_ADDRESS({ commit }, address) {
    commit("setAddress", address);
  },
  SET_CITY({ commit }, city) {
    commit("setCity", city);
  },
  SET_STATE({ commit }, state) {
    commit("setState", state);
  },
  SET_COUNTRY({ commit }, country) {
    commit("setCountry", country);
  },
  SET_ZIP_CODE({ commit }, zipCode) {
    commit("setZipCode", zipCode);
  },
  SET_PHONE({ commit }, phone) {
    commit("setPhone", phone);
  },
  SET_IS_BUSINESS({ commit }, isBusiness) {
    commit("setIsBusiness", isBusiness);
  },
};
