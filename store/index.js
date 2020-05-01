import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './posts';

export const initializeStore = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware()));
};
