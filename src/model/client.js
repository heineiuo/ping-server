/**
 * Created by Hansel on 15/8/7.
 */
var mongoose = require('mongoose')

var Schema = mongoose.schema

var ClientSchema = new Schema({

  appId: String,
  description: String,
  ip: String,
  mac: String,
  state: String

})

mongoose.schema('Client', ClientSchema)
