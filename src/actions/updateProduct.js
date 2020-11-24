import axios from 'axios';
import { loadProducts } from "./loadProducts";

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR';

export function updateProduct (formData, id) {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_PRODUCT_REQUEST,
        });

        try {

            const response = await axios.put(process.env.REACT_APP_API_HOST + `/products/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadProducts({
                type: UPDATE_PRODUCT_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: UPDATE_PRODUCT_ERROR,
            });
        }
    };
}
