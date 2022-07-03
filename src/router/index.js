import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 퍼블리싱 인덱스, 샘플
  { path: '/', meta: { layout: 'None' }, component: () => import('@/views/Home.vue')  },
  { path: '/sample/component', meta: { layout: 'None' }, component: () => import('@/views/sample/Component.vue')  },
  { path: '/sample/form', meta: { layout: 'None' }, component: () => import('@/views/sample/Form.vue')  },

  // 로그인
  { path: '/login', meta: {layout: 'Default'}, component: () => import('@/views/Login.vue')},
  // 메인
  { path: '/main', meta: {layout: 'Main'}, component: () => import('@/views/Main.vue')},
  // 채용
  { path: '/culture', meta: {layout: 'Default' }, component: () => import('@/views/Culture.vue')},
  // 이용약관
  { path: '/terms', meta: {layout: 'Default' }, component: () => import('@/views/Terms.vue')},
  // 개인정보
  { path: '/privicy', meta: {layout: 'Default' }, component: () => import('@/views/Privicy.vue')},
  // 공고
  { path: '/disclosure', meta: {layout: 'Default' }, component: () => import('@/views/Disclosure.vue')},
  // 충전기 설치신청
  { path: '/charger-apply', meta: {layout: 'Default' }, component: () => import('@/views/ChargerApply.vue')},
  // 마이페이지
  { path: '/mypage-coper', meta: {layout: 'Default', user:'coper' }, component: () => import('@/views/Mypage.vue')},
  { path: '/mypage', meta: {layout: 'Default', user:'person' }, component: () => import('@/views/Mypage.vue')},
]

for(let i=0;i<routes.length;i++){
  if(routes[i].meta === undefined){
    routes[i].meta = {};
    routes[i].meta.layout = 'None';
  }else if(routes[i].meta.layout === undefined){
    routes[i].meta.layout = 'None';
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
