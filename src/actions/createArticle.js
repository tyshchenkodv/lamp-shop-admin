import axios from 'axios';
import { loadArticles } from "./loadArticles";

export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_ERROR = 'CREATE_ERROR';

export function createArticle (formData) {
    return async function (dispatch) {
        dispatch({
            type: CREATE_REQUEST,
        });

        try {

            const response = await axios.post(process.env.REACT_APP_API_HOST + '/articles',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'access_token': window.localStorage.getItem('access_token'),
                    }
                },
            );

            return dispatch(loadArticles({
                type: CREATE_SUCCESS,
                data: response.data,
            }));
        } catch {
            return dispatch({
                type: CREATE_ERROR,
            });
        }
    };
}
