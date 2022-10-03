/**
 * 该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

//混合引入
import {huise,huise2} from '@/mixin'
//关闭vue的生产提示
Vue.config.productionTip = false

Vue.mixin(huise)
Vue.mixin(huise2)

//创建Vue实例对象---vm
new Vue({
  el:"#app",
  render: h => h(App),
})