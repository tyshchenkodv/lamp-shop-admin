import React, { PureComponent } from 'react';
import MaterialTable from 'material-table';

export default class ProductsList extends PureComponent {
    state = {
        pageSize: 10,
    }

    componentDidMount() {
        this.props.loadProducts();
    }

    setPageSize(pageSize) {
        this.setState({pageSize: pageSize});
    }

    render() {
        const { history, loading, list } = this.props;
        const { pageSize } = this.state;

        const routeChange = (id) => {
            let path = `/products/${id}`;
            history.push(path);
        }

        const deleteProducts = (id) => {
            if (window.confirm("Точно удалить товар?")) {
                this.props.deleteProduct(id);
            }
        }

        return (
            <>
                {!loading &&
                <MaterialTable
                    title="Товары"
                    columns={[
                        {title: 'Название', field: 'name',},
                        {title: 'Код товара', field: 'code', width: 200,},
                        {title: 'Цена', field: 'price', width: 200,},
                        {title: 'Количество', field: 'count', width: 200,},
                    ]}
                    data={ list }
                    actions={[
                        {
                            icon: 'add',
                            tooltip: 'Добавить товар',
                            isFreeAction: true,
                            onClick: (event) => routeChange('new'),
                        },
                        rowData => ({
                            icon: 'edit',
                            tooltip: 'Редактировать',
                            onClick: (event, rowData) => routeChange(rowData.id),
                        }),
                        rowData => ({
                            icon: 'delete',
                            tooltip: 'Удалить',
                            onClick: (event, rowData) => deleteProducts(rowData.id),
                        }),
                    ]}
                    onChangeRowsPerPage={(items) => this.setPageSize(items)}
                    options={{
                        pageSize: pageSize,
                        search: true,
                        actionsColumnIndex: -1,
                        tableLayout: 'fixed',
                        headerStyle: {
                            zIndex: '0',
                        },
                        cellStyle: {
                            textOverflow: "ellipsis",
                            whiteSpace: "pre",
                            overflow: "hidden",
                        },
                    }}
                />
                }
            </>
        );
    }
}
