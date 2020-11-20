import React, { PureComponent } from 'react';
import MaterialTable from 'material-table';

export default class CommentList extends PureComponent {
    state = {
        pageSize: 5,
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

        const applyComment = (id) => {
            if (window.confirm("Точно отобразить комментарий?")) {
                this.props.applyComment(id);
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
                    ]}
                    data={ comments }
                    actions={[
                        rowData => ({
                            icon: 'apply',
                            tooltip: 'Подтвердить',
                            onClick: (event, rowData) => applyComment(rowData.id),
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
