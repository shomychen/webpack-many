import NavConfig from '../nav.config.json'

const registerRoute = (config) => {
  return {route: NavConfig}
}

let route = registerRoute(NavConfig)
export default route.route
