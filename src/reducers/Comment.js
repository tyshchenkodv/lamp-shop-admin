import {
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_ERROR,
} from '../actions/loadComments';

export const INITIAL_STATE = {
    list: [],
    loading: false,
};

export default function Comment (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_COMMENTS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });

        case LOAD_COMMENTS_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
