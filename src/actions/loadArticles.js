import axios from 'axios';

export const LOAD_ARTICLES_REQUEST = 'LOAD_ARTICLES_REQUEST';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

export function loadArticles () {
    return async function (dispatch) {
        dispatch({
            type: LOAD_ARTICLES_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + '/articles');

            return dispatch({
                type: LOAD_ARTICLES_SUCCESS,
                data: response.data,
            });
        } catch {
            return dispatch({
                type: LOAD_ARTICLES_ERROR,
            });
        }
    };
}
