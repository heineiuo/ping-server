var path = require('path')


var client = require(path.join(__dirname, '../controller/client'))



module.exports = function(app) {

  app.route('/')
    .get()
    .post()

}