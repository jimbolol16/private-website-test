<template>
  <svg
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="18"
      cy="18.9966"
      r="18"
      :fill="type === 'white' ? 'white' : '#140C40'"
    />
    <g clip-path="url(#clip0_1583_4799)">
      <path
        :fill="type === 'white' ? '#140C40' : 'white'"
        d="M24.2947 18.1432L13.9747 12.9832C13.8354 12.9187 13.6823 12.89 13.5292 12.8998C13.376 12.9096 13.2278 12.9576 13.0979 13.0393C12.9681 13.121 12.8607 13.2339 12.7856 13.3677C12.7105 13.5015 12.6701 13.652 12.668 13.8054V24.121C12.6667 24.2785 12.706 24.4336 12.7822 24.5715C12.8584 24.7093 12.9689 24.8252 13.103 24.9078C13.237 24.9905 13.3901 25.0372 13.5475 25.0434C13.7049 25.0496 13.8612 25.0151 14.0013 24.9432L24.2947 19.7832C24.4471 19.7067 24.5753 19.5892 24.6649 19.444C24.7545 19.2988 24.8019 19.1316 24.8019 18.961C24.8019 18.7904 24.7545 18.6231 24.6649 18.4779C24.5753 18.3327 24.4471 18.2153 24.2947 18.1387V18.1432Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1583_4799">
        <rect width="16" height="16" transform="translate(10 10.9966)" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "uiPlay",
  props: {
    type: {
      type: String,
      values: () => ["white", "dark"],
      default: "white",
    },
  },
};
</script>
