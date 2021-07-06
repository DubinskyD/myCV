const fs = require('fs');
const { join } = require('path');
const express = require('express');

const server = express();
const routes = require('./routes/cv');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(join(__dirname, 'build')));

const forceSsl = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

app.configure(function () {
  if (env === 'production') {
    app.use(forceSsl);
  }
});

server.use('/cv', routes);

if (process.env.NODE_ENV === 'production') {
  const indexFile = join(__dirname, 'build/index.html');
  server.get('*', (req, res) => fs.createReadStream(indexFile).pipe(res));
}

module.exports = server;
