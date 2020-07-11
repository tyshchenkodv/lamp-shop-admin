import React, { PureComponent } from "react";
import { NavLink } from 'react-router-dom';
import MenuLogo from "./MenuLogo";
import logo from './../../styles/images/icon/logo.png';

export default class MenuSidebar extends PureComponent{
    render() {
        return(
            <aside className="menu-sidebar d-none d-lg-block">
                <MenuLogo logo={logo}/>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
                            <li>
                                <NavLink exact to="/">
                                    <i className="zmdi zmdi-view-dashboard"/>Главная</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/orders">
                                    <i className="zmdi zmdi-card"/>Заказы</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/comments">
                                    <i className="zmdi zmdi-comment-more"/>Комментарии</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/products">
                                    <i className="zmdi zmdi-archive"/>Товары</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    };
}
