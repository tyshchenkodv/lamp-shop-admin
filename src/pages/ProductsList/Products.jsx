import React, { PureComponent } from "react";
import ProductsList from "./ProductsList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadProducts } from "../../actions/loadProducts";
import { deleteProduct } from "../../actions/deleteProduct";

class Products extends PureComponent{
    render() {
        const { list, loading, loadProducts, deleteProduct, history } = this.props;

        return(
            <div className="contentBlock">
                <ProductsList loading={loading}
                              loadProducts={loadProducts}
                              deleteProduct={deleteProduct}
                              history={history}
                              list={list}/>
            </div>
        );
    };
}

export default withRouter(connect(
    (store) => ({
        list: store.product.list,
        loading: store.product.loading,
    }),
    (dispatch) => ({
        loadProducts: () => dispatch(loadProducts()),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
    }),
)(Products));
