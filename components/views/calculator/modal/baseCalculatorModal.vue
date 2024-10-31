<template>
  <div class="flex h-full m-auto left-0 right-0 top-0">
    <div
      class="fixed z-50 w-full bg-gray-50 left-0 top-0 m-auto h-full bg-[rgba(255,255,255,0.6)] backdrop-blur-sm flex items-center justify-center"
    >
      <!-- Modal area -->
      <div
        class="w-[552px] min-h-[464px] max-h-[576px] rounded-xl bg-white border-[1px] shadow-input"
      >
        <!-- Close button -->
        <div class="relative w-full">
          <div class="absolute w-full">
            <div class="inline-flex w-full justify-end pt-4 pr-4">
              <nuxt-img
                :provider="$config.img_provider"
                src="/calculator/close-button.svg"
                alt="closebutton"
                class="cursor-pointer"
                @click="$emit('close')"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col pt-10 px-6 w-full">
          <!-- Title area -->
          <h3>{{ title }}</h3>

          <!-- Dynamic section -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "baseCalculatorModal",
  props: {
    title: {
      type: String,
      default: "New",
    },
  },
};
</script>
