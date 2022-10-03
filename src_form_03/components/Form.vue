<template>
  <div>
    <form>
      <table>
        <tr>
          <td>
            用户名：
          </td>
          <td>
            <input type="text" v-model="form.name">
          </td>
        </tr>
        <tr>
          <td>
            密码：
          </td>
          <td>
            <input type="password" v-model="form.psw">
          </td>
        </tr>
        <tr>
          <td>
            性别：
          </td>
          <td>
            男：<input type="radio" value="male" name="sex" checked v-model="form.sex">
            女：<input type="radio" value="female" name="sex" v-model="form.sex">
          </td>
        </tr>
        <tr>
          <td>年龄：</td>
          <td><input type="number" v-model.number="form.age"></td>
        </tr>
        <tr>
          <td>
            爱好：
          </td>
          <td>
            唱：<input type="checkbox" value="sing" name="hobby" v-model="form.hobby">
            跳：<input type="checkbox" value="dance" name="hobby" v-model="form.hobby">
            rap：<input type="checkbox" value="rap" name="hobby" v-model="form.hobby">
            篮球：<input type="checkbox" value="basketball" name="hobby" v-model="form.hobby">
          </td>
        </tr>
        <tr>
          <td>
            选择城市：
          </td>
          <td>
            <select v-model="form.city">
              <option>请选择</option>
              <option value="shanxi">山西</option>
              <option value="beijing">北京</option>
              <option value="xian">西安</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            简介：
          </td>
          <td>
            <textarea v-model="form.description"></textarea>
          </td>
        </tr>
      </table>
      <input type="checkbox" v-model="form.ischeck">已知晓并同意<a href="#">用户协议</a><br>
      <button @click.prevent="onSubmit">点我提交</button>
    </form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  data() {
    return {
      form:{
        name: '',
        psw: '',
        sex:'',
        age:'',
        hobby:[],
        city:'',
        description:'',
        ischeck:''
      }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.form)
    }
  }
}
</script>

<style>

</style>