'use strict';

const _ = require('lodash');

if (process.env.CLI === '1') {
  _.defaults(process.env, require('../app.json').env)
}

module.exports = {
  PORT:              process.env.PORT,
  DATABASE_NAME:     process.env.DATABASE_NAME,
  DATABASE_USER:     process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST:     process.env.DATABASE_HOST,
  DATABASE_PORT:     process.env.DATABASE_PORT,
  SECRET:            process.env.SECRET,
};