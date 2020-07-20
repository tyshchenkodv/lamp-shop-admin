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
import Articles from "./pages/Articles";
import { logout } from "./actions/login";

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
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkAuth();
    }

    render() {
        const { isLoggedIn, user, logout } = this.props;

        return (
            <>
                {isLoggedIn && <TopBar user={ user } logout={ logout }/>}
                {isLoggedIn && <MenuSidebar/>}
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/comments" component={ Comments }/>
                    <Route exact path="/orders" component={ Orders }/>
                    <Route exact path="/products" component={ Products }/>
                    <Route exact path="/articles" component={ Articles }/>
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
    }),
    (dispatch) => ({
        logout: () => dispatch(logout()),
    }),
)(App));
