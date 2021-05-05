import { combineReducers } from 'redux';

import Auth from './auth';
import Article from "./Article";
import Comment from "./Comment";
import Product from "./Product";
import Category from "./Category";
import Order from "./Order";
import File from "./File";
import Purchase from "./Purchase";

export default () => combineReducers({
    auth: Auth,
    article: Article,
    comment: Comment,
    product: Product,
    category: Category,
    order: Order,
    file: File,
    purchase: Purchase,
});
