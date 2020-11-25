import React, { PureComponent } from "react";

export default class OrderListItem extends PureComponent {

    render() {
        const {order} = this.props;
        const products = order.product;
        let allProductsNames = '';
        products.map((product) => {
            allProductsNames += product.name + ', ';
        })
        return (
            <>
                <h6>{allProductsNames.slice(0, -2)}</h6>
                <p>{order.totalPrice} грн</p>
            </>
        );
    };
}
