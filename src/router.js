/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Test = import('./pages/Test.vue')
const Test2 = import('./pages/Test2.vue')

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/test',
            component: Test
        },
        {
            path: '/test2',
            component: Test2
        },
        {
            path: '*',
            redirect: '/test'
        }
    ]
})
