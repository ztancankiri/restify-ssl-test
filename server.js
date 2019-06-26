const fs = require('fs');
const restify = require('restify');

const port = 443;

const httpsOptions = {
	key: fs.readFileSync('./ssl/server-key.pem'),
	cert: fs.readFileSync('./ssl/server-crt.pem'),
	ca: fs.readFileSync('./ssl/ca-crt.pem'),
	requestCert: true,
	rejectUnauthorized: true
};

const server = restify.createServer(httpsOptions);
server.use(restify.plugins.bodyParser());

server.post('/light', (req, res) => {
	res.contentType = 'text/plain';

	try {
		const data = JSON.parse(req.body);
		console.log(data);
		res.send('OK');
	} catch (error) {
		console.log(error);
		res.send('ERROR');
	}
});

server.get('/test', (req, res) => {
	console.log(new Date() + ' ' + req.connection.remoteAddress + ' ' + req.socket.getPeerCertificate().subject.CN + ' ' + req.method + ' ' + req.url);

	res.contentType = 'text/plain';
	res.send('OK');
});

server.listen(port, console.log(`Listening on port ${port}...`));
