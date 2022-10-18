<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <h1 ref="h1">{{msg}}</h1>-->
<!--&lt;!&ndash;    <button @click="showDOM">点我获取DOM元素</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <MyStudent ref="MySudent"></MyStudent>&ndash;&gt;-->
<!--    <MySchool name="上海第二工业大学" address="浦东新区金海路2360" @click.native="demo"></MySchool>-->
    <MyList></MyList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MySchool from "@/components/MySchool";
import MyList from "@/components/MyList";

export default {
  name: 'App',
  components: {
    MyList,
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    MySchool
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
    },
    demo(){
      alert('你好')
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
