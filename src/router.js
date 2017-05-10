/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Test = import('./pages/Test.vue' /* webpackChunkName: "chunks/test" */)
const Test2 = import('./pages/Test2.vue'/* webpackChunkName: "chunks/test2" */)
// import Test from '~pages/Test'
// import Test2 from '~pages/Test2'

/* const Test = resolve => {
    require.ensure(['./pages/Test.vue'], () => {
        resolve(require('./pages/Test.vue'))
    })
}

const Test2 = resolve => {
    require.ensure(['./pages/Test2.vue'], () => {
        resolve(require('./pages/Test2.vue'))
    })
} */

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
