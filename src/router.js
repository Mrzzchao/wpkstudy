/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Test from './pages/Test.vue'

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/demo',
            component: Test
        },{
            path: '*',
            redirect: '/demo'
        }
    ]
});