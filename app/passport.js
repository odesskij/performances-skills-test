'use strict';

const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;
const { User }          = require('./model');

passport.serializeUser((user, done) =>
  done(null, user.id));

passport.deserializeUser((id, done) =>
  User.findOne({ where: { id } })
    .then((user) => done(null, user))
    .catch((reason) => done(reason)));

passport.use(new LocalStrategy(
  (username, password, done) =>
    User.findOne({ where: { username } })
      .then((user) =>
        user && User.verifyPassword(user, password) ?
          done(null, user) :
          done(null, false, { message: 'Incorrect username or password.' }))
      .catch((reason) =>
        done(reason))
));

module.exports = passport;
