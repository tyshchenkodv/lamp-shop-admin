import React, { PureComponent } from "react";
import cx from "classnames";

export default class UserDropdown extends PureComponent {
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
        const { user, logout } = this.props;

        return(
            <div className="account-wrap">
                <div className={cx("account-item clearfix js-item-menu", {"show-dropdown":this.state.open})}>
                    <div className="content">
                        <a className="js-acc-btn" onClick={ this.toggle } ref={ this.setButtonRef }>{ user.firstName }</a>
                    </div>
                    <div className="account-dropdown js-dropdown" ref={ this.setWrapperRef }>
                        <div className="info clearfix">
                            <div className="content">
                                <h5 className="name">
                                    <a href="#">{ user.firstName }</a>
                                </h5>
                                <span className="email">{ user.email }</span>
                            </div>
                        </div>
                        <div className="account-dropdown__body">
                            <div className="account-dropdown__item">
                                <a href="#">
                                    <i className="zmdi zmdi-account"/>Account</a>
                            </div>
                            <div className="account-dropdown__item">
                                <a href="#">
                                    <i className="zmdi zmdi-settings"/>Setting</a>
                            </div>
                        </div>
                        <div className="account-dropdown__footer">
                            <button type="button" onClick={ logout }>
                                <i className="zmdi zmdi-power"/>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
