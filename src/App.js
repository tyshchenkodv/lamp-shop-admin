import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import TopBar from './components/TopBar';
import MenuSidebar from "./components/MenuSidebar";

import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Articles from "./pages/ArticlesList";
import ArticlesItem from "./pages/ArticlesItem";
import { logout } from "./actions/login";
import { loadComments } from "./actions/loadComments";

class App extends PureComponent {
    checkAuth = () => {
        const { isLoggedIn, location: { pathname }, history } = this.props;

        if (!isLoggedIn && pathname !== '/login') {
            history.push('/login');
        } else if (isLoggedIn && pathname === '/login') {
            history.push('/');
        }
    }

    componentDidMount() {
        this.checkAuth();
        this.props.loadComments();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkAuth();
    }

    render() {
        const { isLoggedIn, user, logout, comments } = this.props;
        const newComments = comments.filter((comment) => comment.processed === 'new');
        return (
            <>
                {isLoggedIn && <TopBar user={ user } logout={ logout } comments={ newComments }/>}
                {isLoggedIn && <MenuSidebar/>}
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/comments" component={ Comments }/>
                    <Route exact path="/orders" component={ Orders }/>
                    <Route exact path="/products" component={ Products }/>
                    <Route exact path="/articles" component={ Articles }/>
                    <Route exact path="/articles/:id" component={ ArticlesItem }/>
                    <Route exact path="/login" component={ Login }/>
                </Switch>
            </>
        );
    };
}

export default withRouter(connect(
    (store) => ({
        isLoggedIn: store.auth.isLoggedIn,
        user: store.auth.user,
        comments: store.comment.list,
    }),
    (dispatch) => ({
        logout: () => dispatch(logout()),
        loadComments: () => dispatch(loadComments()),
    }),
)(App));
