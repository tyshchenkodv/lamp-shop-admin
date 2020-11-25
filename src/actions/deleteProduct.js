import axios from 'axios';
import { loadProducts } from './loadProducts';

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';

export function deleteProduct (id) {
    return async function (dispatch) {
        dispatch({
            type: DELETE_PRODUCT_REQUEST,
        });

        try {

            const response = await axios.delete(process.env.REACT_APP_API_HOST + `/products/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadProducts({
                type: DELETE_PRODUCT_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: DELETE_PRODUCT_ERROR,
            });
        }
    };
}
