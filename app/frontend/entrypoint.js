'use strict';

const Vue       = require('vue');
const VueRouter = require('vue-router');

Vue.config.debug = false;

Vue.use(VueRouter);

const AppComponent  = require('./component/app/component');
const ListComponent = require('./component/list/component');

const router = new VueRouter(/*{ history: true }*/);

router.map({
  '/': {
    component: ListComponent,
    name:      'list'
  }
});

router.start(AppComponent, '#application');


