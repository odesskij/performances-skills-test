'use strict';

const Vue      = require('vue');
const $        = require('jquery');
const template = require('./template.vue.html');

const Component = Vue.extend({
  template,

  data() {
    return {};
  },

  methods: {
    loadPerformances(query) {
      return new Promise((resolve, reject) =>
        $.ajax(
          {
            url:         '/api/performance',
            data:        query,
            method:      'GET',
            contentType: 'application/json; charset=utf-8',
            dataType:    'json'
          })
          .done((performances, status, response) =>
            resolve(performances))
          .fail((err) => reject(err)));
    }
  }
});

module.exports = Component;