import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/le_club',
        name: 'LeClub',
        component: () => import ("@/views/LeClub.vue")
    },
    {
        path: '/histoire_du_taekwondo',
        name: 'TaekwondoHistoire',
        component: () => import ("@/views/TaekwondoHistoire.vue")
    },
]   

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(() => {
    window.scrollTo({top: 0, behavior: "instant"});
})

export default router
