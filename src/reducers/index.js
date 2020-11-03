import { combineReducers } from 'redux';

import Auth from './auth';
import Article from "./Article";

export default () => combineReducers({
    auth: Auth,
    article: Article,
});
