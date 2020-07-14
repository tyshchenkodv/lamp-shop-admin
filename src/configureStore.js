import {
    applyMiddleware,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createRootReducer from './reducers';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from './reducers/auth';

const startup = () => {
    let initialState = {
        auth: AUTH_INITIAL_STATE,
    };

    const token = localStorage.getItem('access_token');

    if (token) {
        const user = jwt.decode(token);

        initialState.auth = {
            ...initialState.auth,
            ...{
                token,
                isLoggedIn: true,
                user,
            },
        };
    }

    return initialState;
};

let preloadedState = startup();

export default createStore(
    createRootReducer(),
    preloadedState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
        ),
    ),
);