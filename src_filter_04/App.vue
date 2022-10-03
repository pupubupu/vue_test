<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 ref="h1">{{msg}}</h1>
<!--    过滤器使用一-->
    <h3>{{ time | timeFormater }}</h3>
<!--    过滤器使用二-->
    <h3>{{ time | timeFormater('YYYY')}}</h3>
<!--    过滤器使用三-->
    <h3>{{ time | timeFormater | mySlice}}</h3>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//引入dayjs
import dayjs from './dayjs/dayjs.min'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
},
  data(){
    return{
      msg:"欢迎学习Vue!",
      time:Date.now() //获取当前时间
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs)
      // console.log(this)
    },
    // demo(){
    //   let format = dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    //   console.log(format)
    // }
  },
  filters:{
    timeFormater(time,form = 'YYYY-MM-DD HH:mm:ss'){
      return dayjs(time).format(form);
    },
    mySlice(value){
      return value.slice(0,7)
    }
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
