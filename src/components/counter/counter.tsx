/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { connect } from 'react-redux';
import './counter.less';

import { decrement, increment, decrementAsync } from '../../redux/actions/counter';
import { NumStore } from '../../redux/types/counter';

interface PageStateProps {
  counter: NumStore;
}

type PageDispatchProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  onDecrementAsync: () => any;
};

type PageOwnProps = {
  name: string;
};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.PureComponent<IProps, PageState> {
  public render(): JSX.Element {
    const { name, counter, onIncrement, onDecrement, onDecrementAsync } = this.props;

    return (
      <p>
        {name} Clicked: {counter.num} times
        <br />
        <br />
        <button onClick={onIncrement} style={{ marginRight: 20 }}>
          +
        </button>
        <button onClick={onDecrement} style={{ marginRight: 20 }}>
          -
        </button>
        <button onClick={onDecrementAsync}>异步减</button>
      </p>
    );
  }
}

// // 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = ({ counter }: PageStateProps) => ({
  counter: counter
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: any) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment()),
  onDecrementAsync: () => dispatch(decrementAsync())
});
// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
