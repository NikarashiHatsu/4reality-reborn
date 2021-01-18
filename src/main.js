import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import SmoothScroll from 'smooth-scroll'

let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
})

createApp(App).mount('#app')