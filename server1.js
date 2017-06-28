const http = require('http');

const PORT = 7000;

function handleRequest(request,response) {

	response.end("You're looking rather fetching today! " + request.url);

}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {

	console.log('Server listening on http://localhost: ' + PORT);



});