import axios from 'axios';
import {loadArticles} from "./loadArticles";

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export function deleteArticle (id) {
    return async function (dispatch) {
        dispatch({
            type: DELETE_REQUEST,
        });

        try {

            const responce = await axios.delete(process.env.REACT_APP_API_HOST + `/articles/${id}`,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                });

            return dispatch(loadArticles({
                type: DELETE_SUCCESS,
                data: responce.data,
            }));
        } catch {
            return dispatch({
                type: DELETE_ERROR,
            });
        }
    };
}
