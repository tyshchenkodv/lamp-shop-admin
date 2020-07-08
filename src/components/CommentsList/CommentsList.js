import React, { PureComponent } from "react";
import CommentMessage from "./CommentMessage";
import cx from 'classnames';
import { CommentLengthSuffix } from "./../../utils";

const COMMENTS = [
    {
        name: 'Michelle Moreno',
        message: 'Have sent a photo',
        date: '2020-07-08 23:51',
    },
    {
        name: 'Diane Myers',
        message: 'You are now connected on message',
        date: '2020-07-06 13:20',
    },
];

export default class CommentsList extends PureComponent {
    state = {
        open: false,
    };

    componentDidMount () {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount () {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    setButtonRef = (node) => {
        this.buttonRef = node;
    };

    handleClickOutside = (event) => {
        if (this.wrapperRef && this.buttonRef && !this.wrapperRef.contains(event.target) && !this.buttonRef.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    toggle = () => {
        this.setState(({ open }) => ({
            open: !open,
        }));
    };

    render() {
        return (
            <>
                <div className={cx("noti__item js-item-menu", {"show-dropdown":this.state.open})}>
                    <button onClick={ this.toggle } ref={ this.setButtonRef }>
                        <i className="zmdi zmdi-comment-more"/>
                    </button>
                    { COMMENTS.length > 0 && <span className="quantity">{COMMENTS.length}</span> }
                    <div className="mess-dropdown js-dropdown" ref={ this.setWrapperRef }>
                        <div className="mess__title">
                            <p>{ CommentLengthSuffix(COMMENTS.length) }</p>
                        </div>
                        {COMMENTS.map((comment, index) => (
                            <CommentMessage key={ index } comment={ comment } />
                        ))}
                    </div>
                </div>
            </>
        );
    };
}