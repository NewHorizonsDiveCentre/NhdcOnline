import DefaultEntry from '@/views/_global/DefaultEntry.vue';

export default {
  path: '/',
  component: DefaultEntry,
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
