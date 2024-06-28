import { createRouter, createWebHistory } from 'vue-router'
import BlurGallery from './../components/BlurGallery.vue'
import GrayBlur from './../components/GrayBlur.vue'
import GrayGallery from './../components/GrayGallery.vue'
import ImageGallery from './../components/ImageGallery.vue'
import ImagesShow from './../components/ImagesShow.vue'




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {
      path: '/',
      name: 'ImagesShow',
      component: ImagesShow,
    },
    {
      path: '/colour',
      name: 'ImageGallery',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ImageGallery,
    },
    {
      path:'/gray',
      name:'GrayGallery',
      component:GrayGallery,
    },
    {
      path:'/blur',
      name:'BlurGallery',
      component: BlurGallery,
    },
    {
      path:'/gray',
      name:'GrayGallery',
      component: GrayGallery,
    },
    {
      path:'/gray/blur',
      name:'GrayBlur',
      component: GrayBlur,
    }
    
  ]
  
})

export default router
