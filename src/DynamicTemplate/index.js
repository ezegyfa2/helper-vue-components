export default {
    install(Vue) {
        require('js-helper-methods/objectMethods')

        registerVueComponent(
            'dynamic-template',
            require('./Component.vue').default,
            Vue
        )
    }
}