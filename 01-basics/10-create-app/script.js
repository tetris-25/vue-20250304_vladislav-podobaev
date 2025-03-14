import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',

  setup() {
    return {
      date: new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' }),
    }
  },

  template: `<div>Сегодня {{ date }}</div>`,
})

const app = createApp(App)

const vm = app.mount('#app')
