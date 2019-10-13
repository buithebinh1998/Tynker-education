import {applyMiddleware,createStore,compose} from 'redux';

import rootReducer from './reducer';

const middleware  = [];

const enhancers = [applyMiddleware(...middleware)]

const getComposer = () => {
    if (process.env.NODE_ENV === 'production'){
        return compose
    }
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
const composer = getComposer()

export default (initialState = {}) => {
  const store = createStore(rootReducer, initialState, composer(...enhancers))
  return { store }
}