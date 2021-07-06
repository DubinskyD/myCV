const fs = require('fs');
const { join } = require('path');
const express = require('express');

const server = express();
const routes = require('./routes/cv');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(join(__dirname, 'build')));

server.use('/cv', routes);

if (process.env.NODE_ENV === 'production') {
  const indexFile = join(__dirname, 'build/index.html');
  server.get('*', (req, res) => fs.createReadStream(indexFile).pipe(res));
}

module.exports = server;
