import Vue from 'vue'
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/menu.css'
import 'element-ui/lib/theme-chalk/container.css'
import 'element-ui/lib/theme-chalk/main.css'
import 'element-ui/lib/theme-chalk/footer.css'
import app from './components/app'

Vue.use(Element, { locale });

new Vue({
    el: '#app',
    components: {app},
    template: '<app/>',
})
