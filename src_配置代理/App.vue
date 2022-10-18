<template>
  <div id="app">
    <button @click="sendRequest">点我发送请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  components: {

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
    sendRequest(){
      axios({
        // 请求服务器的URL
        url: 'http://localhost:8081/pyj/books',
        // 创建请求时使用的方法
        method: 'get',
        // 将自动加在url前
        // baseURL: 'http://localhost:8080/',
      }).then(
          response => {
            console.log(response.data)
          },
          error => {
            console.log(error)
          }
        )
    }
  }
}
</script>

<style>

</style>
