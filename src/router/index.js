import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import peopleInfo from '@/components/people-info';
/**
 * 文章管理相关
 */
import articleAdd from '@/components/article/article-add';
import articleInfo from '@/components/article/article-info';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
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
  }]
});
