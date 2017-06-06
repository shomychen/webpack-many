import Vue from 'vue'
import NuiJs from 'nui-js'
import '../../../config/build-file.config' // 复制DLL文件至站点
import './src/page.css'

// import moment from 'moment'
Vue.use(NuiJs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
