import React from 'react';
import { connect } from 'react-redux';

import './home.less';

import Counter from '../../components/counter/counter';

// redux props
interface PageStateProps {}
// redux actions
type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

class Home extends React.PureComponent<IProps, PageState> {
  public render(): JSX.Element {
    return (
      <div className="home">
        <Counter name="你好"></Counter>
      </div>
    );
  }
}

// 将 reducer 中的状态插入到组件的 props 中
// eslint-disable-next-line
const mapStateToProps = ({}: PageStateProps): PageStateProps => ({});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (): PageDispatchProps => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
