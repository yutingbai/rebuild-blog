import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'


// 首页
const Main = () => import('@/views/Main');
const mainList = () => import('@/components/mainList')

// 个人中心
const User = () => import('@/views/User');
const aboutMe = () => import('@/components/aboutMe')
const myPost = () => import('@/components/myPost')
const myStar = () => import('@/components/myStar')
const myItem = () => import('@/components/myItem')
const setting = () => import('@/views/User/setting')
const editor = () => import('@/views/editor')

//登录注册
const Login = () => import('@/views/LogPage/login.vue')
const Resive = () => import('@/views/LogPage/signup.vue')
const router = new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/main/all'
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      redirect:'/main/all',
      children: [
        {
          path: ':type',
          name: 'mainDetail',
          component: mainList
        }
      ]
    },
    {
      path: '/question',
      name: 'question',
      component: Main,
      redirect:'/question/all',
      children: [
        {
          path: '/question',
          redirect:'all'
        },
        {
          path: 'all',
          name: 'all',
          component: aboutMe
        },
        {
          path: 'java',
          name: 'java',
          component: myPost
        },
        {
          path: 'web',
          name: 'web',
          component: myStar
        },
        {
          path: 'other',
          name: 'other',
          component: myItem
        }
        
      ]
    },
    {
      path: '/comperate',
      name: 'comperate',
      component: Main,
      redirect:'/comperate/all',
      children: [
        {
          path: '/comperate',
          redirect:'all'
        },
        {
          path: 'all',
          name: 'all',
          component: aboutMe
        },
        {
          path: 'java',
          name: 'java',
          component: myPost
        },
        {
          path: 'web',
          name: 'web',
          component: myStar
        },
        {
          path: 'other',
          name: 'other',
          component: myItem
        }
        
      ]
    },
    {
      path: '/practice',
      name: 'practice',
      component: Main,
      redirect:'/practice/all',
      children: [
        {
          path: '/practice',
          redirect:'all'
        },
        {
          path: 'all',
          name: 'all',
          component: aboutMe
        },
        {
          path: 'java',
          name: 'java',
          component: myPost
        },
        {
          path: 'web',
          name: 'web',
          component: myStar
        },
        {
          path: 'other',
          name: 'other',
          component: myItem
        }
        
      ]
    },
    {
      path: '/users/login',
      name: 'login',
      component: Login
    }
    ,
    {
      path: '/users/signup',
      name: 'signup',
      component: Resive
    },
    {
      path: '/users/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/users/editor',
      name: 'editor',
      component: editor
    },
    {
      path:'/users/editor/:id',
      components:{
          default : editor,
          editor:editor
      },
      props :{
          editor:true
      } 
  },
    {
      path: '/users',
      name: 'users',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: User,
      children: [
        {
          path: '/users',
          redirect: 'aboutMe'
        },
        {
          path: 'aboutMe',
          name: 'aboutMe',
          component: aboutMe
        },
        {
          path: 'myPost',
          name: 'myPost',
          component: myPost
        },
        {
          path: 'myStar',
          name: 'myStar',
          component: myStar
        },
        {
          path: 'myItem',
          name: 'myItem',
          component: myItem
        },
        {
          path: 'setting',
          name: 'setting',
          component: setting
        },
        
      ]
    }

  ]
})



Vue.use(Router)
export default router
