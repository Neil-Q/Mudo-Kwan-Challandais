import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

history.scrollRestoration = 'manual';
window.onbeforeunload = () => window.scrollTo({top: 0, behavior: "instant"});

// Make sure that all scrolls triggers are updated on resize
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
window.onresize = () => ScrollTrigger.refresh();