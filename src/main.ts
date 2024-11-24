import './assets/main.css'
import router from './router'
import Toast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(Toast)

app.mount('#app')
