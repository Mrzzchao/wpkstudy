/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from './pages/Test.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/demo',
            component: Test
        }, {
            path: '*',
            redirect: '/demo'
        }
    ]
})
