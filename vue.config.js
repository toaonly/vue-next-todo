const BASE_URL = process.env.NODE_ENV === 'production' ? '/vue-next-todo/' : '/'

module.exports = {
    publicPath: BASE_URL,
}