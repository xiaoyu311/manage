import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import home from '@/components/home';
import login from '@/components/login';
import peopleInfo from '@/components/people-info';
/**
 * 文章管理相关
 */
import articleAdd from '@/components/article/article-add';
import articleInfo from '@/components/article/article-info';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: App,
    children: [
      {
        path: 'home',
        component: home,
        children: [{
          path: 'people',
          component: peopleInfo
        }, {
          path: 'articleadd',
          component: articleAdd
        }, {
          path: 'articleinfo',
          component: articleInfo
        }]
      },
      {
        path: 'login',
        component: login
      }
    ]
  }
];

const router = new Router({ routes });

export default router;
