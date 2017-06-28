const http = require('http');

const PORT = 7500;

function handleRequest(request,response) {

	response.end("You look tired today--are you sick? " + request.url);

}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {

	console.log('Server listening on http://localhost: ' + PORT);



});