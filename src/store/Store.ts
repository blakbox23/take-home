import createSagaMiddleware from '@redux-saga/core'
import agentsReducer from './Reducers/agentsReducer';
import {createStore, applyMiddleware} from 'redux'
import rootSaga from './Sagas/rootSaga'
import rootReducer from './Reducers/rootReducer';
// import logger from "redux-logger";

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(rootSaga)


export default store