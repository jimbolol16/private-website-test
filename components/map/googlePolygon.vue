<template></template>
<script>
import googleMapMixin from "./googleMapMixin";

export default {
  name: "googlePoligon",
  mixins: [googleMapMixin],
  data() {
    return {
      objectType: "Polygon",
    };
  },
};
</script>
