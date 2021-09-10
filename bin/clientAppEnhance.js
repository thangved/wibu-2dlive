import { defineClientAppEnhance } from '@vuepress/client'
import Cat from './Cat.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Cat', Cat)
})
