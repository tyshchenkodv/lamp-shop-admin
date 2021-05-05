import React, { PureComponent } from "react";
import cx from "classnames";
import OrderListItem from "./OrderListItem";
import {NavLink} from "react-router-dom";

export default class OrdersList extends PureComponent {
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
        const { orders } = this.props;
        return (
            <>
                <div className={cx("noti__item js-item-menu", {"show-dropdown":this.state.open})}>
                    <button onClick={ this.toggle } ref={ this.setButtonRef }>
                        <i className="zmdi zmdi-card"/>
                    </button>
                    { orders.length > 0 && <span className="quantity">{orders.length}</span> }
                    <div className="mess-dropdown js-dropdown" ref={ this.setWrapperRef }>
                        <div className="mess__title">
                            <p>{ orders.length === 1 ? `${orders.length} новый заказ` : `${orders.length} новых заказов` }</p>
                        </div>
                        {orders.map((order, index) => (
                            <div className="mess__item">
                                <div className="content">
                                    <NavLink exact to="/orders" onClick={()=>this.toggle()}>
                                        <OrderListItem key={ index } order={ order } />
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
