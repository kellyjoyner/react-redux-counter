import { combineReducers } from 'redux';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './components/counter/actions';

function value(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

const reducer = combineReducers({
  value
});

export default reducer;