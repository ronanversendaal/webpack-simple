import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import "./assets/styles/scss/theme-style.scss"

import 'vue-awesome/icons'
import Icon from "vue-awesome/components/Icon.vue"

import "./script.js"

Vue.component('icon', Icon)

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
