import {
    CREATE_REQUEST,
    CREATE_SUCCESS,
    CREATE_ERROR,
} from '../actions/createArticle';

export const INITIAL_STATE = {
    loading: false,
};

export default function createArticle (state = INITIAL_STATE, action) {
    switch (action.type) {
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

        default:
            return state;
    }
}
