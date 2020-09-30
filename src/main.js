import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datav from 'dd-datav'

createApp(App).use(datav).use(store).use(router).mount('#app')
