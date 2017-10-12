<template lang="pug">
  .notifications
    transition-group(name="list", tag="div")
      notification(v-for="(item, index) in items", :item="item", :key="index", @close="removeItem") {{ item }}
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
