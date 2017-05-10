module.exports = {
    webpack: (config, options, webpack) => {
        config.entry.main = './server/index.js'
        config.context = __dirname
        config.devtool = ''
        return config
    }
}
