<template>
  <div>
    <el-select multiple collapse-tags v-model='selectedArray' @change='changeSelect' @remove-tag='removeTag' placeholder='请选择'>
      <el-option label='全选' value='全选' @click.native='selectAll'></el-option>
      <el-option v-for='(item, index) in options' :key='index' :label='item.name' :value='item.label'></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data(){
    return{
      selectedArray: [],
      options: [
        { name: '山西', label: 'one' },
        { name: '北京', label: 'tow' },
        { name: '上海', label: 'three' },
        { name: '深圳', label: 'four' },
        { name: '广东', label: 'five' }
      ]
    }
  },
  methods:{
    selectAll() {
      if (this.selectedArray.length < this.options.length) {
        this.selectedArray = []
        this.options.map((item) => {
          this.selectedArray.push(item.name)
        })
        this.selectedArray.unshift('全选')
      } else {
        this.selectedArray = []
      }
    },
    changeSelect(val) {
      if (!val.includes('全选') && val.length === this.options.length) {
        this.selectedArray.unshift('全选')
      } else if (val.includes('全选') && (val.length - 1) < this.options.length) {
        this.selectedArray = this.selectedArray.filter((item) => {
          return item !== '全选'
        })
      }
    },
    removeTag(val) {
      if (val === '全选') {
        this.selectedArray = []
      }
    }
  }
}
</script>

<style scoped>

</style>