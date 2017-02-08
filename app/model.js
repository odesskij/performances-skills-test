'use strict';

const sequelize = require('./sequelize');
const _         = require('lodash');

const models = _.mapValues({
  Artist:       require('./model/artist'),
  ConcertPlace: require('./model/concert-place'),
  Performance:  require('./model/performance'),
  User:         require('./model/user'),
}, (define) =>
  define(sequelize));

_.each(models, (Model) =>
  _.isFunction(Model.associate)
    ? Model.associate(models)
    : _.noop
);

module.exports = models;