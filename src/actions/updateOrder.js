import axios from 'axios';
import { loadOrders } from "./loadOrders";

export const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST';
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_ERROR = 'UPDATE_ORDER_ERROR';

export function updateOrder (order, id) {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_ORDER_REQUEST,
        });

        try {

            const response = await axios.put(process.env.REACT_APP_API_HOST + `/orders/${id}`,
                order,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadOrders({
                type: UPDATE_ORDER_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: UPDATE_ORDER_ERROR,
            });
        }
    };
}
