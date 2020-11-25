import axios from 'axios';

export const LOAD_CATEGORIES_REQUEST = 'LOAD_CATEGORIES_REQUEST';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_ERROR = 'LOAD_CATEGORIES_ERROR';

export function loadCategories () {
    return async function (dispatch) {
        dispatch({
            type: LOAD_CATEGORIES_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + '/categories');

            return dispatch({
                type: LOAD_CATEGORIES_SUCCESS,
                data: response.data.data,
            });
        } catch {
            return dispatch({
                type: LOAD_CATEGORIES_ERROR,
            });
        }
    };
}
