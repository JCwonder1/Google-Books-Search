var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      user_id: 1, 
      user_name: "Joe"
    },
    {
      user_id: 2,
      user_name: "Kate"
    }
  ] );
});

module.exports = router;
