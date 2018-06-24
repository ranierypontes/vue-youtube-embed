import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import App from './App.vue'

Vue.use(VueYouTubeEmbed)

new Vue({
  el: '#app',
  render: h => h(App)
})
