import Home from './components/Home/Home.vue'
import ProductShowContent from './components/ProductShow/ProductShowContent.vue'
import AboutUs from './components/AboutUs/AboutUs.vue'

export default[
  {
    path:'/home',
    component:Home
    },
    {
      path:'/content',
      component:ProductShowContent
    },
    {
      path:'/aboutus',
      component:AboutUs
    },
    {
      path:'/*',
      component:Home
    }
]
