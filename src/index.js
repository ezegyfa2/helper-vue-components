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

		Vue.component('landing-page', require('./LandingPage/Component.vue').default);
		Vue.component('navigation-link', require('./NavigationBar/NavigationLinks/NavigationLink/Component.vue').default);
		Vue.component('dropdown-navigation-link', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue').default);
		Vue.component('black-footer', require('./BlackFooter/Component.vue').default);
		Vue.component('button-icon-link', require('./IconLinks/ButtonIconLink/Component.vue').default);
		Vue.component('button-icon-link2', require('./IconLinks/ButtonIconLink2/Component.vue').default);
		Vue.component('rounded-icon-link', require('./IconLinks/RoundedIconLink/Component.vue').default);
		Vue.component('icon-link-with-right-text', require('./IconLinks/IconWithRightText/Component.vue').default);
		Vue.component('wertically-icon-links', require('./IconLinks/WerticallyIconLinks/Component.vue').default);
		Vue.component('dark-link', require('./DarkLink/Component.vue').default);
		Vue.component('brand-image', require('./BrandImage/Component.vue').default);
		Vue.component('dynamic-component', require('./DynamicComponent/Component.vue').default);
		Vue.component('development-child', require('./DevelopmentTest/Child.vue').default);
		Vue.component('ajax-component', require('./AjaxComponent.vue').default);
		Vue.component('ajax-table', require('./AjaxTable.vue').default);
		Vue.component('vue-select', require('./Select/Component.vue').default);
		Vue.component('right-content', require('./RightContent/Component.vue').default);
		Vue.component('csrf-input', require('./CsrfInput/Component.vue').default);
	}
};