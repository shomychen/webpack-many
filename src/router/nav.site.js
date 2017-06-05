import NavConfig from '../nav.config.js'

const registerRoute = (config) => {
  return {route: NavConfig}
}

let route = registerRoute(NavConfig)
export default route.route
