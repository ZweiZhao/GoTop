import Vue from 'vue'
import VueRouter from 'vue-router'
import Delegate from '../component/delegate/delegate.vue'
import Rule from '../component/rule/rule.vue'
import Rank from '../component/rank/rank.vue'
import More from '../component/more/more.vue'
import Login from '../component/login/login.vue'
import Empty from '../component/empty/empty.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/empty', component: Empty, alias: '/'},
    {path: '//delegate', component: Delegate},
    {path: '/rule', component: Rule},
    {path: '/rank', component: Rank},
    {path: '/more', component: More},
    {path: '/login', component: Login},
  ]
})