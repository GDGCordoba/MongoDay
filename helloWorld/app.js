var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello World");
});

server.listen(8080);

console.log("Servidor funcinando en el puerto 8080");