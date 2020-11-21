import axios from 'axios';
import { loadComments } from './loadComments';

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';

export function deleteComment (id) {
    return async function (dispatch) {
        dispatch({
            type: DELETE_COMMENT_REQUEST,
        });

        try {

            const response = await axios.delete(process.env.REACT_APP_API_HOST + `/comments/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadComments({
                type: DELETE_COMMENT_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: DELETE_COMMENT_ERROR,
            });
        }
    };
}
