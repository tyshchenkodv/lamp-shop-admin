import axios from 'axios';
import { loadArticles } from "./loadArticles";

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_ERROR = 'UPDATE_ERROR';

export function updateArticle (formData, id) {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_REQUEST,
        });

        try {

            const response = await axios.put(process.env.REACT_APP_API_HOST + `/articles/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadArticles({
                type: UPDATE_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: UPDATE_ERROR,
            });
        }
    };
}
