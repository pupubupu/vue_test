import dayjs from '../dayjs/dayjs.min'
export default {
    install(Vue,...params){
        console.log(params)
        //定义混入
        Vue.mixin({
            mounted() {
                console.log('1234')
            }
        })
        //全局过滤器
        Vue.filter('timeFormater',(time,format = 'YYYY-MM-DD HH:mm:ss')=>{ //给format参数一个默认值
            return dayjs(time).format(format)
        })
        //全局过滤器
        Vue.filter('slice',(value)=>{
            return value.slice(0,4)
        })
        //定义全局指令
        Vue.directive('big',(element,binding)=>{
            element.innerText = binding.value * 10
        })
        //在Vue原型上添加一个方法（vm和vc都可用）
        Vue.prototype.demo = ()=>{
            alert('你好啊')
        }
    }
}