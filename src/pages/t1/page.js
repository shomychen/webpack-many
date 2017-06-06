import mainTemplate from './html.ejs'
import NavSite from '../../router/nav.site'
// let test = ['lufy', 'zoro', 'nami']
let test = [{name: 'a'}, {name: 'b'}]
let renderedHtml = mainTemplate({route: NavSite, test: test, name: 'nvg', url: 'http://nvg.com'})
export default renderedHtml
