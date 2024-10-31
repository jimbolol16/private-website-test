<template>
  <div>
    <div
      class="flex w-full cursor-pointer"
      @click="displayVideo = true"
      v-if="!displayVideo"
    >
      <div class="relative w-full">
        <div
          class="flex absolute z-[200] left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.3)] rounded-lg shadow-lg"
        ></div>
        <img
          :src="`https://img.youtube.com/vi/${id}/maxresdefault.jpg`"
          :alt="title"
          loading="lazy"
          class="w-full rounded-lg shadow-lg"
        />
        <div
          class="rounded-full h-20 w-20 bg-electric absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center align-middle z-[300] box-border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-12 h-12 text-white clear-both stroke-white stroke-[1.5] ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <iframe
      :src="`https://www.youtube.com/embed/${id}?autoplay=1&color=white&controls=0&playsinline=1&rel=0&enablejsapi=1`"
      :title="title"
      frameborder="0"
      allowfullscreen="0"
      allow="autoplay; encrypted-media; gyroscope;"
      class="w-full h-full aspect-video rounded-lg shadow-lg"
      v-if="displayVideo"
    >
    </iframe>
  </div>
</template>
<script>
export default {
  name: "uiVideo",
  props: {
    id: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "video",
    },
  },
  data() {
    return {
      displayVideo: false,
    };
  },
};
</script>
