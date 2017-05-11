/**
 * Created by sampson on 2017/5/11.
 */
module.exports = function (shipit) {
    require('shipit-deploy')(shipit)
    shipit.initConfig({
        default: {
            workspace: '/var/tmp_project',
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
