import './assets/main.css'
import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import SvgIcon from "@/components/svg-icon-plugin/SvgIcon.vue";
import 'virtual:svg-icons-register'


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#E5E5E5',
          secondary: '#F7F7F7',
          accent: '#000000',
          error: '#E34141',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
      dark: {
        colors: {
          primary: '#2B2B2B',
          secondary: '#1E2532',
          accent: '#F7F7F7',
          error: '#E34141',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
})



const app = createApp(App)
app.use(createPinia())
app.use(vuetify)
app.use(router)

app.component('svg-icon', SvgIcon)

app.mount('#app')
