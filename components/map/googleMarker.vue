<template></template>
<script>
import googleMapMixin from "./googleMapMixin";

export default {
  name: "googleMarker",
  mixins: [googleMapMixin],
  data() {
    return {
      objectType: "Marker",
    };
  },
};
</script>
