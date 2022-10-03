<template>
  <div>
    <ul class="nav nav-tabs">
      <li v-for="(item) in newsList" :key="item.id">
        <!--跳转路由并携带query参数，to的字符串写法-->
<!--        <router-link class="list-group-item"-->
<!--                     :to="`/home/news/newDetail?id=${item.id}&event=${item.name}`">-->
<!--          {{item.name}}-->
<!--        </router-link>-->

        <!--跳转路由并携带query参数，to的对象写法-->
        <router-link class="list-group-item"
                     :to="{
                        name: 'xiangqing',
                        // path: '/home/news/newDetail',
                        query:{
                          id: item.id,
                          event: item.name
                        }
                        // params:{
                        //   id: item.id,
                        //   event: item.name
                        // }
                     }">
          {{item.name}}
        </router-link>

      </li>
    </ul>
    <button @click="demo">点我跳转</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
  data(){
    return{
      newsList:[
        {
          id: "001",
          name: "新闻001"
        },
        {
          id: "002",
          name: "新闻002"
        },
        {
          id: "003",
          name: "新闻003"
        }
      ]
    }
  },
  methods:{
    demo(){
      this.$router.push({
        name: 'xiangqing',
        query: {id: 1, event: 'heiiheiwhfow'}
      })
    }
  }
}
</script>

<style scoped>

</style>