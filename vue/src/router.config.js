import Home from './components/Home/Home.vue'
import ProductShowContent from './components/ProductShow/ProductShowContent.vue'

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
      path:'/*',
      component:Home
    }
]
