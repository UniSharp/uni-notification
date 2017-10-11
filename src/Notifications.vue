<template>
	<div class="notifications">
		<transition-group name="list" tag="div">
			<notification v-for="item in items" :item="item" :key="item" @close="removeItem">{{ item }}</notification>
		</transition-group>
	</div>
</template>

<script>
	import Notification from './Notification.vue';

	export default {
		components: {
			Notification
		},
		data() {
			return {
				items : []
			}
		},
		methods: {
			removeItem(item) {
				let key = this.items.indexOf(item)
				if (key >= 0) {
					this.items.splice(key, 1)
				}
			}
		},
		created() {
			this.items = this.$notify.getItems();
		}
	}
</script>

<style lang="scss">
	@import "../assets/style.scss"
</style>
