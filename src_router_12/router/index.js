//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from "@/components/pages/About";
import Home from "@/components/pages/Home";
import News from "@/components/pages/home/News";
import Message from "@/components/pages/home/Message";
import NewDetail from "@/components/pages/home/News/NewDetail";

//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'newDetail',
                            component: NewDetail,
                            props($route){
                                return {id: $route.query.id, event: $route.query.event}
                            }
                        }
                    ]
                },
                {
                    path: "message",
                    component: Message,
                }
            ]
        }
    ]
})

export default router