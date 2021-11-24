import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';


import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const midlewares = [ sagaMiddleware];

if (process.env.NODE_ENV === 'development'){
    midlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...midlewares));

sagaMiddleware.run(rootSaga);

export const persistor =  persistStore(store);

