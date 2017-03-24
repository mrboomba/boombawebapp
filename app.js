var express  = require('express');
var app      = express();
var port     = 3000;
var index    = require('./routes/index')
var configDB = require('./config/dbinit.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoose.connect(configDB.url);

app.use('/api',index);


app.listen(port,function(){
	console.log('Magic is happend on port 3000');
})



