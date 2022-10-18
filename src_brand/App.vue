<template>
  <div id="app">
    <Brand></Brand>
    <button @click="goto"></button>
  </div>
</template>

<script>

import Brand from "@/components/Brand";
export default {
  name: 'App',
  components: {
    Brand
  },
  data(){
    return{

    }
  },
  methods:{
    goto(){

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
