/* Workaround to have access to this content on middleware/validate methods */
export const state = () => ({
  prices: {
    madbcn: "189",
    valencia: "175",
  },
  routesPerSite: {
    es: ["madbcn", "valencia"],
  },
  insurance: {
    es: "3.000",
  },
});
