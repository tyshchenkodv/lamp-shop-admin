import { combineReducers } from 'redux';

import Auth from './auth';
import createArticle from "./createArticle";

export default () => combineReducers({
    auth: Auth,
    createArticle: createArticle,
});
