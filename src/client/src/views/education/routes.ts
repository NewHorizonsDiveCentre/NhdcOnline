import DefaultEntry from '@/views/_global/DefaultEntry.vue';

export default {
  path: '/education',
  component: DefaultEntry,
  children: [
    {
      path: '',
      name: 'edu',
      component: () => import(/* webpackChunkName: "edu" */ './Index.vue')
    }
  ]
};
