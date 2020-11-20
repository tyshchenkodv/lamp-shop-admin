import axios from 'axios';

export const APPLY_COMMENT_REQUEST = 'APPLY_COMMENT_REQUEST';
export const APPLY_COMMENT_SUCCESS = 'APPLY_COMMENT_SUCCESS';
export const APPLY_COMMENT_ERROR = 'APPLY_COMMENT_ERROR';

export function applyComment () {
    return async function (dispatch) {
        dispatch({
            type: APPLY_COMMENT_REQUEST,
        });

        try {

            const response = await axios.get(process.env.REACT_APP_API_HOST + '/comments');

            return dispatch({
                type: APPLY_COMMENT_SUCCESS,
                data: response.data.data,
            });
        } catch {
            return dispatch({
                type: APPLY_COMMENT_ERROR,
            });
        }
    };
}
