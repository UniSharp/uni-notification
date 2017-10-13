<template lang="pug">
  .notifications
    transition-group(name="list", tag="div")
      notification(v-for="(item, index) in items", v-if="item.show", :item="item", :key="index", @close="removeItem(item)") {{ item }}
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
        item.display = false
      }
    },
    created() {
      this.items = this.$notify.getItems();
    }
  }
</script>
