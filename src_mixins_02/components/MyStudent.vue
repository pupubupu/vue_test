<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{sex}}</h2>
    <h2>{{age}}</h2>
    <button @click="showName">点我获取学生名称</button>
  </div>
</template>

<script>
import {huise} from '../mixin'

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
  mixins:[huise],
  methods:{

  },
  // mounted(){
  //   console.log('这是学生')
  // }
}
</script>

<style scoped>

</style>