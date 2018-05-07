let BaseUrl;
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
  BaseUrl = '';
} else {
  BaseUrl = '';
}

export default {
  BaseUrl
};