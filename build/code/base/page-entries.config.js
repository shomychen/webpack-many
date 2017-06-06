var NavSite = require('../../../src/nav.config')
const registerRoute = (navConfig) => {
  let route = [];
  const navFor = (data) => {
    data.forEach((nav, index) => {
      if (nav.path) {
        route.push(nav.path)
      }
      if (nav.list) {
        navFor(nav.list)
      }
    });
  }
  navFor(navConfig)
  return route;
};
let route = registerRoute(NavSite);
module.exports = route
