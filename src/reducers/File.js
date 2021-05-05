import {
    DOWNLOAD_FILE_REQUEST,
    DOWNLOAD_FILE_SUCCESS,
    DOWNLOAD_FILE_ERROR,
} from "../actions/downloadInvoice";

export const INITIAL_STATE = {
    loading: false,
};

export default function File (state = INITIAL_STATE, action) {
    switch (action.type) {
        case DOWNLOAD_FILE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case DOWNLOAD_FILE_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });
        case DOWNLOAD_FILE_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
