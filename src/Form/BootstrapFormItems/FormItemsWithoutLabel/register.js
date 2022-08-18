export default {
    install(Vue) {
        let prefix = 'bootstrap-form-item-without-label'
		Vue.component(prefix + '-checkbox-input', require('./Inputs/CheckBox/Component.vue').default)
		Vue.component(prefix + '-number-input', require('./Inputs/Number/Component.vue').default)
		Vue.component(prefix + '-text-input', require('./Inputs/Text/Component.vue').default)
		Vue.component(prefix + '-select', require('./Select/Component.vue').default)
		Vue.component(prefix + '-textarea', require('./TextArea/Component.vue').default)
    }
}