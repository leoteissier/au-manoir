import { createRouter, createWebHistory } from 'vue-router'
import BibliothequeView from "@/views/BibliothequeView.vue";
import BureauView from "@/views/BureauView.vue";
import CuisineView from "@/views/CuisineView.vue";
import HallView from "@/views/HallView.vue";
import Salle_a_mangerView from "@/views/Salle_a_mangerView.vue";
import Salle_de_bainView from "@/views/Salle_de_bainView.vue";
import Salle_de_jeuView from "@/views/Salle_de_jeuView.vue";
import SalonView from "@/views/SalonView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bibliotheque',
      name: 'Bibliotheque',
      component: BibliothequeView
    },
    {
      path: '/bureau',
      name: 'Bureau',
      component: BureauView
    },
    {
      path: '/cuisine',
      name: 'Cuisine',
      component: CuisineView
    },
    {
      path: '/',
      name: 'Hall',
      component: HallView
    },
    {
      path: '/salle-a-manger',
      name: 'Salle à manger',
      component: Salle_a_mangerView
    },
    {
      path: '/salle-de-bain',
      name: 'Salle de bain',
      component: Salle_de_bainView
    },
    {
      path: '/salle-de-jeu',
      name: 'Salle de jeu',
      component: Salle_de_jeuView
    },
    {
      path: '/salon',
      name: 'Salon',
      component: SalonView
    }
  ]
})

export default router
