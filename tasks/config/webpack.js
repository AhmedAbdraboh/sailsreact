
var path = require('path');
module.exports = function(grunt) {
    
      grunt.config.set('webpack', {
        dev: {
            entry: path.join(__dirname, '../../assets/js/index.js'),
            output: {
              path: path.join(__dirname, '../../.tmp/public/js/'),
              filename: 'bundle.js'
            },
            module: {
              loaders: [
                {
                  test: /.js?$/,
                  loader: 'babel-loader',
                  exclude: /node_modules/,
                  query: {
                    presets: ['es2015', 'react']
                  },
                //   progress: true
                }
              ]
            },
        }
      });
    
      grunt.loadNpmTasks('grunt-webpack');
    };
    