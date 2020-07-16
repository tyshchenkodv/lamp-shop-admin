import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
} from '../actions/login';
import jwt from "jsonwebtoken";

export const INITIAL_STATE = {
    loading: false,
    isLoggedIn: false,
    user: {},
    token: '',
};

export default function Auth (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOGIN_SUCCESS:{

            const token = action.data.token;

            window.localStorage.setItem('access_token', token);

            const decoded = jwt.verify(token, process.env.REACT_APP_AUTH_SECRET);
            const user = {
                id: decoded.id,
                email: decoded.email,
                firstName: decoded.firstName,
            };

            return Object.assign({}, state, {
                loading: false,
                isLoggedIn: true,
                user,
                token,
            });
        }

        case LOGIN_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        case LOGOUT_SUCCESS: {

            window.localStorage.removeItem('access_token');

            return Object.assign({}, state, {
                loading: false,
                isLoggedIn: false,
                user: {},
                token: '',
            });
        }

        default:
            return state;
    }
}
