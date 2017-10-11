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

<style>
	.notifications {
		position: fixed;
		top: 30px;
		right: 0;
		margin: 30px;
		z-index: 20;
	}

	@media screen and (max-width: 768px) {
		.notifications {
			width: calc(100% - 60px);
		}
	}

	@media screen and (min-width: 768px) {
		.notifications {
			width: 25%;
			min-width: 220px;
		}
	}

	.notification {
		margin-bottom: 10px;
	}

	.list-enter-active, .list-leave-active {
		transition: opacity .5s
	}

	.list-enter, .list-leave-active {
		opacity: 0;
	}
</style>
