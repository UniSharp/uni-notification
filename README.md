# vue-bs-notify

[![npm](https://img.shields.io/npm/v/@unisharp/vue-component-notification.svg)](https://www.npmjs.com/package/@unisharp/vue-component-notification)
[![npm](https://img.shields.io/npm/dt/@unisharp/vue-component-notification.svg)](https://www.npmjs.com/package/@unisharp/vue-component-notification)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Vue Bootstrap Notifications

### Installation
```bash
$ yarn add @unisharp/vue-component-notification
```

### Nuxt Setup

`plugins/notification.js`

```javascript
import Vue from 'vue'
import Notifications from '@unisharp/vue-component-notification'

Vue.use(Notifications)

export default ({ store }, inject) => {
  // Inject `notify` key
  // -> `app.$notify`
  // -> `this.$notify` in Vue components
  // -> `this.$notify` in store actions/mutations
  // This way we can use it in middleware and pages `asyncData` & `fetch`
  inject('notify', new Notifications(Vue))
}
```

`nuxt.config.js`

```javascript
...
plugins: ['~/plugins/notification'],
...
```

`layouts/default.vue`

```javascript
<template lang="pug">
  div
    notifications
    nuxt
</template>
```
### Usage

The show method accetps an object.
```javascript
this.$notify.show({message: 'Hello world', type: 'default'})
```

There are 6 helper functions who will accet just a string.
```javascript
this.$notify.primary('Hello world')
this.$notify.default('Hello world')
this.$notify.success('Hello world')
this.$notify.info('Hello world')
this.$notify.warning('Hello world')
this.$notify.danger('Hello world')
```

