import '../../config/build-file.config' // 复制DLL文件至站点
import './src/index.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import NuiJs from 'nui-js'

Vue.use(NuiJs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
