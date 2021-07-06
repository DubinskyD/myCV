const fs = require('fs');
const { join } = require('path');
const router = require('express').Router();

const cvJson = require('../assets/json/cv.json');

router.get('/', (req, res) => {
  return res.send(cvJson);
})

router.get('/pdf', (req, res) => {
  const cvFile = join(__dirname, '../assets/pdf/cv.pdf');

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename='junior_front-end_Dmitriy_Dybinsky.pdf'"
  });
  
  fs.createReadStream(cvFile).pipe(res);
})

module.exports = router;
