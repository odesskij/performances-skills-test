'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const HTTPStatus = require('http-status');
const path       = require('path');
const _          = require('lodash');
const glob       = require('glob');

const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
const config        = require('./app/config');
const passport      = require('./app/passport');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({ name: 'session', secret: config.SECRET }));
app.use(passport.initialize());
app.use(passport.session());

const frontendRouter = express.Router();
frontendRouter.get('/', (req, res) => res.send());
app.use(frontendRouter);

_.each(glob.sync(`${__dirname}/app/api/*.js`), (module) =>
  app.use(`/api/${path.basename(module, '.js')}`, require(module)));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err  = new Error('Not Found');
  err.status = HTTPStatus.NOT_FOUND;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || HTTPStatus.INTERNAL_SERVER_ERROR);
  res.render('error', {
    message: err.message,
    error:   {}
  });
});

module.exports = app;
