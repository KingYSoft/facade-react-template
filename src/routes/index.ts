import { Home } from '../pages';
import { RouteNodeType } from './types/routes';

export const LayoutRoutes: RouteNodeType[] = [
  {
    path: '/home',
    component: Home,
    meta: {
      flag: true,
      requiredAuth: true
    },
    key: 'home',
    icon: '',
    text: '主页',
    children: []
  }
];

export const NoLayoutRoutes: RouteNodeType[] = [
  // {
  //   path: '/login',
  //   component: Login,
  //   meta: {}
  // }
];

export const RouteConfig = LayoutRoutes.concat(NoLayoutRoutes);
