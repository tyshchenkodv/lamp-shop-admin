import React, { PureComponent } from 'react';
import CommentsList from "../CommentsList";
import OrdersList from "../OrdersList";

export default class TopBar extends PureComponent {
    render() {
        return (
            <header className='header-desktop'>
                <div className='section__content section__content--p30'>
                    <div className='container-fluid'>
                        <div className='header-wrap'>
                            <CommentsList/>
                            <OrdersList/>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}
