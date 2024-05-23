import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MyPageView from '@/views/MyPageView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import GenreDetailView from '@/views/GenreDetailView.vue'
import GroupView from '@/views/GroupView.vue'
import GroupCreateView from '@/views/GroupCreateView.vue'
import GroupDetailView from '@/views/GroupDetailView.vue'
import GroupManagementView from '@/views/GroupManagementView.vue'
import SearchView from '@/views/SearchView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile/:username',
      name: 'mypage',
      component: MyPageView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:movieId',
      name: 'movieDetail',
      component: MovieDetailView
    },
    {
      path: '/genre/:genreId',
      name: 'genreDetail',
      component: GenreDetailView
    },
    {
      path: '/group',
      name: 'group',
      component: GroupView,
    },
    {
      path: '/group/:groupId',
      name: 'groupDetail',
      component: GroupDetailView
    },
    {
      path: '/group/:groupId/groupManagement',
      name: 'groupManageMent',
      component: GroupManagementView
    },
    {
      path: '/groupcreate',
      name: 'group-create',
      component: GroupCreateView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }

  ]
})

export default router
