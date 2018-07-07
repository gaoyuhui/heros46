
import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroList from '../views/heroes/List.vue';
import WeaponsList from '../views/weapons/List.vue';
import EqurpsList from '../views/equrps/List.vue';

import heroadd from '../views/heroes/add.vue';

import HeroEdit from '../views/heroes/Edit.vue';

import axios from 'axios';
Vue.use(VueRouter);
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        // {name: 'home', path: '/', redirect: '/heroes' },
        {name: 'home', path: '/', redirect: {name: 'heroes'} },
        {name: 'heroadd', path: '/heroes/add', component: heroadd},
        {name: 'weapons', path: '/weapons', component: WeaponsList},
        {name: 'equrps', path: '/equrps', component: EqurpsList},

        {name: 'heroes', path: '/heroes', component: HeroList},
        {name: 'heroedit', path: '/heroes/edit/:id', component: HeroEdit},
    ],

});

export default router;


