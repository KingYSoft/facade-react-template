/* eslint-disable @typescript-eslint/no-explicit-any */
import Loadable from 'react-loadable';

export interface RouteNodeMetaType {
  flag: boolean;
  requiredAuth: boolean;
}

export interface RouteNodeType {
  path: string;
  component: any; //(React.ComponentClass<{}, any> & Loadable.LoadableComponent) | (React.FunctionComponent<{}> & Loadable.LoadableComponent);
  meta: RouteNodeMetaType;
  key: string;
  icon: string;
  text: string;
  children: RouteNodeType[];
}
