'use strict';

const passport   = require('passport');
const _          = require('lodash');
const HTTPStatus = require('http-status');

module.exports =
  () =>
    (req, res, next) =>
      passport.authenticate('local', { session: true }, (err, user, info) =>
        !err && user ?
          (req.user = user, next()) :
          res.status(HTTPStatus.UNAUTHORIZED).json(info))(req, res, next);
