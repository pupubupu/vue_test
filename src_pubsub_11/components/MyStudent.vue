<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{sex}}</h2>
    <h2>{{age}}</h2>
    <button @click="sendStudentName">把学生名给student组件</button>
  </div>
</template>

<script>

import pubsub from 'pubsub-js'

export default {
  name: "MyStudent",
  props:{
    name:{
      type:String,
      required:true
    },
    sex:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:18
    }
  },
  data(){
    return{
      msg:"学生信息"
    }
  },
  methods:{
    sendStudentName(){
      //发布消息，并传递参数666
      pubsub.publish('hello',666)
    }
  }
}
</script>

<style scoped>

</style>