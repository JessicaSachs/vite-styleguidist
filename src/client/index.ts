import {createApp} from 'vue';
import './index.css';
import App from './App.vue';
import {routes} from './routes'
import {createRouter, createWebHistory} from 'vue-router'
import {hot} from 'vite/hmr';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

let removeRoutes: any[] = []

for (let route of routes) {
  removeRoutes.push(router.addRoute(route))
}

hot.accept('./routes.ts', ({routes}) => {
  for (let removeRoute of removeRoutes) removeRoute()
  removeRoutes = []
  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }
  router.replace('')
})

app.use(router)

app.mount('#app')
