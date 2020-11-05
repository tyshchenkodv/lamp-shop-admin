import {
    LOAD_ARTICLES_REQUEST,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_ERROR,
} from '../actions/loadArticles';

import {
    LOAD_ARTICLE_REQUEST,
    LOAD_ARTICLE_SUCCESS,
    LOAD_ARTICLE_ERROR,
} from '../actions/loadArticle';

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

import {
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_ERROR,
} from '../actions/deleteArticle';

export const INITIAL_STATE = {
    item: {},
    list: [],
    loading: false,
};

export default function Article (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_ARTICLES_REQUEST:
        case LOAD_ARTICLE_REQUEST:
        case CREATE_REQUEST:
        case UPDATE_REQUEST:
        case DELETE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_ARTICLES_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });

        case LOAD_ARTICLE_SUCCESS:
            return Object.assign({}, state, {
                item: action.data,
                loading: false,
            });
        
        case CREATE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });

        case UPDATE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });

        case DELETE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });

        case LOAD_ARTICLES_ERROR:
        case LOAD_ARTICLE_ERROR:
        case CREATE_ERROR:
        case UPDATE_ERROR:
        case DELETE_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
