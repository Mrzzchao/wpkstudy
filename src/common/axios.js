/**
 * Created by sampson on 2017/5/10.
 */
import axios from 'axios'
let options = {}

if (process.env.NODE_ENV === 'production') {
    options.baseURL = 'http://ews.500.com'
} else {
    if (process.SERVER_BUILD) { // The server-side needs a full url to works
        options.baseURL = 'http://127.0.0.1:3000/ews'
    } else {
        options.baseURL = '/ews'
    }
}

export default axios.create(options)
