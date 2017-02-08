'use strict';

const app             = require('express').Router();
const { Performance, Artist, ConcertPlace } = require('../model');

app.get('/', (req, res) =>
  Performance
    .findAll({
      limit: +req.query.perPage || 10,
      order: [
        [req.query.orderProp || 'date', req.query.orderBy || 'DESC']
      ],
      include: [Artist, ConcertPlace]
    })
    .then((performances) => res.json(performances)));

module.exports = app;