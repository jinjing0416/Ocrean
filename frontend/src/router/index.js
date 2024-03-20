import Vue from 'vue'
import Router from 'vue-router'
const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '*', component: 'NotFound' },
  { path: '/Topbar', component: 'Topbar' },
  { path: '/entity', component: 'entity' },
  { path: '/Knowledge_Graph', component: 'Knowledge_Graph' },
  { path: '/relationship_extract', component: 'relationship_extract' },
  { path: '/query', component: 'query' }
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})
Vue.use(Router)
export default new Router({
  routes,
  mode: 'history'
})
