import {createStore, applyMiddleware} from 'redux';

const middleware1 = store => next => action => {
  const result = next(action);
  return result;
}

const middleware2 = store => next => action => {
  const result = next(action);
  return result;
}

const myReducer = (state, action) => {
  return state;
}

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({type: 'someAction'});
