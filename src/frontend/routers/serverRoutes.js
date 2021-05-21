import Home from '../pages/home';
import SingUp from '../pages/singUp';
import Landing from '../pages/landing';
import logIn from '../pages/logIn';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: Landing,
    },
    {
      exact: true,
      path: '/log-in',
      component: isLogged ? Home : logIn,
    },
    {
      exact: true,
      path: '/sing-up',
      component: isLogged ? Home : SingUp,
    },
    {
      exact: true,
      path: '/home',
      component: isLogged ? Home : logIn,
    },
  ];
};

export default serverRoutes;
