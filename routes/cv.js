const fs = require('fs');
const { join } = require('path');
const router = require('express').Router();

const cvJson = require('../assets/json/cv.json');

router.get('/', (req, res) => {
  return res.send(cvJson);
})

router.get('/pdf', (req, res) => {
  const cvFile = join(__dirname, '../assets/pdf/cv.pdf');

  fs.createReadStream(cvFile).pipe(res);
})

module.exports = router;
