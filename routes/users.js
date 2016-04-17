var express = require('express');
var router = express.Router();
var user = require('../models/User');
var config = require('../config/config');



router.put('/register', function (req, res, next) {
user.sync({force: false}).then(function () {
  // Table created
  return user.create({
    username: req.body.username,
    name: req.body.name,
    password: req.body.password
  }).then(function() {
    res.sendStatus(200);
  }).catch(function (err) {
    next(err);
  });
});
});


router.post('/login', function (req, res, next) {
user.sync({force: false}).then(function () {
  // Table created
  return user.find({
      where:
      {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(user) {
    res.send(user.id.toString());
  }).error(function(error) {
    next(error);
  });
});
});

module.exports = router;
