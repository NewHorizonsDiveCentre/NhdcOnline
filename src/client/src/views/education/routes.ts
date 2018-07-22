export default {
  path: '/education',
  component: () => import(/* webpackChunkName: "edu" */ './Education.vue'),
  children: [
    {
      path: '',
      name: 'edu',
      component: () => import(/* webpackChunkName: "edu" */ './Index.vue')
    }
  ]
};
