import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createArticle } from "../../actions/createArticle";
import NewArticle from "./NewArticle";

class Articles extends PureComponent{
    render() {
        const { loading, createArticle} = this.props;
        return(
            <div className="articlesForm">
                <NewArticle loading={ loading } createArticle={ createArticle }/>
            </div>
        );
    };
}

export default connect(
    (store) => ({
        loading: store.createArticle.loading,
    }),
    (dispatch) => ({
        createArticle: (data) => dispatch(createArticle(data)),
    }),
)(Articles);