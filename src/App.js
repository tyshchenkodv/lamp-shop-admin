import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopBar from './components/TopBar';
import MenuSidebar from "./components/MenuSidebar";

import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";

export default class App extends PureComponent {
    render() {
        return (
            <>
                <BrowserRouter>
                    <TopBar/>
                    <MenuSidebar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/comments" component={Comments}/>
                        <Route exact path="/orders" component={Orders}/>
                        <Route exact path="/addproduct" component={AddProduct}/>
                    </Switch>
                </BrowserRouter>
            </>
        );
    };
}
