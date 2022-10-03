<template>
  <div>
    <h2>这是Home中的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  // mounted() {
  //   console.log('Home被加载了',this)
  // },
  // beforeDestroy() {
  //   console.log('Home被销毁了')
  // }
}
</script>

<style scoped>

</style>