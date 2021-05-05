import axios from 'axios';

export const DOWNLOAD_FILE_REQUEST = 'DOWNLOAD_FILE_REQUEST';
export const DOWNLOAD_FILE_SUCCESS = 'DOWNLOAD_FILE_SUCCESS';
export const DOWNLOAD_FILE_ERROR = 'DOWNLOAD_FILE_ERROR';

export function downloadInvoice (product) {
    return async function (dispatch) {
        dispatch({
            type: DOWNLOAD_FILE_REQUEST,
        });

        try {

            const response = await axios.put(process.env.REACT_APP_API_HOST + `/generateInvoice`,
                product,
                {
                    headers: {
                        'access_token': window.localStorage.getItem('access_token'),
                    },
                    responseType: 'blob',
                },
            );

            const url = window.URL.createObjectURL(new Blob([response.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'output.docx'); //or any other extension
            document.body.appendChild(link);
            link.click();

            return dispatch({
                type: DOWNLOAD_FILE_SUCCESS,
            });
        } catch {
            return dispatch({
                type: DOWNLOAD_FILE_ERROR,
            });
        }
    };
}
