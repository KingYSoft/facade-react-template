import { ModifyAction } from '../actions/counter';
import { DECREMENT, INCREMENT } from '../constants/counter';
import { NumStore, INITIAL_STATE } from '../types/counter';

export default (state: NumStore = INITIAL_STATE, action: ModifyAction): NumStore => {
  // console.log(state, action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        num: state.num + 1
      };
    case DECREMENT:
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return INITIAL_STATE;
  }
};
