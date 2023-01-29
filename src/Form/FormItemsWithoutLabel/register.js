export default {
    install(Vue) {
        let prefix = 'form-item-without-label'
		registerVueComponent(prefix + '-checkbox-input', require('./Inputs/CheckBox/Component.vue').default, Vue)
		registerVueComponent(prefix + '-number-input', require('./Inputs/Number/Component.vue').default, Vue)
		registerVueComponent(prefix + '-text-input', require('./Inputs/Text/Component.vue').default, Vue)
		registerVueComponent(prefix + '-email-input', require('./Inputs/Email/Component.vue').default, Vue)
		registerVueComponent(prefix + '-phone-input', require('./Inputs/Phone/Component.vue').default, Vue)
		registerVueComponent(prefix + '-datetime-input', require('./Inputs/DateTime/Component.vue').default, Vue)
		registerVueComponent(prefix + '-select', require('./Select/Component.vue').default, Vue)
		registerVueComponent(prefix + '-textarea', require('./TextArea/Component.vue').default, Vue)
    }
}