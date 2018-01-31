var loaderUtils = require('loader-utils');
var fs = require('fs');
module.exports = function (source) {
	var p = this.context;
	var cssPath = /(\_include\()+('|")+(.+)+('|")+\)/.exec(source)[3];
	var content = fs.readFileSync(p +'/'+ cssPath);
	var all = source.replace(/(\_include\()+('|")+(.+)+('|")+\)/, '<style>'+content+'</style>');
  return all;
}