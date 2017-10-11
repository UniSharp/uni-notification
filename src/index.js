import Notifications from './Notifications.vue';

const Notify = {

  items: [],

  options: {
    duration: 5000
  },

  showItem(item) {
    this.items.push({
      type: item.type,
      message: item.message,
      duration: this.options.duration
    });
  },

  install(Vue, options) {

    Vue.component('notifications', Notifications)

    Vue.prototype.$notify = {
      show: (item) => {
        this.showItem(item)
      },

      success: (message) => {
        this.showItem({ type: 'success', message: message });
      },

      danger: (message) => {
        this.showItem({ type: 'danger', message: message });
      },

      warning: (message) => {
        this.showItem({ type: 'warning', message: message });
      },

      info: (message) => {
        this.showItem({ type: 'info', message: message });
      },

      primary: (message) => {
        this.showItem({ type: 'primary', message: message });
      },

      default: (message) => {
        this.showItem({ type: 'default', message: message });
      },

      getItems: () => {
        return this.items
      }
    }
  }
};

export default Notify;
