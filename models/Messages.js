var Sequelize = require('sequelize');
var config = require('../config/config');
var User = require('./User');
var Group = require('./Group');
var sequelize = require('./DbSequelizeConnection');

var Message = sequelize.define('message', {
  sender_id: {type:Sequelize.INTEGER,
    references: {
     // This is a reference to another model
     model: User,

     // This is the column name of the referenced model
     key: 'id',

     // This declares when to check the foreign key constraint. PostgreSQL only.
     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
   }
  },
  content: Sequelize.STRING,
  id: {type:Sequelize.INTEGER,primaryKey:true},
  group_id: {type:Sequelize.INTEGER,
    references: {
   // This is a reference to another model
   model: Group,

   // This is the column name of the referenced model
   key: 'id',

   // This declares when to check the foreign key constraint. PostgreSQL only.
   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
 }}
});

module.exports = Message;
