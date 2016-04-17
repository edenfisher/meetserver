var Sequelize = require('sequelize');
var config = require('../config/config');
var sequelize = require('./DbSequelizeConnection');


var Group = sequelize.define('group', {
  id: {type:Sequelize.INTEGER,primaryKey:true},
  name: Sequelize.STRING
});

module.exports = Group;
