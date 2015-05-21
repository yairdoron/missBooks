var express = require('express');
var app = express();
var url = require('url');
var missingBooks = require('./missingBooks');

app.get ('/all', function (req, res) {
	res.set('header:' , 'you got all books');
	console.log('in /all function');
	res.json(missingBooks.getAllBooks());
});

 app.get('/id/:Bookid', function (req, res) {
 	res.set('header:' , 'you got book by ID');
 	console.log('in get book by id function');
 	res.json(missingBooks.getBookById(req.params.Bookid));
 });

 app.get('/miss/:missNum', function(req, res) {
 	res.set('header:' , 'you got all missing books');
 	res.json(missingBooks.getBookByMiss(req.params.missNum));
 });

app.listen(4000);
console.log('listen 4000');