<template>
  <nuxt-child />
</template>
<script>
export default {
  name: "collaborationIndex",
  layout({ route }) {
    if (route.meta.find((page) => page.pageName === "partnershipLeadPage")) {
      return "partnershipSimplePage";
    }
    return "partnershipPage";
  },
  meta: {
    pageName: "collaborate",
  },
  middleware({ redirect, app }) {
    // Check if we are in a valid domain to display this page
    if (["es"].indexOf(app.i18n.localeProperties.country) === -1) {
      redirect(app.localePath("/"));
    }
  },
  head() {
    return {
      meta: [
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow",
        },
      ],
    };
  },
};
</script>
