<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{sex}}</h2>
    <h2>{{age}}</h2>
<!--    <button @click="showName($event)">点我获取当前button元素</button>-->
    <button @click="startEvent">点我触发事件</button>
  </div>
</template>

<script>
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
    showName(event){
      alert(event.target);
      console.log(event.target)
    },
    startEvent(){
      this.$emit('myevent',this.name,this.age,this.sex)
    }
  }
}
</script>

<style scoped>

</style>