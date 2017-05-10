/**
 * Created by lichun on 2017/5/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Test = () => import('./pages/Test.vue' /* webpackChunkName: "chunks/test" */)
const Test2 = () => import('./pages/Test2.vue'/* webpackChunkName: "chunks/test2" */)

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
