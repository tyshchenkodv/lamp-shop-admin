import axios from 'axios';

export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_ERROR = 'CREATE_ERROR';

export function createArticle (formData) {
    return async function (dispatch) {
        dispatch({
            type: CREATE_REQUEST,
        });

        try {
            const headers = {
                'Content-Type': 'multipart/form-data',
                'access_token': window.localStorage.getItem('access_token'),
            };
            const response = await axios.post(process.env.REACT_APP_API_HOST+'/articles',
                formData, {
                headers
                });

            return dispatch({
                type: CREATE_SUCCESS,
                data: response.data,
            });
        } catch {
            return dispatch({
                type: CREATE_ERROR,
            });
        }
    };
}
