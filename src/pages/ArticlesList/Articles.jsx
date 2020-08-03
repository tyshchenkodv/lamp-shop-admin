import React, { PureComponent } from "react";
import ArticlesList from "./ArticlesList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadArticles } from "../../actions/loadArticles";
import { deleteArticle } from "../../actions/deleteArticle";

class Articles extends PureComponent{
    render() {
        const { list, loading, loadArticles, deleteArticle, history } = this.props;

        return(
            <div className="contentBlock">
                <ArticlesList loading={loading}
                              loadArticles={loadArticles}
                              deleteArticle={deleteArticle}
                              history={history}
                              list={list}/>
            </div>
        );
    };
}

export default withRouter(connect(
    (store) => ({
        list: store.article.list,
        loading: store.article.loading,
    }),
    (dispatch) => ({
        loadArticles: () => dispatch(loadArticles()),
        deleteArticle: (id) => dispatch(deleteArticle(id)),
    }),
)(Articles));
