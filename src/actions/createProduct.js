import axios from 'axios';
import { loadProducts } from "./loadProducts";

export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR';

export function createProduct (formData) {
    return async function (dispatch) {
        dispatch({
            type: CREATE_PRODUCT_REQUEST,
        });

        try {

            const response = await axios.post(process.env.REACT_APP_API_HOST + '/products',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadProducts({
                type: CREATE_PRODUCT_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: CREATE_PRODUCT_ERROR,
            });
        }
    };
}
