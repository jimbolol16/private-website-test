<template>
  <div class="w-full bg-dark z-0">
    <section>
      <upper-section></upper-section>
      <middle-section></middle-section>
      <bottom-section></bottom-section>
    </section>
  </div>
</template>
<script>
export default {
  name: "footerSection",
  components: {
    "upper-section": async () =>
      await import("@/components/sections/footerSection/upperSection.vue"),
    "middle-section": async () =>
      await import("@/components/sections/footerSection/middleSection.vue"),
    "bottom-section": async () =>
      await import("@/components/sections/footerSection/bottomSection.vue"),
  },
};
</script>
