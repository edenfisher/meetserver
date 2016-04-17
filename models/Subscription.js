var Sequelize = require('sequelize');
var config = require('../config/config');
var sequelize = require('./DbSequelizeConnection');

var Subscription = sequelize.define('subscription', {
  user_id: {Sequelize.INTEGER,
    references: {
   // This is a reference to another model
   model: User,

   // This is the column name of the referenced model
   key: 'id',

   // This declares when to check the foreign key constraint. PostgreSQL only.
   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
 }},
 group_id: {Sequelize.INTEGER,
   references: {
  // This is a reference to another model
  model: Group,

  // This is the column name of the referenced model
  key: 'id',

  // This declares when to check the foreign key constraint. PostgreSQL only.
  deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
}}
});

module.exports = Subscription;
