import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './dist/index.js', //you can try changing dist to src
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',  
  },
};

export default config;
