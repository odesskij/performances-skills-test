'use strict';

const Sequelize = require('sequelize');
const crypto    = require('crypto');

module.exports = function (sequelize) {
  const User = sequelize.define('user', {
    id:       {
      type:          Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey:    true
    },
    username: {
      type:      Sequelize.STRING,
      allowNull: false
    },
    password: {
      type:      Sequelize.STRING,
      allowNull: false
    },
    salt:     {
      type:      Sequelize.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      verifyPassword(user, plainPassword) {
        return user.password === User.encodePassword(plainPassword, user.salt);
      },
      encodePassword(password, salt) {
        return crypto
          .createHmac('sha256', salt)
          .update(password)
          .digest('hex');
      },
    }
  });

  User.beforeCreate((user) => {
    if (!user.salt) {
      user.salt = hashGenerator();
    }

    user.password = User.encodePassword(
      user.password,
      user.salt
    );
  });

  return User;
};