import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

history.scrollRestoration = 'manual';
window.onbeforeunload = () => window.scrollTo({top: 0, behavior: "instant"});