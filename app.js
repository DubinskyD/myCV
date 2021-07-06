const fs = require('fs');
const { join } = require('path');
const express = require('express');

const app = express();
const routes = require('./routes/cv');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'build')));

app.use('/cv', routes);

if (process.env.NODE_ENV === 'production') {
  const indexFile = join(__dirname, 'build/index.html');
  app.get('*', (req, res) => fs.createReadStream(indexFile).pipe(res));
}

module.exports = app;
