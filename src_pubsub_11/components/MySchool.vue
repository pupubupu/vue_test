<template>
  <div>
    <h1>欢迎来到{{name}}</h1>
    <h2>地址：{{address}}</h2>
    <button @click="suicide">点我销毁组件</button>
    <hr/>
  </div>
</template>

<script>

import pubsub from 'pubsub-js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MySchool",
  components:{

  },
  props:{
    name:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      students:[
        {
          name:"小李",
          sex:"男",
          age:18
        },
        {
          name:"小张",
          sex:"男",
          age:19
        },
        {
          name:"小红",
          sex:"女",
          age:20
        }
      ]

    }
  },
  methods:{
    suicide(){
      this.$destroy()
    }
  },
  mounted() {
    //订阅一个消息，名称是hello，并且该消息返回一个id
    this.pubid = pubsub.subscribe('hello',(msgName,data)=>{
      console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    })
  },
  beforeDestroy() {
    //给消息解绑，根据id解绑
    pubsub.unsubscribe(this.pubid)
    console.log("消息被销毁了",pubsub)
  }

}
</script>

<style scoped>

</style>