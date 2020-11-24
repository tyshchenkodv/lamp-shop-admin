import React, { PureComponent } from 'react';

import CommentsList from "../CommentsList";
import UserDropdown from "../UserDropdown";
import OrdersList from "../OrdersList";

export default class TopBar extends PureComponent {
    render() {
        const { user, logout, comments, orders } = this.props;

        return (
            <header className='header-desktop'>
                <div className='section__content section__content--p30'>
                    <div className='container-fluid'>
                        <div className='header-wrap'>
                            <div className='header-button'>
                                <div className='noti-wrap'>
                                    <CommentsList comments={ comments }/>
                                    <OrdersList orders={ orders }/>
                                    <UserDropdown user={ user } logout={ logout }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}
