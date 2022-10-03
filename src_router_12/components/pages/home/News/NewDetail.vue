<template>
  <div>
    <h3>消息序号是：{{id}}</h3>
    <h3>消息名称是：{{event}}</h3>
  </div>
</template>

<script>
export default {
  name: "NewDetail",
  props:['id','event']
}
</script>

<style scoped>

</style>