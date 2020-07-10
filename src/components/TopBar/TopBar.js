import React, { PureComponent } from 'react';
import CommentsList from "../CommentsList";
import UserDropdown from "../UserDropdown";

export default class TopBar extends PureComponent {
    render() {
        return (
            <header className='header-desktop'>
                <div className='section__content section__content--p30'>
                    <div className='container-fluid'>
                        <div className='header-wrap'>
                            <CommentsList/>
                            <UserDropdown/>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}
