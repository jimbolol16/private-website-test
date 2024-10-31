/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        mobile: "96px",
        mobileL: "96px",
        tablet: "152px",
        desktop: "152px",
        desktopL: "152px",
      },
      fontFamily: {
        manrope: "Manrope",
        poppins: "Poppins",
        roboto: "Roboto",
      },
      gridTemplateColumns: {
        mobile: "repeat(4, minmax(0, 1fr))",
        mobileL: "repeat(8, minmax(0, 1fr))",
        tablet: "repeat(12, minmax(0, 1fr))",
        desktop: "repeat(12, 72px)",
        desktopL: "repeat(12, 104px)",
      },
      boxShadow: {
        small: "0px 13.3062px 10.645px rgba(71, 96, 255, 0.0392593)",
        medium: "0px 20px 13px rgba(71, 96, 255, 0.05)",
        large: "0px 28.8813px 61.3728px rgba(71, 96, 255, 0.15)",
        input: "0px 17.6856px 37.582px rgba(71, 96, 255, 0.15)",
        calculator: "0px -8.15px 6.51852px rgba(71, 96, 255, 0.0392593)",
        modal: "0px -17.69px 37.582px rgba(71, 96, 255, 0.15)",
        header: "0px 8.15px 6.51852px rgba(71, 96, 255, 0.0392593)",
      },
      colors: {
        electric: {
          DEFAULT: "#4760FF",
          input: "#4760FF59",
          "input-disabled": "#4760FF33",
        },
        dark: {
          light: "#140C4080",
          DEFAULT: "#140C40",
        },
        soft: {
          DEFAULT: "#E7EDFA",
        },
        salmon: {
          light: "#FEE3DE",
          DEFAULT: "#FA8C78",
        },
        red: {
          light: "#ED2E7E59",
          DEFAULT: "#ED2E7E",
        },
        green: {
          DEFAULT: "#00BA88",
        },
      },
    },
    screens: {
      mobileBase: { max: "399px" },
      mobileBasePlusOne: { min: "400px", max: "424px" },
      mobileBasePlusTwo: { min: "425px", max: "474px" },
      mobileBasePlusThree: { min: "475px", max: "519px" },
      mobileBasePlusFour: { min: "520px", max: "598px" },
      mobile: { max: "599px" },
      mobileL: { min: "600px", max: "904px" },
      tablet: { min: "905px", max: "1239px" },
      desktop: { min: "1240px", max: "1919px" },
      desktopL: { min: "1920px" },
    },
  },
  plugins: [],
};
