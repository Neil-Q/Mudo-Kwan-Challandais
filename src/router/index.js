import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Import gsap to automaticaly kill all animations on routing
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    {
        path: '/le_taekwondo',
        name: 'TaekwondoPresentation',
        component: () => import ("@/views/TaekwondoPresentation.vue")
    },
]   

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo({top: 0, behavior: "instant"});
    ScrollTrigger.killAll();
})

export default router
