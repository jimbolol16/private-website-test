const locales = require("../i18n/index").locales;

module.exports = {
  excludeRoute: (route) => {
    let dynamicRouteList = [];
    locales.forEach((locale) => {
      dynamicRouteList.push(`/${locale.code}/${route}`);
    });

    return dynamicRouteList;
  },
};
