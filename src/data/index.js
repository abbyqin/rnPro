import Mock from 'mockjs';
// 为了写更多的url，做了一个配置
const urlObj = {
  indexURL: '/',
  bookURL: '/book'
};

// 如下代表当请求 '/'的时候，就会响应list数组，数组长度为8，数组的每一项为一个对象，对象拥有这id，name，age字段,Mock.mock（url,options）返回的是promise对象，需要自己做处理哦
Mock.mock(urlObj.indexURL, {
  'list|8': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|18-100': 23,
    },
  ],
});

// 当请求‘/book’的时候就会命中 该配置
Mock.mock(urlObj.bookURL, {
  'book|8': [
    {
      'id|+1': 1,
      'bookName': '@cname',
      'publishDate': '@date("yyyy-MM-dd")',
    },
  ],
});