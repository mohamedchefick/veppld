import './assets/styles/main.css'
import './assets/styles/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import piniaPersist from 'pinia-plugin-persistedstate'
import vClickOutside from 'click-outside-vue3'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
const pinia = createPinia()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(pinia)
pinia.use(piniaPersist)
app.use(vClickOutside)

app.mount('#app')
