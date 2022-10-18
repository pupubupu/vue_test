/**
 * 该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false


import pubsub from 'pubsub-js';
//引入ElementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
//
//
// Vue.use(ElementUI)
// Vue.use(pubsub)



//创建Vue实例对象---vm
const vm = new Vue({
  el:"#app",
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$pubsub = pubsub
  },
  data(){
    return{
      a:1
    }
  }
})
console.log(vm)