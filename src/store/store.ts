import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


// import {persistStore, persistReducer} from 'redux-persist'
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage'
// import createSagaMiddleware from 'redux-saga'
// import {rootSaga} from './root-saga'

import { rootReducer } from './root-reducer';

// const sagaMiddleware = createSagaMiddleware();


const middleWares:any = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer = (process.env.ENV_ENV !== 'production'
//   && window
//   && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const persistConfig = {
//   key: 'root',
//   storage,
//   //we do not want our user to persist
//   blacklist: ['user']
// };


// const persistedReducer = persistReducer(persistConfig, rootReducer);
// //use middleware only if  in production


// // user redux tools only if we are in production

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch