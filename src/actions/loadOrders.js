import axios from 'axios';

export const LOAD_ORDERS_REQUEST = 'LOAD_ORDERS_REQUEST';
export const LOAD_ORDERS_SUCCESS = 'LOAD_ORDERS_SUCCESS';
export const LOAD_ORDERS_ERROR = 'LOAD_ORDERS_ERROR';

export function loadOrders () {
    return async function (dispatch) {
        dispatch({
            type: LOAD_ORDERS_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + '/orders');

            return dispatch({
                type: LOAD_ORDERS_SUCCESS,
                data: response.data.data,
            });
        } catch {
            return dispatch({
                type: LOAD_ORDERS_ERROR,
            });
        }
    };
}
