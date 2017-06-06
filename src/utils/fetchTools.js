import config from '../config'
import {getURLParam} from './mixing'
export default {
  state: function (response) {
    if (response.state === 1) {
      return response
    } else {
      let error = new Error(response.msgError)
      error.response = response
      throw error
    }
  },
  url: function (Url) {
    let long = Url.indexOf('?')
    let host = getURLParam('host') ? getURLParam('host') : ''
    if (process.env.NODE_ENV === 'development') {
      Url = long > 0 ? Url.substr(0, long) + '.json' + Url.substring(long) : Url + '.json'
    } else if (process.env.NODE_ENV === 'production' && host.indexOf('24:8091') > 0) {
      Url = long > 0 ? Url.substr(0, long) + '.json' + Url.substring(long) : Url + '.json'
      return host + Url
    } else if (process.env.NODE_ENV === 'production' && host) {
      return host + Url
    }
    return config.location.api + Url
  }
}
