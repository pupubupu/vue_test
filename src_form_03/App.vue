<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 ref="h1">{{msg}}</h1>
<!--    <button @click="showDOM">点我获取DOM元素</button>-->
<!--    <MyStudent ref="MySudent"></MyStudent>-->
    <!-- <MySchool name="上海第二工业大学" address="浦东新区金海路2360"></MySchool> -->
    <Form></Form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MySchool from "@/components/MySchool";
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    MySchool,
    Form
},
  data(){
    return{
      msg:"欢迎学习Vue!"
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs)
      // console.log(this)
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
