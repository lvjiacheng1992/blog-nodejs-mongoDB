var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.query.name+'---'+req.query.pwd);
});

module.exports = router;
