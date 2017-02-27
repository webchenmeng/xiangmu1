// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import RouterConfig from './router-config.js'
import $ from './jquery-1.10.1.min.js'
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	routes: RouterConfig
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')