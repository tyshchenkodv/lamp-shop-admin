import React, { PureComponent } from 'react';
import MaterialTable from 'material-table';
import {NavLink} from "react-router-dom";

export default class OrdersList extends PureComponent {
    state = {
        pageSize: 10,
    }

    setPageSize(pageSize) {
        this.setState({pageSize: pageSize});
    }

    render() {
        const { orders, loading, downloadInvoice } = this.props;
        const { pageSize } = this.state;

        const changeStatus = (status, id) => {
            const order = orders.find((order) => order.id === id);
            delete order.id;
            delete order.tableData;
            delete order.customer;
            delete order.product;
            order.status = status;
            this.props.updateOrder(order, id);
        }

        return (
            <>
                {!loading &&
                <MaterialTable
                    title="Заказы"
                    columns={[
                        {title: 'Код заказа', field: 'code', editable: 'never'},
                        {title: 'Сумма', field: 'totalPrice', editable: 'never'},
                        {title: 'Номер заказчика', field: 'customer.phone', editable: 'never'},
                        {
                            title: 'Статус заказа',
                            field: 'status',
                            lookup: {
                                'Новый': 'Новый',
                                'Обработанный': 'Обработанный',
                                'Возврат': 'Возврат',
                                'Выполненный': 'Выполненный',
                            },
                        },
                    ]}
                    data={orders}
                    pageSize={pageSize}
                    cellEditable={{
                        onCellEditApproved: (newValue, oldValue, rowData) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    changeStatus(newValue, rowData.id)
                                    resolve();
                                }, 1000)
                            });
                        }
                    }}
                    detailPanel={rowData => {
                        return (
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Адрес доставки: {rowData.customer.address1}</li>
                                <li className="list-group-item">Город: {rowData.customer.city}</li>
                                <li className="list-group-item">Тип доставки: {rowData.deliveryType}</li>
                                <li className="list-group-item">Тип оплаты: {rowData.paymentType}</li>
                                <li className="list-group-item">Комментарий к заказу: {rowData.comment}</li>
                                <li className="list-group-item">
                                    <p>Заказчик</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Фамилия,
                                            Имя: {rowData.customer.lastName} {rowData.customer.firstName}</li>
                                        <li className="list-group-item">E-mail: {rowData.customer.email}</li>
                                    </ul>
                                </li>
                                <li className="list-group-item">
                                    <p>Продукты</p>
                                    <ul className="list-group list-group-flush">
                                        {rowData.product.map((item) => {
                                            return (<div key={item.id}>
                                                <li key={item.id + 1} className="list-group-item">Название
                                                    продукта: <NavLink exact to={`/products`}>{item.name}</NavLink></li>
                                                <li key={item.id + 2} className="list-group-item">Код: {item.code}</li>
                                                <li key={item.id + 3}
                                                    className="list-group-item">Цена: {item.price}</li>
                                            </div>);
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        )
                    }}
                    onChangeRowsPerPage={(items) => this.setPageSize(items)}
                    actions={[
                        rowData => ({
                            icon: 'description',
                            tooltip: 'Создать счёт',
                            onClick: (event, rowData) => {downloadInvoice(rowData)},
                        }),
                    ]}
                    options={{
                        pageSize: pageSize,
                        search: true,
                        actionsColumnIndex: -1,
                        headerStyle: {
                            zIndex: '0',
                        },
                    }}
                />
                }
            </>
        );
    }
}
