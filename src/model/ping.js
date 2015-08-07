var mongoose = require('mongoose')
var express = require('express')

var Schema = mongoose.schema

var pingSchema = new Schema({

  date: Date,
  appId: String,
  type: String,
  ip: String,
  mac: String,


})