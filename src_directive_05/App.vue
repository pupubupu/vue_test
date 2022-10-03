<template>
  <div id="app">
    <h3>当前x值是：{{x}}</h3>
    <h3>放大十倍后x值是：<span v-big="x"></span></h3>
    <button @click="x++ ;y++">点我x++</button>
    <hr>
    <input v-fbind="y">

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Directive from "@/components/Directive_V_once";


export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Directive,
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
},
  data(){
    return{
      msg:"欢迎学习Vue!",
      x: 12,
      y: 10,
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs)
      // console.log(this)
    },
  },
  directives:{
    //big函数何时会被调用？
    // 1、指令与元素成功绑定时（一上来）
    // 2、当模板重新解析时，比如模板依赖得某个数据发生改变时引起模板重新解析

    big(element,binding){
      element.innerText = binding.value * 10
    },
    fbind:{
      //指令与元素成功绑定时（一上来）
      bind(element,binding){
        element.value = binding.value * 10
      },
      //指令所在元素被插入页面时
      inserted(element){
        element.focus()
      },
      //指令所在的模板被重新解析时
      update(element,binding){
        element.value = binding.value * 10
      }
    }
    // fbind(element,binding){
    //   element.value = binding.value * 10
    //   // element.focus();
    //   setTimeout(()=>{
    //     element.focus()
    //   },1)
    // }
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
