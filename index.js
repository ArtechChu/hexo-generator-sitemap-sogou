var merge = require('utils-merge');
var pathFn = require('path');

var config = hexo.config.sogousitemap = merge({
  path: 'sogousitemap.xml'
}, hexo.config.sogousitemap);

if (!pathFn.extname(config.path)){
  config.path += '.xml';
}

hexo.extend.generator.register('sogousitemap', require('./lib/generator'));
