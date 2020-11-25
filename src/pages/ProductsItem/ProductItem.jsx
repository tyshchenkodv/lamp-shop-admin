import React, { PureComponent } from "react";
import { connect } from "react-redux";

import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";

import { loadCategories } from "../../actions/loadCategories";
import { createProduct } from "../../actions/createProduct";
import { updateProduct } from "../../actions/updateProduct";
import { loadProduct } from "../../actions/loadProduct";

class ProductItem extends PureComponent {
    state = {
        type: 'create',
    }

    componentDidMount() {
        this.props.loadCategories();
        const { match: { params: { id } } } = this.props;
        if(id !== 'new'){
            this.setState({type: 'update'});
            this.props.loadProduct(id);
        }
    }

    render() {
        const { type } = this.state;
        const { createProduct, updateProduct, product, history, categories } = this.props;

        return (
            <>
                <div className='contentBlock'>
                    { type === 'create' && <CreateProduct history={ history }
                                                          createProduct={ createProduct }
                                                          categories={ categories }/> }
                    { type === 'update' && <UpdateProduct history={ history }
                                                          product={ product }
                                                          categories={ categories }
                                                          updateProduct={ updateProduct }/> }
                </div>
            </>
        );
    }
}

export default connect(
    (store) => ({
        categories: store.category.list,
        product: store.product.item,
    }),
    (dispatch) => ({
        loadCategories: () => dispatch(loadCategories()),
        createProduct: (formData) => dispatch(createProduct(formData)),
        updateProduct: (formData, id) => dispatch(updateProduct(formData, id)),
        loadProduct: (id) => dispatch(loadProduct(id)),
    })
)(ProductItem);
