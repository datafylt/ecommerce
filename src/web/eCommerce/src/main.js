import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import  'material-design-icons-iconfont/dist/material-design-icons.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md'
    }
})

app.mount('#app')
