import '../../config/build-file.config'
import mainTemplate from './page.ejs'
let renderedHtml = mainTemplate({ name: 'nvg', url: 'http://nvg.com' })
export default renderedHtml
