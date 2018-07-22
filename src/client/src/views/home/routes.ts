export default {
  path: '/',
  component: () => import(/* webpackChunkName: "home" */ './Home.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './Index.vue')
    },
    {
      path: 'about',
      name: 'home.about',
      component: () => import(/* webpackChunkName: "home" */ './About.vue')
    }
  ]
};
