<template>
  <div
    class="font-manrope font-medium text-[16px] leading-[22px] cursor-pointer z-50"
  >
    <nuxt-link :to="to" v-if="to && !externalLink">
      {{ text }}
    </nuxt-link>
    <a :href="to" v-else-if="to && externalLink">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "uiHeaderLink",
  data() {
    return {
      openedMenu: false,
    };
  },
  components: {},
  props: {
    to: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    externalLink: {
      type: Boolean,
      default: false,
    },
    menuList: {
      type: Array,
      default: () => [],
    },
    datas: {
      type: Array,
      default: null,
    },
  },
};
</script>
