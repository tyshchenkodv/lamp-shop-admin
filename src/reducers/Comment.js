import {
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_ERROR,
} from '../actions/loadComments';

import {
    APPLY_COMMENT_REQUEST,
    APPLY_COMMENT_SUCCESS,
    APPLY_COMMENT_ERROR,
} from '../actions/applyComment';

import {
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_ERROR,
} from '../actions/deleteComment';

export const INITIAL_STATE = {
    list: [],
    loading: false,
};

export default function Comment (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_COMMENTS_REQUEST:
        case APPLY_COMMENT_REQUEST:
        case DELETE_COMMENT_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });

        case APPLY_COMMENT_SUCCESS:
        case DELETE_COMMENT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });

        case LOAD_COMMENTS_ERROR:
        case APPLY_COMMENT_ERROR:
        case DELETE_COMMENT_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
