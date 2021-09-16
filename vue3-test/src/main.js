import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Foo from './components/Foo'
import Bar from './components/Bar'

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
