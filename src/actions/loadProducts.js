import axios from 'axios';

export const LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'LOAD_PRODUCTS_ERROR';

export function loadProducts () {
    return async function (dispatch) {
        dispatch({
            type: LOAD_PRODUCTS_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + '/products');

            return dispatch({
                type: LOAD_PRODUCTS_SUCCESS,
                data: response.data.data,
            });
        } catch {
            return dispatch({
                type: LOAD_PRODUCTS_ERROR,
            });
        }
    };
}
