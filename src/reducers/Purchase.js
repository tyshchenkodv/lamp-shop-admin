import {
    LOAD_PURCHASES_SUCCESS,
    LOAD_PURCHASES_REQUEST,
    LOAD_PURCHASES_ERROR,
} from "../actions/loadPurchases";

export const INITIAL_STATE = {
    item: {},
    loading: false,
};

export default function Purchase (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_PURCHASES_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_PURCHASES_SUCCESS:
            return Object.assign({}, state, {
                item: action.data,
                loading: false,
            });
        case LOAD_PURCHASES_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
