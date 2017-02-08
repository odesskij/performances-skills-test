'use strict';

const _        = require('lodash');
module.exports = {
  'schema:create': function () {
    const { Artist, ConcertPlace, Performance, User } = require('./../model');

    User.sync();

    Promise.all([
      Artist.sync(),
      ConcertPlace.sync(),
    ]).then(() =>
      Performance.sync());
  },
  'schema:drop':   function () {
    const { Artist, ConcertPlace, Performance, User } = require('./../model');

    User.drop();

    Performance
      .drop()
      .then(() =>
        Promise.all([
          Artist.drop(),
          ConcertPlace.drop()]));
  }
};