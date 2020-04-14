module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/SalesApp/'
    : '/',
    devServer: {
        port: 9000,
        open: true,
        https: false
    }
};