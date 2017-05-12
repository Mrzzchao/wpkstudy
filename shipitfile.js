/**
 * Created by sampson on 2017/5/11.
 */
module.exports = function (shipit) {
    require('shipit-deploy')(shipit)
    shipit.initConfig({
        default: {
            workspace: '/root/tmp/workspace',
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
    /* shipit.task('cp', function () {
        shipit.remoteCopy(path.resolve('d:/tmp/workspace'), '/root/project/wpkstudy2')
    })
    */
}
// console.log(path.resolve('d:/tmp/workspace'))
