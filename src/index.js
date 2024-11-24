const express = require('express');
const os = require('os');

const app = express();

// IP serwera
const serverAddress = os.networkInterfaces().eth0?.[0].address || 'localhost';

// Nazwa hosta
const hostname = os.hostname();

// Wersja aplikacji
const appVersion = process.env.VERSION || 'undefined';

app.get('/', (req, res) => {
  res.send(`
    <h1>Prosta aplikacja</h1>
    <p>Adres serwera: ${serverAddress}</p>
    <p>Hostname: ${hostname}</p>
    <p>Wersja aplikacji: ${appVersion}</p>
  `);
});

// Port
app.listen(8080, '0.0.0.0', () => {
  console.log('Listening on port 8080');
});
