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

export const INITIAL_STATE = {
    item: {},
    list: [],
    loading: false,
};

export default function Product (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
        case DELETE_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });

        case DELETE_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });

        case LOAD_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
