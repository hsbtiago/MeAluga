import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home/Home.vue";
import Imoveis from "./components/Imoveis/Imoveis.vue";
import ImoveisNew from "./components/Imoveis/ImoveisNew.vue";
import Locatarios from "./components/Locatarios/Locatarios.vue";

Vue.use(VueRouter);

const routes = [  
    { path: '', component: Home, meta:{title: 'Início'}},  
    { path: '/imoveis', component: Imoveis, meta:{title: 'Imóveis'}},      
    { path: '/imoveis/new', component: ImoveisNew, meta:{title: 'Novo Imóvel'}},      
    { path: '/locatarios', component: Locatarios, meta:{title: 'Locatários'}}
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes  
});

