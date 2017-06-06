// 参数序列化
export const serialize = function (param, config) {
  let Config = config
  if (!Config) {
    Config = {}
  }
  /**
   * param 将要转为URL参数字符串的对象
   * config 转换配置
   * {
   *     'key': ,
          'url': true,
          'encode': true
        }
   * key URL参数字符串的前缀
   * encode true/false 是否进行URL编码,默认为true
   *
   * return URL参数字符串
   */
  let f = (param, key, encode) => {
    if (param == null) return ''
    var paramStr = ''
    var t = typeof (param)
    if (t === 'string' || t === 'number' || t === 'boolean') {
      paramStr += '&' + key + '=' + ((Config.encode == null || Config) ? encodeURIComponent(param) : param)
    } else {
      for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
        paramStr += f(param[i], k, encode)
      }
    }
    return paramStr
  }
  let n = f(param, Config.key, Config.encode)
  if (n.substring(0, 1) === '&') {
    n = n.substr(1)
  }
  if (Config.url) {
    n = '?' + n
  }
  return n
}
/**
 * 例如：window.location.href=http://localhost:8916/TrimFabList.aspx?id=001
 * var keyValue = getURLParam("id");  //获取编辑id数值参数，
 *
 */
export const getURLParam = function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return null
}

