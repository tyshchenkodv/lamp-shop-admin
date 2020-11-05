import axios from 'axios';

export const LOAD_ARTICLE_REQUEST = 'LOAD_ARTICLE_REQUEST';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_ERROR = 'LOAD_ARTICLE_ERROR';

export function loadArticle (id) {
    return async function (dispatch) {
        dispatch({
            type: LOAD_ARTICLE_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + `/articles/${id}`);

            return dispatch({
                type: LOAD_ARTICLE_SUCCESS,
                data: response.data.item,
            });
        } catch {
            return dispatch({
                type: LOAD_ARTICLE_ERROR,
            });
        }
    };
}
