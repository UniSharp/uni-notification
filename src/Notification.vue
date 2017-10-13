<template lang="pug">
  .notification.alert.alert-dismissible(:class="'alert-' + item.type")
    button.close(type="button", @click="close")
      span &times;
    | {{ item.message }}
</template>

<script>
  export default {
    props: ['item'],
    created () {
      if (this.item.duration > 0) {
        this.timeout = setTimeout(function () {
          this.close()
        }.bind(this), this.item.duration);
      }
    },
    data () {
      return {
        timeout: false
      }
    },
    methods: {
      close () {
        clearTimeout(this.timeout)
        this.$emit('close')
        this.$destroy()
      }
    }
  }
</script>
