export default {
    install(Vue) {
        window.addRequiredPackage('fontawesome')
        require('helper-vue-components/ClassAdder').default.install
        
        Vue.component('wertically-icon-links', () => import('./Component.vue'));
    }
}