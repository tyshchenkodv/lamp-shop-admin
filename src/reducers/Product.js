import {
    LOAD_PRODUCTS_REQUEST,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
} from '../actions/loadProducts';

import {
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
} from '../actions/deleteProduct';

import {
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_ERROR,
} from "../actions/createProduct";

import {
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR,
} from "../actions/updateProduct";

import {
    LOAD_PRODUCT_REQUEST,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_ERROR,
} from "../actions/loadProduct";

export const INITIAL_STATE = {
    item: {},
    list: [],
    loading: false,
};

export default function Product (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
        case DELETE_PRODUCT_REQUEST:
        case CREATE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
        case LOAD_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });

        case LOAD_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                item: action.data,
                loading: false,
            });

        case DELETE_PRODUCT_SUCCESS:
        case CREATE_PRODUCT_SUCCESS:
        case UPDATE_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });

        case LOAD_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
        case CREATE_PRODUCT_ERROR:
        case UPDATE_PRODUCT_ERROR:
        case LOAD_PRODUCT_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
