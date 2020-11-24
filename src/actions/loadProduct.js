import axios from 'axios';

export const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST';
export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCT_ERROR = 'LOAD_PRODUCT_ERROR';

export function loadProduct (id) {
    return async function (dispatch) {
        dispatch({
            type: LOAD_PRODUCT_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + `/products/${id}`);

            return dispatch({
                type: LOAD_PRODUCT_SUCCESS,
                data: response.data.item,
            });
        } catch {
            return dispatch({
                type: LOAD_PRODUCT_ERROR,
            });
        }
    };
}
