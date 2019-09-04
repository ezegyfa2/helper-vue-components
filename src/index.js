import AjaxComponent from "./AjaxComponent.vue";
import AjaxTable from "./AjaxTable.vue";

export default {
	install(Vue, options) {
		Vue.component("ajax-component", AjaxComponent);
		Vue.component("ajax-table", AjaxTable);
	}
};