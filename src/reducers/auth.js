import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
} from '../actions/login';
import jwt from "jsonwebtoken";
import { auth } from "../config/config.json";

export const INITIAL_STATE = {
    user: {},
    isLoggedIn: false,
    loading: false,
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

            const decoded = jwt.verify(token, auth.secret);
            const user = {
                id: decoded.id,
                email: decoded.email,
                firstName: decoded.firstName,
            };

            console.log(user);

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
