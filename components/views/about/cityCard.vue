<template>
  <div
    class="w-[360px] h-[336px] mobile:w-[296px] mobile:h-[334px] bg-white rounded-xl shadow-input"
  >
    <div class="flex flex-col w-full h-full">
      <nuxt-img
        :provider="$config.img_provider"
        :src="`/aboutus/${cityImage}.png`"
        :alt="city"
        class="w-[360px] h-[256px] rounded-t-xl"
      />
      <div class="flex w-full justify-center items-center h-full py-6">
        <h3 class="capitalize">{{ city }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cityCard",
  props: {
    city: {
      type: String,
      default: null,
    },
    cityImage: {
      type: String,
      default: null,
    },
  },
};
</script>
