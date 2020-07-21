import React, { PureComponent } from "react";
import { Form, Field } from 'react-final-form';

export default class NewArticle extends PureComponent {
    onSubmit = (values) => {
        let formData = new FormData();

        formData.append('title', values.title);
        formData.append('metaDescription', values.metaDescription);
        formData.append('text', values.text);
        formData.append('image', values.image[0]);

        this.props.createArticle(formData);
    };

    render() {
        const {loading} = this.props;

        return (
            <Form onSubmit={this.onSubmit}
                  render={({handleSubmit, values}) => (
                      <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label>Название</label>
                              <Field className="au-input au-input--full"
                                     type="text"
                                     name="title"
                                     placeholder="Название"
                                     component="input"/>
                          </div>
                          <div className="form-group">
                              <label>Meta описание</label>
                              <Field className="au-input au-input--full"
                                     type="text"
                                     name="metaDescription"
                                     placeholder="Meta описание"
                                     component="input"/>
                          </div>
                          <div className="form-group">
                              <label>Текст статьи</label>
                              <Field className="au-input au-input--full"
                                     name="text"
                                     type="text"
                                     component="input"/>
                          </div>
                          <div className="form-group">
                              <label>Картинка статьи</label>
                              <Field name="image">
                                  {({input: {value, onChange, ...input}}) => {
                                      const handleChange = ({target}) => {
                                          onChange(target.files)
                                      }
                                      return <input {...input} type="file" onChange={handleChange}/>
                                  }}
                              </Field>
                          </div>

                          <button className="au-btn au-btn--block au-btn--green m-b-20"
                                  type="submit"
                                  disabled={loading}>Добавить
                          </button>
                      </form>
                  )}
            />
        );
    };
}