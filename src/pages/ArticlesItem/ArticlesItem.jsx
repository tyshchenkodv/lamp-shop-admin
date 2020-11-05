import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadArticle } from "../../actions/loadArticle";
import { updateArticle } from "../../actions/updateArticle";
import { createArticle } from "../../actions/createArticle";
import CreateArticle from "./CreateArticle";
import UpdateArticle from "./UpdateArticle";

class ArticlesItem extends PureComponent {
    state = {
        type: 'create',
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        if(id !== 'new'){
            this.setState({type: 'update'});
            this.props.loadArticle(id);
        }
    }

    render() {
        const { type } = this.state;
        const { createArticle, updateArticle, item, history } = this.props;

        return(
            <div className='contentBlock'>
                { type === 'create' && <CreateArticle history={ history } createArticle={ createArticle }/> }
                { type === 'update' && <UpdateArticle history={ history } article={ item } updateArticle={ updateArticle }/> }
            </div>
        );
    };
}

export default connect(
    (store) => ({
        item: store.article.item,
        loading: store.article.loading,
    }),
    (dispatch) => ({
        loadArticle: (id) => dispatch(loadArticle(id)),
        createArticle: (formData) => dispatch(createArticle(formData)),
        updateArticle: (formData, id) => dispatch(updateArticle(formData, id)),
    })
)(ArticlesItem);
