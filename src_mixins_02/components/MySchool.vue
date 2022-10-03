<template>
  <div>
    <h1>欢迎来到{{name}}</h1>
    <h2>地址：{{address}}</h2>
    <button @click="showName">点我获取学校名称</button>
    <hr/>
    <h1>学生信息</h1>
    <div v-for="(stu,index) in students" :key="index">
      <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据-->
      <MyStudent ref="stu" :name="stu.name" :sex="stu.sex" :age="stu.age"></MyStudent>
      <hr/>
    </div>
  </div>
</template>

<script>

import MyStudent from "@/components/MyStudent";
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import {huise,huise2} from "@/mixin";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MySchool",
  components:{
    MyStudent
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
  mixins:[huise,huise2],
  methods:{
    // showName(){
    //   console.log(this.name)
    // }
  },
  mounted() {
    // setTimeout(()=>{
    //   console.log(this.$refs.stu[0].$emit('myevent'))

    // },1000)

    // setTimeout(()=>{
    //   this.$refs.stu[0].$on('myevent',this.demo)
    // },3000)
  }

}
</script>

<style scoped>

</style>