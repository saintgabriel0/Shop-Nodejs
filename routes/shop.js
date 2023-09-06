const path = require('path');
const express = require('express');

// const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;


//! This particualr code below threw an error
// const path = require('path');
// const express = require('express');
// const adminData = require('./admin');
// const router = express.Router();
// router.get('/', (req, res, next) => {
//     console.log(adminData.route);
//     // console.log('shop.js', adminData.products);
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
// });
// module.exports = router;
