'use strict';

const Vue      = require('vue');
const _        = require('lodash');
const template = require('./template.vue.html');

require('./styles.scss');

const URL_MAPPING = [
  { v: 'filter.orderProp', q: 'orderProp' },
  { v: 'filter.orderBy', q: 'orderBy' },
  { v: 'state.perPage', q: 'perPage' },
];

const Component = Vue.extend({
  template,

  data() {
    return {
      state:        { perPage: 10 },
      filter:       {
        orderProp: 'date',
        orderBy:   'DESC'
      },
      performances: []
    };
  },

  watch: _.reduce(URL_MAPPING, (acc, mapping) =>
    _.extend({
      [mapping.v](val) {
        this.$router.go({
          name:  'list',
          query: _.defaults({
            [mapping.q]: val
          }, this.$route.query)
        });
      }
    }, acc), {}),

  methods: {
    pageQuery(query) {
      return _.defaults(query, this.$route.query);
    },
  },

  route: {
    activate() {
      _.each(URL_MAPPING, (mapping) =>
      this.$route.query[mapping.q] && this.$set(mapping.v, this.$route.query[mapping.q]));
    },
    data({ next }) {
      const query = this.$route.query;

      this
        .$router
        .app
        .loadPerformances(query)
        .then((performances) => _.extend({}, { performances }))
        .then((data) => next(data))
    }
  }
});

module.exports = Component;