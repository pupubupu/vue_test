/**
 * 该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
//全局过滤器
Vue.filter('mySlice',function (value){
  return value.slice(0,3)
})

//创建Vue实例对象---vm
new Vue({
  el:"#app",
  render: h => h(App),
})
