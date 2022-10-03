<template>
  <div id="app">
    <!--自定义指令-->
    <span v-big="3"></span>
    <!--混入-->
    <!--过滤器-->
    <h3>当前时间是{{time | timeFormater('YYYY-MM-DD HH:mm:ss')}}</h3>
    <h3>当前时间是{{time | timeFormater('YYYY-MM-DD') | slice}}</h3>
    <button @click="demo">点我测试demo方法</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      msg:"欢迎学习Vue!",
      time:Date.now()
    }
  },
  methods:{

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
