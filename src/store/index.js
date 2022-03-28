import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import root from "../reducers";
import sagas from "../sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  root,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

export default store;
