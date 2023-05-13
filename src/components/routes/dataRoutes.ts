import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";

export const routes = [
  {
    path: '/',
    component: Home,
    auth: true
  },
  {
    path: '/about-us',
    component: AboutUs,
    auth: true
  },
  {
    path: '/contacts',
    component: Home,
    auth: true
  }
]
