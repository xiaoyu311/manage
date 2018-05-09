import fetch from './fetch';

// 添加文章
export const article_add = (title, type, content) => fetch('post', '/article/article_add', { title, type, content });

// 文章列表
export const article_list = () => fetch('get', '/article/article_list');

// 删除文章article_remove
export const article_remove = article_id => fetch('post', '/article/article_remove', { article_id });
