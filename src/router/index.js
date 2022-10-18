import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LeClub from '../views/LeClub.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/le_club',
        name: 'LeClub',
        component: LeClub
        //component: () => import ("@/components/NavBar.vue")
    }
]   

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(() => {
    window.scrollTo({top: 0, behavior: "instant"});
})

export default router
