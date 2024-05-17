import './assets/main.css'
import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import { router } from './router/index'
import { store } from './store'
import queryClient from './vue-query'
const app = createApp(App)

app.use(VueQueryPlugin, { queryClient })
app.use(store)
app.use(router)
app.mount('#app')
