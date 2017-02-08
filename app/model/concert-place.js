'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const ConcertPlace = sequelize.define('place', {
    id:    {
      type:          Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey:    true
    },
    title: {
      type:      Sequelize.STRING,
      allowNull: false
    }
  });

  return ConcertPlace;
};