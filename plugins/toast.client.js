import Vue from "vue";

import uiToast from "@/components/uiToast/uiToast.vue";

/*eslint-disable no-unused-vars */
export default ({ app }, inject) => {
  function showToast(obj) {
    const ToastComponent = Vue.extend(uiToast);
    const propsData = Object.assign({}, obj);
    const component = new ToastComponent({
      el: document.createElement("div"),
      propsData,
    });
    return component;
  }

  inject("toast", (obj) => showToast(obj));
};
