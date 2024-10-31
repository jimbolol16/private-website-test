<template>
  <div
    class="flex flex-col px-6 w-full items-center border-[1px] border-[#EDEDED] py-10 bg-white z-50 rounded-xl"
  >
    <h3 class="self-start text-center w-full text-[35px]">
      {{ title }}
    </h3>
    <p class="p1 mt-4 self-start w-full text-center">
      {{ header }}
    </p>
    <p class="p2 mt-[6px] text-center w-full self-start">
      {{ body }}
    </p>
  </div>
</template>
<script>
export default {
  name: "uiCardSectionThree",
  props: {
    title: {
      type: String,
      default: null,
    },
    header: {
      type: String,
      default: null,
    },
    body: {
      type: String,
      default: null,
    },
  },
};
</script>
