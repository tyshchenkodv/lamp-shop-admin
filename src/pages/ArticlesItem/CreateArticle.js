import React, { PureComponent } from "react";
import { Form, Field } from 'react-final-form';

const required = value => (value ? undefined : 'Поле обязательное');
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Должно быть больше ${min} символов`;
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export default class CreateArticle extends PureComponent {
    onSubmit = (values) => {
        const formData = new FormData();

        values.title && formData.append('title', values.title);
        values.metaDescription && formData.append('metaDescription', values.metaDescription);
        values.text && formData.append('text', values.text);
        values.image && formData.append('image', values.image[0]);

        this.props.createArticle(formData);
        alert('Запись успешно добавлена!');
    };

    render() {
        const {loading} = this.props;

        return (
            <Form onSubmit={this.onSubmit}
                  render={({handleSubmit, values}) => (
                      <form onSubmit={handleSubmit}>
                          <Field name="title"
                                 validate={composeValidators(required, minValue(5))}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Название</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Название"
                                                 className="au-input au-input--full"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <Field name="metaDescription"
                                 validate={composeValidators(required, minValue(5))}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Meta описание</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Meta описание"
                                                 className="au-input au-input--full"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <Field name="text"
                                 validate={composeValidators(required, minValue(5))}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Текст статьи</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Текст статьи"
                                                 className="au-input au-input--full"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <Field name="image"
                                 validate={required}>
                              {({input: {value, onChange, ...input}, meta}) => {
                                  const handleChange = ({target}) => {
                                      onChange(target.files)
                                  }
                                  return (
                                      <div className="form-group">
                                          <label>Картинка статьи</label>
                                          <input {...input} type="file" onChange={handleChange}
                                                 className="form-control-file au-input--full"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }}
                          </Field>
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
