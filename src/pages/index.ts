import Loadable from 'react-loadable';
import Loading from './loading/loading';

export const Home = Loadable({
  loader: () => import('./home/home'),
  loading: Loading
});
