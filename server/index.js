var express = require('express');
const cors = require('cors');
const dree = require('dree');
const tree = dree.scan('./books');


var app = express();
app.use(cors()); 
app.use(express.static('books'))


app.get('/', function (req, res) {
   res.send('Hello World');
})
 
app.get('/data', function (req, res) {
   var data = ["WebGL","NodeJS","Webpack"]
   res.send(tree);
})
 
var server = app.listen(8888, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
