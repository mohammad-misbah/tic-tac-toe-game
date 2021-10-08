import Vue from 'vue'
import App from './App.vue'
import BoardComponent from './components/BoardComponent';
import CellComponent from './components/CellComponent';

Vue.component('board-component', BoardComponent);
Vue.component('CellComponent', CellComponent);

new Vue({
  el: '#app',
  render: h => h(App)
});
