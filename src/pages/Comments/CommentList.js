import React, { PureComponent } from 'react';
import MaterialTable from 'material-table';
import { NavLink } from 'react-router-dom';

export default class CommentList extends PureComponent {
    state = {
        pageSize: 10,
    }

    componentDidMount() {
        this.props.loadComments();
    }

    setPageSize(pageSize) {
        this.setState({pageSize: pageSize});
    }

    render() {
        const { loading, comments } = this.props;
        const { pageSize } = this.state;

        const applyComment = (comment) => {
            comment.processed = 'displayed';
            if (window.confirm("Точно отобразить комментарий?")) {
                this.props.applyComment(comment);
            }
        }

        const deleteComment = (id) => {
            if (window.confirm("Точно удалить комментарий?")) {
                this.props.deleteComment(id);
            }
        }

        return (
            <>
                {!loading &&
                <MaterialTable
                    title="Комментарии"
                    columns={[
                        {title: 'Имя', field: 'name', width: 300},
                        {title: 'Текст комментария', field: 'text',},
                        {
                            title: 'Название продукта',
                            field: 'product',
                            width: 300,
                            render: rowData => <NavLink exact to={`/product/${rowData.product.id}`}>{rowData.product.name}</NavLink>
                        }
                    ]}
                    data={ comments }
                    actions={[
                        rowData => ({
                            icon: rowData.processed === 'displayed' ? 'check' : 'add',
                            tooltip: rowData.processed === 'displayed' ? 'Опубликован' : 'Опубликовать',
                            onClick: (event, rowData) => applyComment(rowData),
                            disabled: rowData.processed === 'displayed',
                        }),
                        rowData => ({
                            icon: 'delete',
                            tooltip: 'Удалить',
                            onClick: (event, rowData) => deleteComment(rowData.id),
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
