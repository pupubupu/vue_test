//创建一个路由器
import VueRouter from "vue-router";
import Welcome from "@/components/pages/Welcome";
import User from "@/components/pages/User";
import Apparatus from "@/components/pages/actionlibrary/Apparatus";
import Diet from "@/components/pages/Diet";
import RestaurantList from "@/components/pages/restaurant/RestaurantList";
import RestaurantFoot from "@/components/pages/restaurant/RestaurantFoot";
import Position from "@/components/pages/actionlibrary/Position";

const router = new VueRouter({
    routes:[
        {
            path: '/',
            component: Welcome
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/actionlibrary',
            children: [
                {
                    name: 'apparatus',
                    path: 'apparatus',
                    component: Apparatus
                },
                {
                    name: 'Position',
                    path: 'position',
                    component: Position
                }
            ]
        },
        {
            path: '/diet',
            component: Diet,
        },
        {
            path: '/restaurant',
            children: [
                {
                    name: 'restaurant-list',
                    path: 'restaurant-list',
                    component: RestaurantList
                },
                {
                    name: 'restaurant-foot',
                    path: 'restaurant-foot',
                    component: RestaurantFoot
                }
            ]
        }
    ]
})

export default router