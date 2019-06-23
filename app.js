const fs = require('fs');
const restify = require('restify');

const port = 3443;
const httpsOptions = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
    passphrase: '120196'
};

const server = restify.createServer(httpsOptions);

server.get('/hello', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, console.log('Listening on port ' + port + '...'));
