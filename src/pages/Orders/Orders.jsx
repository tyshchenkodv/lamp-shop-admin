import React, { PureComponent } from 'react';
import OrdersList from "./OrdersList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadOrders } from "../../actions/loadOrders";
import { updateOrder } from "../../actions/updateOrder";
import { downloadInvoice } from "../../actions/downloadInvoice";

class Orders extends PureComponent {
    componentDidMount() {
        this.props.loadOrders();
    }

    render () {
        const { orders, loading, updateOrder, downloadInvoice } = this.props;
        return (
            <div className="contentBlock">
                <OrdersList
                    loading={loading}
                    orders={orders}
                    updateOrder={updateOrder}
                    downloadInvoice={downloadInvoice}
                />
            </div>
        );
    }
}

export default withRouter(connect(
    (store) => ({
        loading: store.order.loading,
        orders: store.order.list,
    }),
    (dispatch) => ({
        loadOrders: () => dispatch(loadOrders()),
        updateOrder: (order, id) => dispatch(updateOrder(order, id)),
        downloadInvoice: (product) => dispatch(downloadInvoice(product)),
    }),
)(Orders));
