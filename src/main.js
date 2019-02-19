import Vue from 'vue'
import App from './App.vue'

var myHeader = {

  template: '<p>this {{}} is my header</p>',

}
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
new Vue({
  el: '#app',//选择挂载点
  data:{
    msg: 'this is from the main.js'
  },
  components:{
    app5
  },
  render: h => h(App)
});

