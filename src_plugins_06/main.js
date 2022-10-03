/**
 * 该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

import plugins from "@/plugins/plugins";
//关闭vue的生产提示
Vue.config.productionTip = false


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(plugins,1,2,3)



//创建Vue实例对象---vm
new Vue({
  el:"#app",
  render: h => h(App),
})
