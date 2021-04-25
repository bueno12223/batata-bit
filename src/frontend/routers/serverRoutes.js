import General from '../components/home/cards';

import Login from '../pages/logIn';
import SingUp from '../pages/singUp';
import Landing from '../pages/landing';

const routes = [
  {
    exact:true,
    path: '/',
    component: Landing,
  },
  {
    exact:true,
    path: '/log-in',
    component: Login,
  },
  {
    exact:true,
    path: '/sing-up',
    component: SingUp,
  },
  {
    exact:true,
    path: '/home',
    component: General,
  },
];

export default routes;
