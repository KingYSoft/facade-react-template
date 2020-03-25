import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { RouteNodeType } from './types/routes';

const RouteMap = (routes: RouteNodeType[]): JSX.Element[] => {
  //判断用户是否登录以及是否需要验证
  const isLogin = (item: RouteNodeType): JSX.Element => {
    return <item.component />;
    // if (item.path !== "/login" && item.meta.requiredAuth) {
    //   if (Cookies.get("token")) {
    //     return <item.component />;
    //   } else {
    //     return <Redirect to="/login" />;
    //   }
    // } else {
    //   return <item.component />;
    // }
  };
  //遍历子路由配置，为每个元素绑定自己的路由路径
  const childrenMap = (childNodes: RouteNodeType): JSX.Element => {
    return (
      <Route
        path={childNodes.path}
        key={childNodes.key}
        render={(): JSX.Element => (
          <Switch>
            {childNodes.children.map((child: RouteNodeType) => (
              <Route
                path={child.path}
                key={child.key}
                render={(): JSX.Element => {
                  if (child.children) {
                    return childrenMap(child);
                  } else {
                    return isLogin(child);
                  }
                }}
              />
            ))}
            <Redirect to={childNodes.children[0].path} />
          </Switch>
        )}
      />
    );
  };
  //遍历外层路由，判断是否有子路由，以及绑定各自特定的信息
  return routes.map(item => {
    if (item.children && item.children.length > 0) {
      return childrenMap(item);
    } else {
      return (
        <Route
          path={item.path}
          key={item.path}
          render={(): JSX.Element => {
            return isLogin(item);
          }}
        />
      );
    }
  });
};

export default RouteMap;
