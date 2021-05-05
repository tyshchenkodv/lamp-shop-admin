import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_ERROR,
} from "../actions/loadCategories";

export const INITIAL_STATE = {
    list: [],
    loading: false,
};

export default function Category (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_CATEGORIES_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOAD_CATEGORIES_SUCCESS:
            return Object.assign({}, state, {
                list: action.data,
                loading: false,
            });

        case LOAD_CATEGORIES_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
