import {
    LOAD_ORDERS_REQUEST,
    LOAD_ORDERS_SUCCESS,
    LOAD_ORDERS_ERROR,
} from "../actions/loadOrders";

import {
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_ERROR,
} from "../actions/updateOrder";

export const INITIAL_STATE = {
    list: [],
    loading: false,
};

export default function Order (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_ORDERS_REQUEST:
        case UPDATE_ORDER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_ORDERS_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });

        case UPDATE_ORDER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });

        case LOAD_ORDERS_ERROR:
        case UPDATE_ORDER_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
