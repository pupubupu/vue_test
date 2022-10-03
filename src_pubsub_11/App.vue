<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 ref="h1">{{msg}}</h1>
    <MySchool name="上海第二工业大学" address="浦东新区金海路2360"></MySchool>
    <MyStudent name="小李" :age="18" sex="女"></MyStudent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MySchool from "@/components/MySchool";
import MyStudent from "@/components/MyStudent";

export default {
  name: 'App',
  components: {
    MyStudent,
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    MySchool
  },
  data(){
    return{
      msg:"欢迎学习Vue!"
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
