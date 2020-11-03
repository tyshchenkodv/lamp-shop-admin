import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createArticle } from "../../actions/createArticle";
import CreateArticle from "./CreateArticle";

class ArticlesItem extends PureComponent {
    state = {
        type: 'create',
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        if(id !== 'new'){
            this.setState({type: 'update'});
        }
        //this.props.loadItem(id);
    }

    render() {
        const { type } = this.state;
        const { createArticle } = this.props;

        return(
            <div className='contentBlock'>
                { type === 'create' && <CreateArticle createArticle={ createArticle }/> }
            </div>
        );
    };
}

export default connect(
    (store) => ({
        loading: store.article.loading,
    }),
    (dispatch) => ({
        createArticle: (formData) => dispatch(createArticle(formData)),
    })
)(ArticlesItem);
