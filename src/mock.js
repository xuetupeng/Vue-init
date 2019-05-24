import Mock from 'mockjs';

Mock.mock('api.com', {
  'data|10': [{
    name: '@cname',
    age: '@integer(1,100)',
    phone: /^1[356789]\d{9}$/,
    gender: '@boolean',
  }],
});
