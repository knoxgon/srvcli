const express = require('express');
const router = express.Router();
const multer  = require('multer')
const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    console.log(file.originalname)
    cb(null, Date.now() + '.' + file.originalname.split('.').reverse()[0])
  }
})

const upload = multer({ storage: storage });

router.post('/', upload.single('fileEnc'), (req, res, next) => {
  res.end('Success!')
});

module.exports = router;