// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
//
// const app : App<Element> = createApp(App)
// app.use(ElementPlus)
// app.mount("#app")

import { createApp } from 'vue'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')


// const app : App<Element> = createApp(App)
// app.use(ElementPlus)
// app.mount('#app')

