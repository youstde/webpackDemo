var path = require('path'),
    webpack = require('webpack'),
    ROOT_PATH = path.resolve(__dirname), //当前项目的跟路径（绝对）
    BUILD_DIR = path.resolve(ROOT_PATH, 'build');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
    'index': path.resolve(ROOT_PATH, './index.js')
  },
  output: {
    path: BUILD_DIR,
    publicPath: './',
    filename: '[name]/index.js'
  },
    module: {
        rules: [{
            test: /\.html$/,
            use: ['html-loader']
        },{
            test: /\.html$/,
            use: [{
                loader: path.resolve('loader/test-html-loader.js')
            }],
            include: [path.resolve('template/')]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: '',
          template: path.resolve('index.html'),
          filename: 'index.html',
          //chunks这个参数告诉插件要引用entry里面的哪几个入口
          chunks: ['index'],
          //要把script插入标签里
          inject: 'body'
        })
    ]
}