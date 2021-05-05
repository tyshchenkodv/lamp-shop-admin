import axios from 'axios';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';

export function loadComments () {
    return async function (dispatch) {
        dispatch({
            type: LOAD_COMMENTS_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + '/comments');

            return dispatch({
                type: LOAD_COMMENTS_SUCCESS,
                data: response.data.data,
            });
        } catch {
            return dispatch({
                type: LOAD_COMMENTS_ERROR,
            });
        }
    };
}
