import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './models/rootReducer';
import rootSaga from './models/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const enhacer = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(rootSaga);
export default store;
