'use strict';

const HTTPStatus = require('http-status');

module.exports =
  () =>
    (req, res, next) =>
      req.user ?
        next() :
        res.status(HTTPStatus.UNAUTHORIZED).send();