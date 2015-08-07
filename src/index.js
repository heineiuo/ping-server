var path = require('path')
var express = require('express')
var _ = require('lodash')
var async = require('lodash')

var defaultSettings = {


}

module.exports = function(conf){

  var settings = _.extend(defaultSettings, conf)
  var app = express()


  /**
   * 开始监听
   */
  app.listen(8129)
  console.log('Server start listening on port 8129')


}