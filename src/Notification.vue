<template>
  <div class="notification alert alert-dismissible" :class="'alert-' + item.type">
    <button type="button" class="close" @click="close"><span>&times;</span></button>
    {{ item.message }}
  </div>
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
      close (item) {
        clearTimeout(this.timeout)
        this.$emit('close', this.item)
        this.$destroy()
      }
    }
  }
</script>
