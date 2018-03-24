import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import PatriciaMachado from '@/components/PatriciaMachado';
import Contato from '@/components/Contato';
import Contador from '@/components/Contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/sobre',
      name: 'PatriciaMachado',
      component: PatriciaMachado,
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato,
    },
    {
      path: '/contador',
      name: 'Contador',
      component: Contador,
    },
  ],
});
