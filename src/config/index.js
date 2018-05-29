let BaseUrl;
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
  BaseUrl = 'http://localhost:8888';
  // BaseUrl = 'https://m.xxiaoyu.com';
} else {
  BaseUrl = '';
}

export default {
  BaseUrl
};
