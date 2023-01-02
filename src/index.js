window.mergeComponentClasses = function(componentClasses) {
	/*if (!componentClasses[0]) {

	}*/
	if (componentClasses[0].data) {
		componentClasses[0] = componentClasses[0].data().addedClasses
	}
	let currentComponentClasses = Object.assign({}, componentClasses[0])
	for (let i = 1; i < componentClasses.length; ++i) {
		if (componentClasses[i].data) {
			componentClasses[i] = componentClasses[i].data().addedClasses
		}
		for (const [key, value] of Object.entries(componentClasses[i])) {
			let currentValue
			if (Array.isArray(value)) {
				currentValue = value
			}
			else {
				currentValue = [value]
			}
			if (key in currentComponentClasses) {
				if (!Array.isArray(currentComponentClasses[key])) {// && !currentComponentClasses[key].contains(value)
					currentComponentClasses[key] = [ currentComponentClasses[key] ]
				}
				currentComponentClasses[key] = currentComponentClasses[key].concat(value)
			}
			else {
				currentComponentClasses[key] = value
			}
		}   
	}
	return currentComponentClasses
}

export default {
	install(Vue) {
		require('js-helper-methods')

		if (!window.originalMergeStrategy) {
			window.originalMergeStrategy = Vue.config.optionMergeStrategies.data
		}
		Vue.config.optionMergeStrategies.data = function strategy(toVal, fromVal, vm) {
			if (toVal && typeof toVal === 'function' && fromVal && typeof fromVal === 'function') {
				return function() {
					let originalData = toVal()
					let newData = fromVal()
					let mergedData = window.originalMergeStrategy(toVal, fromVal, vm)
					let data = mergedData()
					if ('addedClasses' in originalData && 'addedClasses' in newData) {
						data.addedClasses = mergeComponentClasses([
							originalData.addedClasses,
							newData.addedClasses
						])
					}
					return data
				}
			}
			else {
				return window.originalMergeStrategy(toVal, fromVal, vm)
			}
		}

		registerVueComponent('landing-page', require('./LandingPage/Component.vue').default, Vue);
		registerVueComponent('navigation-link', require('./NavigationBar/NavigationLinks/NavigationLink/Component.vue').default, Vue);
		registerVueComponent('dropdown-navigation-link', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue').default, Vue);
		registerVueComponent('black-footer', require('./Footer/BlackFooter/Component.vue').default, Vue);

		registerVueComponent('vue-link', require('./Link/Component.vue').default, Vue);
		registerVueComponent('button-icon-link', require('./IconLinks/ButtonIconLink/Component.vue').default, Vue);
		registerVueComponent('button-icon-link2', require('./IconLinks/ButtonIconLink2/Component.vue').default, Vue);
		registerVueComponent('rounded-icon-link', require('./IconLinks/RoundedIconLink/Component.vue').default, Vue);
		registerVueComponent('icon-link-with-right-text', require('./IconLinks/IconWithRightText/Component.vue').default, Vue);
		registerVueComponent('wertically-icon-links', require('./IconLinks/WerticallyIconLinks/Component.vue').default, Vue);
		registerVueComponent('delete-icon-link', require('./IconLinks/DeleteIconLink/Component.vue').default, Vue);
		registerVueComponent('edit-icon-link', require('./IconLinks/EditIconLink/Component.vue').default, Vue);
		registerVueComponent('create-icon-link', require('./IconLinks/CreateIconLink/Component.vue').default, Vue);

		registerVueComponent('brand-image', require('./BrandImage/Component.vue').default, Vue);
		registerVueComponent('dynamic-component', require('./DynamicComponent/Component.vue').default, Vue);
		registerVueComponent('development-child', require('./DevelopmentTest/Child.vue').default, Vue);
		registerVueComponent('ajax-component', require('./AjaxComponent.vue').default, Vue);
		registerVueComponent('ajax-table', require('./AjaxTable.vue').default, Vue);
		registerVueComponent('right-content', require('./RightContent/Component.vue').default, Vue);
		registerVueComponent('video-background', require('./VideoBackground/Component.vue').default, Vue);
		registerVueComponent('vue-table', require('./Tables/Table/Component.vue').default, Vue);
		registerVueComponent('vue-table-with-edit-buttons', require('./Tables/TableWithEditButtons/Component.vue').default, Vue);
		
		registerVueComponent('vue-select', require('./Form/Select/Component.vue').default, Vue);
		registerVueComponent('vue-form', require('./Form/Form/Component.vue').default, Vue);
		registerVueComponent('bootstrap-form', require('./Form/BootstrapForm/Component.vue').default, Vue);
		registerVueComponent('form-item-with-validation-errors', require('./Form/FormItemsWithoutLabel/FormItemWithValidationErrors/Component.vue').default, Vue);
		registerVueComponent('form-item-with-label', require('./Form/FormItems/FormItemWithLabel/Component.vue').default, Vue);
		registerVueComponent('csrf-input', require('./CsrfInput/Component.vue').default, Vue);
		
		registerVueComponent('bootstrap-pagination', require('./Pagintation/BootstrapPagination/Pagination/Component.vue').default, Vue);
		registerVueComponent('bootstrap-pagination-item', require('./Pagintation/BootstrapPagination/Item/Component.vue').default, Vue);

		
		Vue.component('VSelect', require('vue-select-picker-bootstrap').default)
		require('./Form/FormItems/register.js').default.install(Vue)
		require('./Form/FormItemsWithoutLabel/register.js').default.install(Vue)
		require('./Form/BootstrapFormItems/FormItems/register.js').default.install(Vue)
		require('./Form/BootstrapFormItems/FormItemsWithoutLabel/register.js').default.install(Vue)
	}
};