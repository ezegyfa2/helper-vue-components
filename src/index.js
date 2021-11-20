export default {
	install(Vue) {
		Vue.component('ajax-component', require('./AjaxComponent.vue').default);
		Vue.component('ajax-table', require('./AjaxTable.vue').default);
		Vue.component('contact-form', require('./ContactForm.vue').default);
		Vue.component('black-footer', require('./BlackFooter.vue').default);
		Vue.component('wertically-icon-links', require('./werticallyIconLinks.vue').default);
	}
};