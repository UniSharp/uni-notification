import Notifications from './Notifications.vue';

function install(Vue) {
  Vue.component('notifications', Notifications)

  var items = [];
  const defaultOptions = {
    duration: 5000
  };

  function showItem(item) {
    items.push({
      type: item.type,
      message: item.message,
      duration: item.duration || defaultOptions.duration
    });
  }

  Vue.prototype.$notify = {
    show: (item) => {
      showItem(item)
    },

    success: (message) => {
      showItem({ type: 'success', message: message });
    },

    danger: (message) => {
      showItem({ type: 'danger', message: message });
    },

    warning: (message) => {
      showItem({ type: 'warning', message: message });
    },

    info: (message) => {
      showItem({ type: 'info', message: message });
    },

    primary: (message) => {
      showItem({ type: 'primary', message: message });
    },

    default: (message) => {
      showItem({ type: 'default', message: message });
    },

    getItems: () => {
      return items
    }
  }

  return Vue.prototype.$notify;
}

export default install;
