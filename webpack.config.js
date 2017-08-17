var path = require('path');

module.exports = {
  entry: './src/index',
  externals: {
    'networked-aframe': {
      commonjs: 'networked-aframe',
      commonjs2: 'networked-aframe',
      amd: 'networked-aframe',
      root: 'NAF'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'naf-entity-saver.js',
    libraryTarget: 'umd'
  }
};
