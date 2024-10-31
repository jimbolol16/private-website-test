<template>
  <div class="bg-white h-full">
    <!-- Background image -->
    <div class="absolute left-0 top-0 z-0 right-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-prices-wizard.svg"
            alt="gradpartnership"
          />
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
<script>
export default {
  name: "partnershipSimplePage",
};
</script>
