export default {
    install(Vue) {
        window.addRequiredPackage('fontawesome')
        require('helper-vue-components/ClassAdder').default.install
        
        registerVueComponent(
            'wertically-icon-links',
            require('./Component.vue').default,
            Vue
        );
    }
}