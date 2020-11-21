import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadComments } from "../../actions/loadComments";
import { applyComment} from "../../actions/applyComment";
import { deleteComment } from "../../actions/deleteComment";

import CommentList from "./CommentList";

class Comments extends PureComponent {
    render () {
        const { comments, loading, loadComments, deleteComment, applyComment } = this.props;
        return (
            <div className="contentBlock">
                <CommentList
                    comments={comments}
                    loading={loading}
                    loadComments={loadComments}
                    deleteComment={deleteComment}
                    applyComment={applyComment}
                    />
            </div>
        );
    }
}

export default withRouter(connect(
    (store) => ({
        comments: store.comment.list,
        loading: store.comment.loading,
    }),
    (dispatch) => ({
        loadComments: () => dispatch(loadComments()),
        applyComment: (comment) => dispatch(applyComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id)),
    }),
)(Comments));
