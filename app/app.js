// Install express first: npm install express
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 443;

// Endpoint responding "HELLO WORLd"
app.get('/api/v1', (req, res) => {
  res.status(200).send('HELLO WORLd');
});

// Health check endpoint
app.get('/healthcheck', (req, res) => {
  res.status(200).send('healthy');
});

// Load TLS certificates
const options = {
  key: fs.readFileSync('/path/to/your/server.key'),  // Private key
  cert: fs.readFileSync('/path/to/your/server.crt'),  // Public certificate
};

// HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`Secure server running on port ${port}`);
});
