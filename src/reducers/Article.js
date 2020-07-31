import {
    LOAD_ARTICLES_REQUEST,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_ERROR,
} from '../actions/loadArticles';

import {
    CREATE_REQUEST,
    CREATE_SUCCESS,
    CREATE_ERROR,
} from '../actions/createArticle';

import {
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
} from '../actions/updateArticle';

export const INITIAL_STATE = {
    loading: false,
};

export default function Article (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_ARTICLES_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_ARTICLES_SUCCESS:{
            return Object.assign({}, state, {
                loading: false,
            });
        }

        case LOAD_ARTICLES_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        case CREATE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case CREATE_SUCCESS:{
            return Object.assign({}, state, {
                loading: false,
            });
        }

        case CREATE_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        case UPDATE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case UPDATE_SUCCESS:{
            return Object.assign({}, state, {
                loading: false,
            });
        }

        case UPDATE_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
