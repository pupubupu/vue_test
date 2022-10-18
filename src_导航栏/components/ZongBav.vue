<template>
  <!-- index -->
  <div class="zongNav">
    <!-- 左侧导航区域 -->
    <MyMenu class="mymenu" :isCollapse="isCollapse"></MyMenu>
    <!-- 右侧内容区域 -->
    <Content class="content" :class="{isActive:isCollapse}" @changeCollapse='changeCollapse' :isCollapse='isCollapse'></Content>
  </div>
</template>

<script>
import MyMenu from "@/components/MyMenu";
import Content from "@/components/Content";
export default {
  name: "ZongBav",
  components:{
    MyMenu,
    Content
  },
  data () {
    return {
      //用于控制布局的伸缩
      isCollapse:false,
    }
  },
  methods:{
    changeCollapse(){
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="less" scoped>
.zongNav{
  .mymenu{
    background: #55499c;
    //自动适应屏幕高度，永远100%
    position:fixed;
    top: 0;
    bottom:0;
  }
  .content{
    margin-left:250px;
    // 过渡效果
    transition: 0.5s;
  }
  .isActive{
    margin-left: 64px;
  }
}
</style>