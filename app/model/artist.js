'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Artist = sequelize.define('artist', {
    id:   {
      type:          Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey:    true
    },
    name: {
      type:      Sequelize.STRING,
      allowNull: false
    }
  });

  return Artist;
};