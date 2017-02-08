'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Performance = sequelize.define('performance', {
    id:    {
      type:          Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey:    true
    },
    title: {
      type:      Sequelize.STRING,
      allowNull: false
    },
    date:  {
      type: Sequelize.DATE
    }
  }, {
    classMethods: {
      associate({ Artist, ConcertPlace }) {
        Performance.belongsTo(Artist);
        Performance.belongsTo(ConcertPlace);
      }
    }
  });

  return Performance;
};