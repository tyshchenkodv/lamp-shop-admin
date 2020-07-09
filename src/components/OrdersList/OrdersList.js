import React, { PureComponent } from "react";
import cx from "classnames";
import OrderListItem from "./OrderListItem";

const ORDERS = [
    {
        item: 'Лампа настольная L-21 "Серебро" (ТМ LOGA)',
        price: '155',
        date: '2020-07-09 13:20',
    },
    {
        item: 'Светильник светодиодный SVT-24W-034 Brixoll 24w 4000K ip 20',
        price: '990',
        date: '2020-07-05 17:45',
    },
    {
        item: 'Светильник ночной FN1167 "Зайчик ушки" розовый\n',
        price: '42',
        date: '2020-07-04 10:31',
    },
];

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
        return (
            <>
                <div className={cx("noti__item js-item-menu", {"show-dropdown":this.state.open})}>
                    <button onClick={ this.toggle } ref={ this.setButtonRef }>
                        <i className="zmdi zmdi-card"/>
                    </button>
                    { ORDERS.length > 0 && <span className="quantity">{ORDERS.length}</span> }
                    <div className="mess-dropdown js-dropdown" ref={ this.setWrapperRef }>
                        <div className="mess__title">
                            <p>{ ORDERS.length === 1 ? `${ORDERS.length} новый заказ` : `${ORDERS.length} новых заказов` }</p>
                        </div>
                        {ORDERS.map((order, index) => (
                            <OrderListItem key={ index } order={ order } />
                        ))}
                    </div>
                </div>
            </>
        );
    };
}
