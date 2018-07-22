import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

Vue.use(Router);

// find the routes.ts for each section
const requireRoutes = require.context(
  '@/views',
  true,
  /routes.ts$/
);

// load all routes in dynamically
const routes = requireRoutes.keys().map(key => requireRoutes(key).default) as RouteConfig[];

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});
