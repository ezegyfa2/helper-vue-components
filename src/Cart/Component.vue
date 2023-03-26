<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		empty_message: {
			type: String,
			default: 'Your cart is empty, try to Add stuff.'
		},
		title: {
			type: String,
			default: 'Cart'
		},
		remove_text: {
			type: String,
			default: 'remove'
		},
		total_text: {
			type: String,
			default: 'Total'
		},
		item_sections: {
			type: Array
		}
	},
	data() {
		return {
			cClass: 'cart',
			modalClass: 'modal off'
		}
	},
	methods: {
		cartON() {
			if (this.cClass === 'cart on') {
				this.cClass = 'cart'
				this.modalClass = 'modal off'
			} else {
				this.cClass = 'cart on'
				this.modalClass = 'modal'
			}
		}
	}
}
</script>
