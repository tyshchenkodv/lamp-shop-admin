import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function login (data) {
    return async function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        });

        try {
            const response = await axios.post(process.env.REACT_APP_API_HOST+'/login', data);

            return dispatch({
                type: LOGIN_SUCCESS,
                data: response.data,
            });
        } catch {
            return dispatch({
                type: LOGIN_ERROR,
            });
        }
    };
}

export function logout () {
    return async function (dispatch) {
        return dispatch({
            type: LOGOUT_SUCCESS,
        });
    }
}
