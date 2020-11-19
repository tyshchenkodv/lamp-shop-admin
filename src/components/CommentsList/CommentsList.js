import React, { PureComponent } from "react";
import CommentMessage from "./CommentMessage";
import cx from 'classnames';
import {CommentLengthSuffix, TimeSince} from "./../../utils";
import { NavLink } from "react-router-dom";

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
        const { comments } = this.props;
        return (
            <>
                <div className={cx("noti__item js-item-menu", {"show-dropdown":this.state.open})}>
                    <button onClick={ this.toggle } ref={ this.setButtonRef }>
                        <i className="zmdi zmdi-comment-more"/>
                    </button>
                    { comments.length > 0 && <span className="quantity">{comments.length}</span> }
                    <div className="mess-dropdown js-dropdown" ref={ this.setWrapperRef }>
                        <div className="mess__title">
                            <p>{ CommentLengthSuffix(comments.length) }</p>
                        </div>
                        {comments.map((comment, index) => (
                            <div className="mess__item">
                                <div className="content">
                                    <NavLink exact to="/comments" onClick={()=>this.toggle()}>
                                        <CommentMessage key={ index } comment={ comment } />
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };
}
