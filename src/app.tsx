import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.less';

import RouteMap from './routes/routeMap';
import { LayoutRoutes } from './routes/index';
import Wrapper from './layout/wrapper/wrapper';

interface PageStateProps {}

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

class App extends React.PureComponent<IProps, PageState> {
  public render(): JSX.Element {
    return (
      <Switch>
        <Wrapper>
          <Redirect from="/" to="/home" exact />
          {RouteMap(LayoutRoutes)}
        </Wrapper>
      </Switch>
    );
  }
}

// // 将 reducer 中的状态插入到组件的 props 中
// eslint-disable-next-line
const mapStateToProps = ({}: PageStateProps): PageStateProps => ({});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (): PageDispatchProps => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
