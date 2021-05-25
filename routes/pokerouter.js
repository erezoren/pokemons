var express = require('express');
const {getAll,getById} = require("../lib/file_reader");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Content-Type",'application/json');
  res.json(getAll());
});

router.get('/:id', function(req, res, next) {
  res.header("Content-Type",'application/json');
  res.json(getById(req.params.id));
});

module.exports = router;
