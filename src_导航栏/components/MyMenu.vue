<template>
  <!-- left -->
  <div>
    <!-- 是 default-active="/" 的情况下，刷新后效果会刷新到第一个项但样式不会变 -->
    <!-- 改成:default-active="$router.path" 刷新后内容在那个地址，导航样式就会在那个项 -->
    <el-menu
        router
        :default-active="$router.path"
        class="el-menu-vertical-demo"
        background-color="#55499c"
        text-color="#fff"
        active-text-color="#409EFF"
        :collapse='isCollapse'
    >
      <!-- 加入router才可以使标签有切换路由的作用  index中是自己配置的路由 -->
      <el-menu-item style="height:80px">
        <span class="el-title">后台管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="/user">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>

      <el-submenu index="/actionlibrary">
        <template slot="title">
          <i class="el-icon-thumb"></i>
          <span>动作库管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/actionlibrary/apparatus">
            <i class="el-icon-tickets"></i>
            <span slot="title">器械数据列表</span>
          </el-menu-item>
          <el-menu-item index="/actionlibrary/position">
            <i class="el-icon-tickets"></i>
            <span slot="title">部位数据列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="/diet">
        <i class="el-icon-dish-1"></i>
        <span slot="title">饮食列表管理</span>
      </el-menu-item>

      <el-submenu index="/restaurant">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>餐厅管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/restaurant/restaurant-list">
            <i class="el-icon-tickets"></i>
            <span slot="title">餐厅列表</span>
          </el-menu-item>
          <el-menu-item index="/restaurant/restaurant-foot">
            <i class="el-icon-tickets"></i>
            <span slot="title">餐厅食品列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MyMenu",
  props:['isCollapse'],
  data(){
    return{

    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>
.el-title{
  font-size: 18px;
  line-height: 80px;
}
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 250px;
  min-height: 400px;
}

</style>