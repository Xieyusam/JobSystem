import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/index'
import mainpage from '@/view/mainpage/index'
import page1 from '@/view/page/page1'
import myinfo from '@/view/page/student/myinfo'
import myDeliver from '@/view/page/student/myDeliver'
import jobCenter from '@/view/page/student/jobCenter'
import companyCenter from '@/view/page/student/companyCenter'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage,
      children:[
        {
          path: '/',
          name: 'page1',
          component: page1
        },{
          path: '/myinfo',
          name: 'myinfo',
          component: myinfo
        },{
          path: '/myDeliver',
          name: 'myDeliver',
          component: myDeliver
        },{
          path: '/jobCenter',
          name: 'jobCenter',
          component: jobCenter
        },{
          path: '/companyCenter',
          name: 'companyCenter',
          component: companyCenter
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
