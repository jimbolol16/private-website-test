<template>
  <div class="flex flex-col desktop:px-6 w-full items-center">
    <nuxt-img
      :provider="$config.img_provider"
      :src="`${imagePaths[image]}`"
      alt="contentservice"
      class="w-[163px] h-[170px] mb-6"
    />
    <h3
      class="self-start max-w-[192px] mobileL:text-center mobileL:w-full mobileL:max-w-full"
    >
      {{ title }}
    </h3>
    <p
      class="p1 mt-4 self-start desktopL:max-w-[456px] desktop:max-w-[304px] tablet:max-w-[272px] mobileL:w-full mobileL:max-w-full mobile:max-w-full mobileL:text-center"
      v-if="header !== ' '"
    >
      {{ header }}
    </p>
    <div
      class="font-roboto font-normal text-dark/60 text-[18px] leading-[27px] mobileL:text-[18px] mobileL:leading-[25px] tablet:text-[18px] tablet:leading-[27px] desktop:text-[18px] desktop:leading-[27px] desktopL:text-[18px] desktopL:leading-[27px] mt-4 desktopL:max-w-[456px] desktop:max-w-[304px] tablet:max-w-[272px] mobileL:text-center mobileL:w-full mobileL:max-w-full mobile:max-w-full self-start text-justify"
      v-html="body"
    ></div>
  </div>
</template>
<script>
export default {
  name: "sectionContent",
  props: {
    title: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imagePaths: {
        pickup: "/pickup.svg",
        storage: "/storage.svg",
        delivery: "/delivery.svg",
      },
    };
  },
};
</script>
