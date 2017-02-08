'use strict';

const _ = require('lodash');

module.exports = {
  'fixtures:load': function () {
    const { Artist, ConcertPlace, Performance, User } = require('../model');

    const artists = _.map(_.range(0, 10), (i) =>
      Artist.create({ name: `Artist ${i}` }));

    const places = _.map(_.range(0, 5), (i) =>
      ConcertPlace.create({ title: `Place ${i}` }));

    /*const user = User.create({ username: 'admin', password: 'password' });*/

    Promise
      .all([
        Promise.all(artists),
        Promise.all(places)
      ])
      .then(([artists, places]) =>
        _.map(_.range(0, 100), (i) =>
          Performance.create({
            title:    `Performance ${i}`,
            // between now and two weeks
            date:     new Date(Date.now() + _.random(0, 1000 * 60 * 60 * 24 * 14)),
            artistId: _.sample(artists).id,
            placeId:  _.sample(places).id,
          })
        )
      )
  }
};