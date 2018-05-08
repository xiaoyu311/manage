let BaseUrl;
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
  BaseUrl = 'http://localhost:8001';
} else {
  BaseUrl = '';
}

export default {
  BaseUrl
};