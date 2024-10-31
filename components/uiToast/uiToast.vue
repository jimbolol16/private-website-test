<template>
  <div
    :class="`${type}`"
    class="flex text-white items-center justify-center w-full px-2.5 py-6 font-roboto font-medium text-[18px] leading-[25px]"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "uiToast",
  props: {
    message: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      values: () => ["danger", "success"],
      default: "danger",
    },
    displayTime: {
      type: Number,
      default: 2000,
    },
    delayTime: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    let toastContainer = document.querySelector(".toastr");
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.classList.add("toastr");
      document.body.appendChild(toastContainer);
    }
    toastContainer.appendChild(this.$el);
    setTimeout(() => this.showToastr(), this.delayTime);
  },
  data() {
    return {
      id: null,
    };
  },
  methods: {
    showToastr() {
      this.id = setTimeout(() => this.hideToastr(), this.displayTime);
    },
    hideToastr() {
      clearTimeout(this.id);

      setTimeout(() => {
        this.$destroy();
        this.$el.remove();
      }, 150);
    },
  },
};
</script>

<style lang="scss">
.toastr {
  @apply items-center align-middle fixed z-[999999] w-full pointer-events-none bottom-0;
}
.danger {
  @apply bg-red;
}

.success {
  @apply bg-green;
}
</style>
