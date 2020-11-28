import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadCategories } from "../../actions/loadCategories";
import { loadPurchases } from "../../actions/loadPurchases";
import { Field, Form } from "react-final-form";
import MaterialTable from 'material-table';

class PurchasesFormation extends Component {
    state = {
        openTable: false,
    }

    componentDidMount() {
        this.props.loadCategories();
    }

    onSubmit = (values) => {
        this.props.loadPurchases(values.category).then(
            this.setState({openTable: true})
        );
    }

    render() {
        const {openTable} = this.state;
        const {categories, purchases, loading} = this.props;

        return (
            <div className='contentBlock'>
                <h3 className='pt-4 pb-4'>Формирование списка закупок</h3>
                <Form onSubmit={this.onSubmit}
                      render={({handleSubmit, values}) => (
                          <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                  <label>Категория товара</label>
                                  <Field name="category" component="select" className="au-input m-l-10">
                                      <option/>
                                      {categories.map((category) =>
                                          <option value={category.id} key={category.id}>{category.name}</option>)
                                      }
                                  </Field>
                              </div>
                              <button className="au-btn au-btn--blue m-b-20"
                                      type="submit">Вывести товары
                              </button>
                          </form>
                      )}
                />
                {openTable && !loading &&
                    <MaterialTable
                        title="Список закупок"
                        columns={[
                            {title: 'Название', field: 'name',},
                            {title: 'Код товара', field: 'code', width: 200,},
                            {title: 'Цена', field: 'price', width: 200,},
                            {title: 'Количество', field: 'count', width: 200,},
                            {title: 'Заказы', field: 'solded', width: 200,},
                        ]}
                        data={ purchases }/>
                }
            </div>
        );
    }
}

export default withRouter(connect(
    (store) => ({
        categories: store.category.list,
        purchases: store.purchase.item,
        loading: store.purchase.loading,
    }),
    (dispatch) => ({
        loadCategories: () => dispatch(loadCategories()),
        loadPurchases: (id) => dispatch(loadPurchases(id)),
    }),
)(PurchasesFormation));
