var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
const cors = require('cors');
const dree = require('dree');
const tree = dree.scan('./books');
var privateKey  = fs.readFileSync('ssl/key.pem', 'utf8');
var certificate = fs.readFileSync('ssl/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

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
 
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8888);

