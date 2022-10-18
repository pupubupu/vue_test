/**
 * 该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//引入VueRouter插件
import VueRouter from 'vue-router'

//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


//应用插件
Vue.use(VueRouter)
Vue.use(ElementUI)

//引入路由器
import router from "@/router";

//创建Vue实例对象---vm
new Vue({
  el:"#app",
  render: h => h(App),
  router
})
