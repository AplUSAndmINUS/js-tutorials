let http = require('http');
let dt = require('./node-date');

http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(`Hello world!
    The current date and time is: ${dt.myDateTime()}`);
		// res.end('Hello World! \n The current date and time is: ' + dt.myDateTime());
	})
	.listen(7200);
