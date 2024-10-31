const getCitiesForSitemap = require("../server/db/index").getCitiesForSitemap;
// const locales = require("../i18n/index").locales;

module.exports = {
  createRoutes: async () => {
    const response = await getCitiesForSitemap();
    let dynamicRouteList = [];

    response.forEach((route) => {
      const firstRoute = route.routes.splice(
        route.routes.findIndex((route) => route.site === route.lang),
        1
      )[0];
      dynamicRouteList.push({
        url: `${firstRoute.site}/warehouses/${firstRoute.key}`,
        links:
          route.routes.length > 0
            ? route.routes.map((alternativeRoute) => {
                const language = `${alternativeRoute.site}-${alternativeRoute.lang}`;
                return {
                  lang: language,
                  url: `/${language}/warehouses/${alternativeRoute.key}`,
                };
              })
            : null,
      });
      dynamicRouteList.push({
        url: `${firstRoute.site}/storages/${firstRoute.key}`,
        links:
          route.routes.length > 0
            ? route.routes.map((alternativeRoute) => {
                const language = `${alternativeRoute.site}-${alternativeRoute.lang}`;
                return {
                  lang: language,
                  url: `/${language}/storages/${alternativeRoute.key}`,
                };
              })
            : null,
      });
      // locales.forEach((locale) => {
      //   dynamicRouteList.push({
      //     url: `${locale.code}/warehouses/${route}`,
      //     links: [
      //       ...locales.map((locale) => {
      //         return {
      //           // lang: locale.code,
      //           url: `${locale.code}/warehouses/${route}`,
      //         };
      //       }),
      //     ],
      //   });
      //   dynamicRouteList.push({
      //     url: `${locale.code}/storages/${route}`,
      //     links: [
      //       ...locales.map((locale) => {
      //         return {
      //           // lang: locale.code,
      //           url: `${locale.code}/storages/${route}`,
      //         };
      //       }),
      //     ],
      //   });
      // });
    });

    return dynamicRouteList;
  },
  // filteredRoutes: ({ routes }) => {
  //   const domainMetadata = Object.keys(sitemapDomains[site].paths);
  //   return routes.filter(
  //     (route) => domainMetadata.indexOf(route.name.split("___")[1]) !== -1
  //   );
  // },
};
