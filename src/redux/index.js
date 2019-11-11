import { createStore, applyMiddleware, compose, combineReducers, } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks/index';

const rootReducer = combineReducers(reducers)

export default function configureStore(initialState) {
  let enhancer
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  if (process.env.NODE_ENV !== 'development') {
    enhancer = compose(applyMiddleware(thunk))
  } else {
    enhancer = composeEnhancers(applyMiddleware(thunk))
  }

  const store = createStore(rootReducer, initialState, enhancer)

  // // Enable Webpack hot module replacement for reducers
  // if (module.hot) {
  //   module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default))
  // }

  return store
}
