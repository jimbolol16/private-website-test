/* Workaround to have access to this content on middleware/validate methods */
export const state = () => ({
  prices: {
    barcelona: "189",
    madrid: "189",
    "san-sebastian": "189",
    pamplona: "189",
    bilbao: "189",
    granada: "189",
    salamanca: "189",
    valencia: "175",
    sevilla: "175",
    malaga: "175",
    lisboa: "179",
    porto: "179",
  },
  routesPerSite: {
    es: [
      "barcelona",
      "madrid",
      "san-sebastian",
      "pamplona",
      "bilbao",
      "granada",
      "salamanca",
      "valencia",
      "sevilla",
      "malaga",
    ],
    pt: ["lisboa", "porto"],
  },
  insurance: {
    es: "3.000",
    pt: "2.500",
  },
});
