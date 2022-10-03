<template>
  <div>
    <h3 v-once>n的初始值是{{n}}</h3>
    <h3 v-pre>此时n值是：{{n}}</h3>
    <button @click="n++">点我n++</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Directive",
  data(){
    return{
      n:0
    }
  }
}
</script>

<style scoped>

</style>