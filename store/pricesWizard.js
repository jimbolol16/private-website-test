const defaultPaymentPeriod = "monthly";

export const state = () => ({
  selectedCityOnLanding: null,
  city: null,
  plan: null,
  paymentPeriod: defaultPaymentPeriod,
  currentStep: 0,
  lastStep: 0,
  fromLandingPage: false,
  origin: null,
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
  setFromLandingPage(state, value) {
    state.fromLandingPage = value;
  },
  setOrigin(state, value) {
    state.origin = value;
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
    commit("setFromLandingPage", false);
    commit("setOrigin", null);
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
  SET_FROM_LANDING_PAGE({ commit }, value) {
    commit("setFromLandingPage", value);
  },
  SET_ORIGIN({ commit }, value) {
    commit("setOrigin", value);
  },
};
