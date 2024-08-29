import router from '../src/router'
import Antd from 'ant-design-vue'
import App from './App.vue'
import { createApp } from 'vue'
//import { registerLayouts } from '/'

const app = createApp(App)

app.use(router)
app.use(Antd)
//registerLayouts(app)

app.mount('#app')
