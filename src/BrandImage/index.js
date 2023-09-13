export default {
    install(Vue) {
        require('helper-vue-components/bootstrap-package').install(Vue)

        registerVueComponent(
            'brand-image',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/BrandImage/Component.vue'
        );
    }
}