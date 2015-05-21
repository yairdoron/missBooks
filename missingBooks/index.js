var Book = '{ "missingBooks" : [' +
'{ "id":"1" , "name":"The Shipe"  , "miss":"1" },' +
'{ "id":"2" , "name":"The lione King" , "miss":"1" },' +
'{ "id":"3" , "name":"The Black Mamaba" , " miss ":"0" },' +
'{ "id":"4" , "name":"Kiti The Cat" ,"miss":"1" },' +
'{ "id":"5" , "name":"Frozen Ugurt" , "miss":"1" },' +
'{ "id":"6" , "name":"My name Is jason" , "miss":"0" },' +
'{ "id":"7" , "name":"Kill Best frend" , "miss":"0" },' +
'{ "id":"8" , "name":"I am a gambler" ,"miss":"0" },' +
'{ "id":"9" , "name":"lossi in the sky" ,"miss":"0" }]}';

var books = JSON.parse(Book);

exports.getAllBooks = function() {
	return books;
};

 exports.getBookById = function  (id) {
 	for (i in books.missingBooks)
 	{
 		if (books.missingBooks[i].id == id)
 			return books.missingBooks[i];
 	}
 };

 exports.getBookByMiss = function(miss){
 	var tempMiss =[];
 	for (var i in books.missingBooks)
 	{
 		if (books.missingBooks[i].miss == miss)
		tempMiss.push([i, books.missingBooks[i]]);
 	}
 	return tempMiss;
 };