import {
    applyMiddleware,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './../src/reducers';

export default createStore(
    createRootReducer(),
    {},
    applyMiddleware(
        thunk,
    ),
);