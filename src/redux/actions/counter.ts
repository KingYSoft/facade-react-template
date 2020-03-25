import { Dispatch } from 'redux';
import { INCREMENT, DECREMENT } from '../constants/counter';

export interface ActionINCREMENT {
  type: string;
}

export interface ActionDECREMENT {
  type: string;
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = ActionINCREMENT | ActionDECREMENT;

// 增加 state 次数的方法
export const increment = (): ActionINCREMENT => ({
  type: INCREMENT
});

// 减少 state 次数的方法
export const decrement = (): ActionDECREMENT => ({
  type: DECREMENT
});

// 异步 减少 state 次数的方法
export const decrementAsync = () => (dispatch: Dispatch): void => {
  setTimeout(() => {
    dispatch(decrement());
  }, 1000);
};
