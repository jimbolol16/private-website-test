const defaultPaymentPeriod = "monthly";

export const state = () => ({
  selectedCityOnLanding: null,
  city: null,
  plan: null,
  paymentPeriod: defaultPaymentPeriod,
  currentStep: 0,
  lastStep: 0,
  date: null,
  additionalServices: {},
});

export const mutations = {
  setCity(state, city) {
    state.city = city;
  },
  setPlan(state, plan) {
    state.plan = plan;
  },
  setPaymentPeriod(state, paymentPeriod) {
    state.paymentPeriod = paymentPeriod;
  },
  setStep(state, step) {
    state.currentStep = step;
  },
  setSelectedCityOnLanding(state, city) {
    state.selectedCityOnLanding = city;
  },
  setLastStep(state, step) {
    state.lastStep = step;
  },
  setDate(state, date) {
    state.date = date;
  },
  addAdditionalService(state, additionalService) {
    let partialObject = state.additionalServices;
    partialObject[additionalService] = additionalService;

    // Handle reactivity
    state.additionalServices = Object.assign({}, partialObject);
  },
  removeAdditionalService(state, additionalService) {
    delete state.additionalServices[additionalService];

    // Handle reactivity
    state.additionalServices = Object.assign({}, state.additionalServices);
  },
  unsetAdditionalServices(state, additionalServices) {
    state.additionalServices = additionalServices;
  },
};

export const actions = {
  SET_CITY({ commit }, city) {
    commit("setCity", city);
  },
  SET_PLAN({ commit }, plan) {
    commit("setPlan", plan);
  },
  SET_PAYMENT_PERIOD({ commit }, paymentPeriod) {
    commit("setPaymentPeriod", paymentPeriod);
  },
  RESET_ALL({ commit }) {
    commit("setCity", null);
    commit("setPlan", null);
    commit("setPaymentPeriod", defaultPaymentPeriod);
    commit("setSelectedCityOnLanding", null);
    commit("setStep", 0);
    commit("setLastStep", 0);
    commit("setDate", null);
    commit("unsetAdditionalServices", {});
  },
  SET_STEP({ commit }, step) {
    commit("setStep", step);
  },
  SET_CITY_ON_LANDING({ commit }, city) {
    commit("setSelectedCityOnLanding", city);
  },
  SET_LAST_STEP({ commit }, step) {
    commit("setLastStep", step);
  },
  SET_DATE({ commit }, date) {
    commit("setDate", date);
  },
  ADD_ADDITIONAL_SERVICE({ commit }, additionalService) {
    commit("addAdditionalService", additionalService);
  },
  REMOVE_ADDITIONAL_SERVICE({ commit }, additionalService) {
    commit("removeAdditionalService", additionalService);
  },
  RESET_ADDITIONAL_SERVICES({ commit }) {
    commit("unsetAdditionalServices", {});
  },
};
