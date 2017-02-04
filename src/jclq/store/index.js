/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
    name: 'lichun'
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})