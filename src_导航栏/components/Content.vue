<template>
  <!-- right -->
  <div>
    <!-- right-top -->
    <div class="header">
      <i v-if="!isCollapse" class="iconfont icon-right-indent" @click="changeMenu"></i>
      <i v-else class="iconfont icon-left-indent" @click="changeMenu"></i>
    </div>
    <!-- right-content  --router -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props:['isCollapse'],
  data(){
    return{

    }
  },
  methods:{
    changeMenu(){
      //点击切换按钮的时候，修改父组件的数据 isCollapse
      this.$emit('changeCollapse')
    }
  }
}
</script>

<style scoped>
.header{
  height: 60px;
  line-height: 60px;
  background-color: #55499c;
  color: #fff;
}
.iconfont{
  font-size: 25px
}
</style>