const Vue = require('vue/dist/vue.min');
import Hover from 'js-util/Hover';

export default function () {
  return new Vue({
    el: '#vue-global-navi',
    data: {
      isOpenedNavi: false,
    },
    mounted: function() {
      // const elmHover = this.$el.querySelectorAll('.js-hover');
      // const elmHeader = this.$el.querySelector('.p-global-header');
      // for (var i = 0; i < elmHover.length; i++) {
      //   new Hover(elmHover[i]);
      // }

    },
    computed: {

    },
    methods: {
      toggle: function() {
        this.isOpenedNavi = !this.isOpenedNavi;
      }
    },
  });
}
