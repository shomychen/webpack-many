import {getURLParam, serialize} from './mixing'
import FT from './fetchTools'
export default {
  ciLog: function (msg, error) {
    let Url = serialize({
      mixNick: window.dataPack.api.Tida.mixNick,
      authId: getURLParam('authId'),
      isSupportedApp: window.Tida.isSupportedApp,
      msg: msg,
      error: error
    }, {
      'url': true
    })
    window.fetch(FT.url('/homePage/addLog' + Url), {credentials: 'include'})
  },
  info: function (msg, error) {
    console.info(msg + ' ' + (error ? JSON.stringify(error) : ''))
    if (getURLParam('alert')) {
      window.alert(msg + ' ' + (error ? JSON.stringify(error) : ''))
    }
    this.ciLog(msg + ' ' + (error ? JSON.stringify(error) : ''))
  },
  error: function (msg, error) {
    console.error(msg + ' ' + (error ? JSON.stringify(error) : ''))
    if (getURLParam('alert')) {
      window.alert(msg + ' ' + (error ? JSON.stringify(error) : ''))
    }
    this.ciLog(msg + ' ' + (error ? JSON.stringify(error) : ''))
  }
}
