const validationEmailMixin = {
  data() {
    return {
      deliverableError: false,
    };
  },
  methods: {
    async $checkDeliverability(email) {
      const response = await this.$api.$get("/api/validate-email", {
        params: {
          email: email,
        },
      });

      // Set the flag in order to display the right error
      this.deliverableError = !response.res;
    },
    $resetDeliverableError() {
      this.deliverableError = false;
    },
  },
};

export default validationEmailMixin;
