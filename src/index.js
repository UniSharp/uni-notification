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
      duration: item.duration || defaultOptions.duration,
      display: true
    });
  }

  Vue.prototype.$notify = {
    show: function (item) {
      showItem(item)
    },

    success: function (message) {
      showItem({ type: 'success', message: message });
    },

    danger: function (message) {
      showItem({ type: 'danger', message: message });
    },

    warning: function (message) {
      showItem({ type: 'warning', message: message });
    },

    info: function (message) {
      showItem({ type: 'info', message: message });
    },

    primary: function (message) {
      showItem({ type: 'primary', message: message });
    },

    default: function (message) {
      showItem({ type: 'default', message: message });
    },

    getItems: function () {
      return items
    }
  }

  return Vue.prototype.$notify;
}

export default install;
