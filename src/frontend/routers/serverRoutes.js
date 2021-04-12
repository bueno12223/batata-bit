import Home from '../pages/home';
import Login from '../pages/logIn';
import SingIn from '../pages/singIn';
import Landing from '../pages/landing';

const routes = [
  {
    exact:true,
    path: '/',
    component: Landing,
  },
  {
    exact:true,
    path: '/login',
    component: Login,
  },
  {
    exact:true,
    path: '/singin',
    component: SingIn,
  },
  {
    name: '/home',
    component: Home,
  },
];

export default routes;
