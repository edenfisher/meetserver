var Sequelize = require('sequelize');
var config = require('../config/config');


var sequelize = new Sequelize(config.postgres.host,{
  dialect:'postgres',
  dialectOptions:{ssl:true},
  protocol:'postgres',
  omitNull: true
});

module.exports = sequelize;
