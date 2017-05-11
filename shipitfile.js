/**
 * Created by sampson on 2017/5/11.
 */
const path = require('path')
module.exports = function (shipit) {
    require('shipit-deploy')(shipit)
    shipit.initConfig({
        default: {
            workspace: path.resolve(__dirname, 'tmp'),
            deployTo: '/root/project/wpkstudy',
            repositoryUrl: 'git@github.com:sampsonli/wpkstudy.git',
            ignores: ['.git', 'node_modules'],
            rsync: ['--del'],
            keepReleases: 5,
            shallowClone: true
        },
        staging: {
            servers: 'root@wxminapp.com'
        }
    })
}
