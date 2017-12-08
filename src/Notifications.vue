<template lang="pug">
  .notifications
    transition-group(name="list", tag="div")
      notification(v-for="(item, index) in items", v-if="item.display", :item="item", :key="index", @close="removeItem(item)") {{ item }}
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

<style scoped>
  .notifications {
    position: fixed;
    top: 0;
    right: 0;
    padding: 2rem 2rem 0 2rem;
    z-index: 999;
    width: 16rem;
  }

  @media screen and (max-width: 575px) {
    .notifications {
      width: 100%;
    }
  }
</style>
