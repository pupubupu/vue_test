<template>
  <div>
    <h1>欢迎来到{{name}}</h1>
    <h2>地址：{{address}}</h2>
    <hr/>
    <h1>学生信息</h1>
    <div v-for="(stu,index) in students" :key="index">
      <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据-->
      <MyStudent ref="stu" :name="stu.name" :sex="stu.sex" :age="stu.age" @myevent="demo" :aaa = "aaa"></MyStudent>
      <button @click="showName(index)">点我获取vc实例</button>
      <hr/>
      <button @click="demo2">点我发送请求</button>
      <button @click="aaa = 13">点我</button>
    </div>
  </div>
</template>

<script>

import MyStudent from "@/components/MyStudent";
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import axios from 'axios';

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
      ],
      aaa: 12
    }
  },
  methods:{
    showName(index){
      console.log(this.$refs.stu[index])
    },
    demo(...param){
      console.log(param)
    },
    demo2(){
      // eslint-disable-next-line no-undef
      // $.ajax({
      //   url:"http://localhost:8081/ajax",
      //   type:"get",
      //   data:{"username":"李磊"},
      //   success:function (data){
      //     console.log(data)
      //   }
      // })
      this.$http({
        method: "get",
        url: "http://localhost:8081/students",
        params:{
          username:"夏洛"
        }
      }).then( success => {
        console.log(success)
        console.log(1111)
      }, error => {
        console.log(error)
      })
    },
    demo3(){

    }
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