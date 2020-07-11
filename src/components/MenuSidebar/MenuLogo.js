import React, { PureComponent } from "react";
import { NavLink } from 'react-router-dom';

export default class MenuSidebar extends PureComponent {
    render() {
        return (
            <div className="logo">
                <NavLink exact to="/">
                    <img src={this.props.logo} alt="Premium Svet"/>
                </NavLink>
            </div>
        );
    };
}