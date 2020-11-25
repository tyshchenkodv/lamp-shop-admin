import React, { PureComponent } from 'react';
import MaterialTable from 'material-table';

export default class ArticlesList extends PureComponent {
    state = {
        pageSize: 10,
    }

    componentDidMount() {
        this.props.loadArticles();
    }

    setPageSize(pageSize) {
        this.setState({pageSize: pageSize});
    }

    render() {
        const {history, loading, list} = this.props;
        const {pageSize} = this.state;

        const routeChange = (id) => {
            let path = `/articles/${id}`;
            history.push(path);
        }

        const deleteArticle = (id) => {
            if (window.confirm("Точно удалить статью?")) {
                this.props.deleteArticle(id);
            }
        }

        return (
            <>
                {!loading &&
                <MaterialTable
                    title="Статьи"
                    columns={[
                        {title: 'Название', field: 'title', width: 300},
                        {title: 'Текст статьи', field: 'text',},
                        {title: 'Тип', field: 'type', width: 150,},
                        {title: 'Дата публикации', field: 'publicationDate', defaultSort: 'desc', width: 200,},
                    ]}
                    data={ list }
                    actions={[
                        {
                            icon: 'add',
                            tooltip: 'Добавить статью',
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
                            onClick: (event, rowData) => deleteArticle(rowData.id),
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
