// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp, ComponentPublicInstance } from 'kdu'
import { router, routerHistory } from './router'
import { globalState } from './store'
import App from './App.kdu'

declare global {
  interface Window {
    // h: HTML5History
    h: typeof routerHistory
    r: typeof router
    vm: ComponentPublicInstance
  }
}

// for testing purposes
window.h = routerHistory
window.r = router

const app = createApp(App)
app.mixin({
  beforeRouteEnter() {
    console.log('mixin enter')
  },
})

app.provide('state', globalState)
app.use(router)

window.vm = app.mount('#app')
