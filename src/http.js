import axios from 'axios'; // 基于promise 发送http请求的js库
import './mock';

export default {
  getUser: () => axios.get('api.com'),
  getData: () => axios.get('http://v.juhe.cn/toutiao/ index?type=top&key=abfb9527879ff21a0d005d4503f74ccb'),
};
