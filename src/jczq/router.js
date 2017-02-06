/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// import Test from './pages/Test.vue'

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/demo',
            component: (resolve)=>{
                require.ensure([], function () {
                    resolve(require('./pages/Test.vue'))
                }, 'jczq/chunk/test');
               /* System.import('./pages/Test.vue').then((test)=>{
                    resolve(test)
                })*/
            }
        },{
            path: '*',
            redirect: '/demo'
        }
    ]
});