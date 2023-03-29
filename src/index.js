window.mergeComponentClasses = (componentClasses) => {
    /*if (!componentClasses[0]) {

	}*/
    if (componentClasses[0].data) {
        componentClasses[0] = componentClasses[0].data().addedClasses;
    }
    let currentComponentClasses = Object.assign({}, componentClasses[0]);
    for (let i = 1; i < componentClasses.length; ++i) {
        if (componentClasses[i].data) {
            componentClasses[i] = componentClasses[i].data().addedClasses;
        }
        for (const [key, value] of Object.entries(componentClasses[i])) {
            let currentValue;
            if (Array.isArray(value)) {
                currentValue = value;
            } else {
                currentValue = [value];
            }
            if (key in currentComponentClasses) {
                if (!Array.isArray(currentComponentClasses[key])) {
                    // && !currentComponentClasses[key].contains(value)
                    currentComponentClasses[key] = [currentComponentClasses[key]];
                }
                currentComponentClasses[key] =
                    currentComponentClasses[key].concat(value);
            } else {
                currentComponentClasses[key] = value;
            }
        }
    }
    return currentComponentClasses;
};

export default {
    install(Vue) {
        require('js-helper-methods');
        if (!window.originalMergeStrategy) {
            window.originalMergeStrategy = Vue.config.optionMergeStrategies.data;
        }
        Vue.config.optionMergeStrategies.data = function strategy(
            toVal,
            fromVal,
            vm
        ) {
            if (
                toVal &&
                typeof toVal === 'function' &&
                fromVal &&
                typeof fromVal === 'function'
            ) {
                return () => {
                    let originalData = toVal();
                    let newData = fromVal();
                    let mergedData = window.originalMergeStrategy(toVal, fromVal, vm);
                    let data = mergedData();
                    if ('addedClasses' in originalData && 'addedClasses' in newData) {
                        data.addedClasses = mergeComponentClasses([
                            originalData.addedClasses,
                            newData.addedClasses,
                        ]);
                    }
                    return data;
                };
            } else {
                return window.originalMergeStrategy(toVal, fromVal, vm);
            }
        };

        registerVueComponent(
            'dynamic-template',
            require('./Template/Component.vue').default,
            Vue,
            'helper-vue-components/Template/Component.vue'
        );
        registerVueComponent(
            'landing-page',
            require('./LandingPage/Component.vue').default,
            Vue,
            'helper-vue-components/LandingPage/Component.vue'
        );
        registerVueComponent(
            'navigation-link',
            require('./NavigationBar/NavigationLinks/NavigationLink/Component.vue').default,
            Vue,
            'helper-vue-components/NavigationBar/NavigationLinks/NavigationLink/Component.vue'
        );
        registerVueComponent(
            'dropdown-navigation-link',
            require('./NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue')
                .default,
            Vue,
            'helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue'
        );
        registerVueComponent(
            'black-footer',
            require('./Footer/BlackFooter/Component.vue').default,
            Vue,
            'helper-vue-components/Footer/BlackFooter/Component.vue'
        );

        registerVueComponent(
            'vue-link',
            require('./Link/Component.vue').default,
            Vue,
            'helper-vue-components/Link/Component.vue'
        );
        registerVueComponent(
            'button-icon-link',
            require('./IconLinks/ButtonIconLink/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/ButtonIconLink/Component.vue'
        );
        registerVueComponent(
            'button-icon-link2',
            require('./IconLinks/ButtonIconLink2/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/ButtonIconLink2/Component.vue'
        );
        registerVueComponent(
            'rounded-icon-link',
            require('./IconLinks/RoundedIconLink/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/RoundedIconLink/Component.vue'
        );
        registerVueComponent(
            'icon-link-with-right-text',
            require('./IconLinks/IconWithRightText/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/IconWithRightText/Component.vue'
        );
        registerVueComponent(
            'wertically-icon-links',
            require('./IconLinks/WerticallyIconLinks/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/WerticallyIconLinks/Component.vue'
        );
        registerVueComponent(
            'delete-icon-link',
            require('./IconLinks/DeleteIconLink/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/DeleteIconLink/Component.vue'
        );
        registerVueComponent(
            'edit-icon-link',
            require('./IconLinks/EditIconLink/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/EditIconLink/Component.vue'
        );
        registerVueComponent(
            'create-icon-link',
            require('./IconLinks/CreateIconLink/Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/CreateIconLink/Component.vue'
        );

        registerVueComponent(
            'brand-image',
            require('./BrandImage/Component.vue').default,
            Vue,
            'helper-vue-components/BrandImage/Component.vue'
        );
        registerVueComponent(
            'dynamic-component',
            require('./DynamicComponent/Component.vue').default,
            Vue,
            'helper-vue-components/DynamicComponent/Component.vue'
        );
        registerVueComponent(
            'development-child',
            require('./DevelopmentTest/Child.vue').default,
            Vue,
            'helper-vue-components/DevelopmentTest/Child.vue'
        );
        registerVueComponent(
            'ajax-component',
            require('./AjaxComponent.vue').default,
            Vue,
            'helper-vue-components/AjaxComponent.vue'
        );
        registerVueComponent(
            'ajax-table',
            require('./AjaxTable.vue').default,
            Vue,
            'helper-vue-components/AjaxTable.vue'
        );
        registerVueComponent(
            'right-content',
            require('./RightContent/Component.vue').default,
            Vue,
            'helper-vue-components/RightContent/Component.vue'
        );
        registerVueComponent(
            'video-background',
            require('./VideoBackground/Component.vue').default,
            Vue,
            'helper-vue-components/VideoBackground/Component.vue'
        );
        registerVueComponent(
            'vue-table',
            require('./Tables/Table/Component.vue').default,
            Vue,
            'helper-vue-components/Tables/Table/Component.vue'
        );
        registerVueComponent(
            'vue-table-with-edit-buttons',
            require('./Tables/TableWithEditButtons/Component.vue').default,
            Vue,
            'helper-vue-components/Tables/TableWithEditButtons/Component.vue'
        );

        registerVueComponent(
            'vue-select',
            require('./Form/Select/Component.vue').default,
            Vue,
            'helper-vue-components/Form/Select/Component.vue'
        );
        registerVueComponent(
            'vue-form',
            require('./Form/Form/Component.vue').default,
            Vue,
            'helper-vue-components/Form/Form/Component.vue'
        );
        registerVueComponent(
            'multi-page-form',
            require('./Form/MultiPageForm/Component.vue').default,
            Vue,
            'helper-vue-components/Form/MultiPageForm/Component.vue'
        );
        registerVueComponent(
            'bootstrap-multi-page-form',
            require('./Form/BootstrapMultiPageForm/Component.vue').default,
            Vue,
            'helper-vue-components/Form/BootstrapMultiPageForm/Component.vue'
        );
        registerVueComponent(
            'bootstrap-form',
            require('./Form/BootstrapForm/Component.vue').default,
            Vue,
            'helper-vue-components/Form/BootstrapForm/Component.vue'
        );
        registerVueComponent(
            'form-item-with-validation-errors',
            require('./Form/FormItemsWithoutLabel/FormItemWithValidationErrors/Component.vue')
                .default,
            Vue,
            'helper-vue-components/Form/FormItemsWithoutLabel/FormItemWithValidationErrors/Component.vue'
        );
        registerVueComponent(
            'form-item-with-label',
            require('./Form/FormItems/FormItemWithLabel/Component.vue').default,
            Vue,
            'helper-vue-components/Form/FormItems/FormItemWithLabel/Component.vue'
        );
        registerVueComponent(
            'csrf-input',
            require('./CsrfInput/Component.vue').default,
            Vue,
            'helper-vue-components/CsrfInput/Component.vue'
        );

        registerVueComponent(
            'bootstrap-pagination',
            require('./Pagintation/BootstrapPagination/Pagination/Component.vue')
                .default,
            Vue,
            'helper-vue-components/Pagintation/BootstrapPagination/Pagination/Component.vue'
        );
        registerVueComponent(
            'bootstrap-pagination-item',
            require('./Pagintation/BootstrapPagination/Item/Component.vue').default,
            Vue,
            'helper-vue-components/Pagintation/BootstrapPagination/Item/Component.vue'
        );

        Vue.component('VSelect', require('./Form/VSelect/Component.vue').default);
        require('./Form/FormItems/register.js').default.install(Vue);
        require('./Form/FormItemsWithoutLabel/register.js').default.install(Vue);
        require('./Form/BootstrapFormItems/FormItems/register.js').default.install(
            Vue
        );
        require('./Form/BootstrapFormItems/FormItemsWithoutLabel/register.js').default.install(
            Vue
        );
        require('./Form/BootstrapFormItems/FilterFormItems/register.js').default.install(
            Vue
        );
    },
};
