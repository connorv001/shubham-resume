// src/main.js
import Vue from 'vue'
import App from './App.vue'
import yaml from 'js-yaml'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created () {
    axios.get('data.yml')
      .then(response => {
        this.$root.resumeData = yaml.safeLoad(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }
}).$mount('#app')
