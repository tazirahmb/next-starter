import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { createWrapper } from 'next-redux-wrapper';

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : (f) => f
);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reduxInitState = (initialState) =>
  createStoreWithMiddleware(rootReducer, initialState, enhancers);

// eslint-disable-next-line no-unused-vars
const makeStore = (context) => reduxInitState();

export default createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
