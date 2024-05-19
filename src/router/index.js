import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MyPageView from '@/views/MyPageView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import PreferenceSurveyView from '@/views/PreferenceSurveyView.vue'
import GenreDetailView from '@/views/GenreDetailView.vue'
import GroupView from '@/views/GroupView.vue'
import GroupCreateView from '@/views/GroupCreateView.vue'
import GroupDetailView from '@/views/GroupDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPageView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/preferenceServey',
      name: 'preferenceservey',
      component: PreferenceSurveyView
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
      path: '/groupcreate',
      name: 'group-create',
      component: GroupCreateView
    }

  ]
})

export default router
