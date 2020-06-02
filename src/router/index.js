import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'


// 首页
const Main = () => import('@/views/Main');
const mainList = () => import('@/components/mainList')

// 个人中心
const User = () => import('@/views/User');
const aboutMe = () => import('@/components/aboutMe')
const setting = () => import('@/views/User/setting')
const editor = () => import('@/views/editor')
const questionList = () => import('@/components/questionList')
const comperateList = () => import('@/components/comperateList')
const controllerList = () => import('@/components/controllerList')

//登录注册
const Login = () => import('@/views/LogPage/login.vue')
const Resive = () => import('@/views/LogPage/signup.vue')
//文章详情
const postDetile = () => import('@/views/postDetail')
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
          path: ':type',
          name: 'mainDetail',
          component: questionList
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
          path: ':type',
          name: 'comperateList',
          component: comperateList
        }
      ]
    },
    {
      path: '/controller',
      name: 'controller',
      component: Main,
      redirect:'/controller/all',
      children: [
        {
          path: ':type',
          name: 'controllerList',
          component: controllerList
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
      component: User,
      children: [
        {
          path: '/users',
          redirect: 'aboutMe'
        },
        {
          path: ':type',
          name: 'aboutme',
          component: aboutMe
        },
        {
          path: 'setting',
          name: 'setting',
          component: setting
        },
        
      ]
    },
    {
      path: '/postDetail/:postId',
      name: '/postDetail',
      component: postDetile,
    },

  ]
})



Vue.use(Router)
export default router
