import axios from 'axios';

export const LOAD_PURCHASES_REQUEST = 'LOAD_PURCHASES_REQUEST';
export const LOAD_PURCHASES_SUCCESS = 'LOAD_PURCHASES_SUCCESS';
export const LOAD_PURCHASES_ERROR = 'LOAD_PURCHASES_ERROR';

export function loadPurchases (id) {
    return async function (dispatch) {
        dispatch({
            type: LOAD_PURCHASES_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + `/dss/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': window.localStorage.getItem('access_token'),
                }
            });

            return dispatch({
                type: LOAD_PURCHASES_SUCCESS,
                data: response.data.item,
            });
        } catch {
            return dispatch({
                type: LOAD_PURCHASES_ERROR,
            });
        }
    };
}
