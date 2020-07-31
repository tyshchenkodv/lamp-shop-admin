import React, { PureComponent } from "react";
import ArticlesList from "./ArticlesList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadArticles } from "../../actions/loadArticles";

class Articles extends PureComponent{
    render() {
        const { loading, loadArticles } = this.props;

        return(
            <div className="contentBlock">
                <ArticlesList loading={loading} loadArticles={loadArticles}/>
            </div>
        );
    };
}

export default withRouter(connect(
    (store) => ({
        loading: store.loadArticles.loading,
    }),
    (dispatch) => ({
        loadArticles: () => dispatch(loadArticles()),
    }),
)(Articles));
