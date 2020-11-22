import { combineReducers } from 'redux';

import Auth from './auth';
import Article from "./Article";
import Comment from "./Comment";
import Product from "./Product";

export default () => combineReducers({
    auth: Auth,
    article: Article,
    comment: Comment,
    product: Product,
});
