import { compose, createStore, applyMiddleware } from 'redux';
import {persistStore, persistReducer} from 'redux-persist'
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer';


const persistConfig = {
  key: 'root',
  storage,
  //we do not want our user to persist
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
//use middleware only if  in production
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

// user redux tools only if we are in production
const composeEnhancer = (process.env.ENV_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose



const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store);