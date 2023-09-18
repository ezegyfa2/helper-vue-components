export default {
    install(Vue) {
        require('js-helper-methods/helperMethods')

        registerVueComponent(
            'csrf-input',
            require('./Component.vue').default,
            Vue
        )
    }
}