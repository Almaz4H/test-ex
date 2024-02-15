import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [        
        { path: '/', redirect: '/login' },
        {
            path: '/todos',
            component: () => import('./pages/Todos.vue'),                    
        },
        {
            path: "/login",
            component: () => import('./pages/Login.vue')
}    

    ]
})

export default router;

