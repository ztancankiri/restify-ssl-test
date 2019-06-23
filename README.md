# restify-ssl-test
A simple test API server with Restify and Node.js to test openssl.

## Create Certificates
    openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
