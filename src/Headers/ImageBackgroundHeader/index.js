export default {
    install(Vue) {
        require('helper-vue-components/VideoBackground').default.install(Vue)
        require('../Header').default.install(Vue)
    }
}