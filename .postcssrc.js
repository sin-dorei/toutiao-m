module.exports = {
  plugins: {
    // 转移写入到.browserslistrc文件里（新的写法）
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
