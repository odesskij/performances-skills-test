'use strict';

const config    = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  config.DATABASE_NAME,
  config.DATABASE_USER,
  config.DATABASE_PASSWORD, {
    host:    config.DATABASE_HOST,
    port:    config.DATABASE_PORT,
    dialect: 'mysql',
    pool:    {
      max:  5,
      min:  0,
      idle: 10000
    },
    logging: true
  }
);


module.exports = sequelize;