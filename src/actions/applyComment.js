import axios from 'axios';
import { loadComments } from './loadComments';

export const APPLY_COMMENT_REQUEST = 'APPLY_COMMENT_REQUEST';
export const APPLY_COMMENT_SUCCESS = 'APPLY_COMMENT_SUCCESS';
export const APPLY_COMMENT_ERROR = 'APPLY_COMMENT_ERROR';

export function applyComment (comment) {
    return async function (dispatch) {
        dispatch({
            type: APPLY_COMMENT_REQUEST,
        });

        try {

            const response = await axios.put(process.env.REACT_APP_API_HOST + `/comments/${comment.id}`,
                comment,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadComments({
                type: APPLY_COMMENT_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: APPLY_COMMENT_ERROR,
            });
        }
    };
}
