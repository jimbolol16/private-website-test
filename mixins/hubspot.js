const hubspotMixin = {
  methods: {
    resetHubspotWidget() {
      try {
        const status = window.HubSpotConversations?.widget.status();
        if (status?.loaded) {
          window.HubSpotConversations.resetAndReloadWidget();
        }
      } catch (error) {
        // Hide errors on this call when changing the domain
        // eslint-disable no-empty
      }
    },
  },
};

export default hubspotMixin;
