import React, { PureComponent } from "react";
import { TimeSince } from "../../utils";

export default class OrderListItem extends PureComponent {

    render() {
        const { order } = this.props;

        return (
            <div className="mess__item">
                <div className="content">
                    <h6>{order.item}</h6>
                    <p>{order.price} грн</p>
                    <span className="time">{TimeSince(order.date)}</span>
                </div>
            </div>
        );
    };
}
