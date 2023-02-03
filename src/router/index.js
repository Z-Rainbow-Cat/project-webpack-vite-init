import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    "history":createWebHistory(),
    routes:[
        {
            path:"/user/userlist",
            component:()=>import("@/page/user/userlist/index.vue")
        },
        {
            path:"/user/userinfo",
            component:()=>import("@/page/user/userinfo/index.vue")
        },
    ]
})
export default router