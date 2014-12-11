var express = require("express");
var  bodyParser = require('body-parser');
var mongoose = require('mongoose');
var model = require('./model.js');

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());

var server = app.listen(9000, function(){
	console.log("Listening on port %", server.address().port);
});

mongoose.connect('mongodb://localhost/workshop');

var categoryId = 1;

app.post('/categories', function(req, res, next){
	var category = req.body;
	var newCat = new model.Category({
		_id: categoryId++,
		name: category.name,
		description: category.description
	});
	newCat.save(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
			return;
		}
		res.sendStatus(201);
	});
});

app.get('/categories', function(req, res, next){
	res.send('OK');
});

