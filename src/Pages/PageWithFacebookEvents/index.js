export default {
    install(Vue) {
        require('js-helper-methods/facebookMethods')

        registerVueComponent(
            'page-with-facebook-events',
            require('./Component.vue').default,
            Vue
        )
    }
}