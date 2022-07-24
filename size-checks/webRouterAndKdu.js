import { h, createApp } from '@kdujs/runtime-dom'
import { createRouter, createWebHistory } from '../dist/kdu-router.esm-bundler'

createRouter({
  history: createWebHistory(),
  routes: [],
})

// The bare minimum code required for rendering something to the screen
createApp({
  render: () => h('div', 'hello world!'),
}).mount('#app')
