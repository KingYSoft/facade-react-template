/* eslint-disable @typescript-eslint/no-explicit-any */
// import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import myMiddleware from "./middleware";

// 添加中间件和调试工具
// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [thunk];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
// sagaMiddleware.run(mainSaga);

export default store;
