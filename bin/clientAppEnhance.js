import { defineClientAppEnhance } from '@vuepress/client'
import Wibu from './Wibu.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Wibu', Wibu)
})
