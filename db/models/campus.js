'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');


module.exports = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
  }
});
