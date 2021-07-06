const fs = require('fs');
const { join } = require('path');
const express = require('express');

const server = express();
const routes = require('./routes/cv');

server
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(express.static(join(__dirname, 'build')));

if (process.env.NODE_ENV === 'production') {
  server.use((req, res, next) => {
    res.header('X-Powered-By', 'Dmitriy Dubinsky <Dmitriy.Dubinsky@gmail.com>');

    if (req.header('x-forwarded-proto') !== 'https') res.redirect(`https://${req.header('host')}`)
    else  next();
  })
}

if (process.env.NODE_ENV !== 'production') {
  server
      .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('X-Powered-By', 'Dmitriy Dubinsky <Dmitriy.Dubinsky@gmail.com>');

        next();
      });
}

server.use('/cv', routes);

if (process.env.NODE_ENV === 'production') {
  const indexFile = join(__dirname, 'build/index.html');

  server.get('*', (req, res) => fs.createReadStream(indexFile).pipe(res));
}

module.exports = server;
