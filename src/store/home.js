/**
 * Created by sampson on 2017/5/10.
 */
import axios from '~common/axios'
const state = {

}
const actions = {
    fetchUserInfo () {
        return axios.get('/user')
    }

}
const mutations = {

}
export default { state, actions, mutations }
