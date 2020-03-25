const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const compressionPlugin = require('compression-webpack-plugin');

const addCustomLoader = () => config => {
  const plugins = [];
  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      new compressionPlugin({
        test: /\.js$|\.html$|\.json$|\.css/,
        threshold: 0, // 只有大小大于该值的资源会被处理
        minRatio: 0.8 // 只有压缩率小于这个值的资源才会被处理
      })
    );
  }
  config.plugins = [...config.plugins, ...plugins];
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#03a9ac' }
  }),
  addCustomLoader()
);
