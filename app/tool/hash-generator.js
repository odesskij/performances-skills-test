'use strict';

const crypto = require('crypto');

module.exports = function hashGenerator(bytes = 20) {
  return crypto.randomBytes(bytes).toString('hex');
};