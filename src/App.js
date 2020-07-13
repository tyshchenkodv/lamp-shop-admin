import React, { PureComponent } from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import TopBar from './components/TopBar';
import MenuSidebar from "./components/MenuSidebar";

import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Login from "./pages/Login";

class App extends PureComponent {
    checkAuth = () => {
        const { isLoggedIn } = this.props;

        if (isLoggedIn === false) {
            //this.props.history.push('/login');
        }
    }

    componentDidMount() {
        this.checkAuth();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkAuth();
    }

    render() {
        const {isLoggedIn, user} = this.props;

        return (
            <>
                {isLoggedIn && <TopBar user={user}/>}
                {isLoggedIn && <MenuSidebar/>}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/comments" component={Comments}/>
                    <Route exact path="/orders" component={Orders}/>
                    <Route exact path="/products" component={Products}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </>
        );
    };
}

export default connect(
    (store) => ({
        isLoggedIn: store.auth.isLoggedIn,
        user: store.auth.user,
    }),
)(App);
