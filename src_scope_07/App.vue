<template>
  <div id="app">
    <School></School>
    <hr/>
    <Student></Student>
  </div>
</template>

<script>

import School from "@/components/School";
import Student from "@/components/Student";
export default {
  name: 'App',
  components: {
    Student,
    School

  },
  data(){
    return{

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
