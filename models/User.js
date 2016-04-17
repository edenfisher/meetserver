var Sequelize = require('sequelize');
var config = require('../config/config');
var sequelize = require('./DbSequelizeConnection');


var User = sequelize.define('user', {
  username: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  id: {type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true}
});

module.exports = User;
