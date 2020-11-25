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
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        values.title && formData.append('title', values.title);
        values.metaDescription && formData.append('metaDescription', values.metaDescription);
        values.text && formData.append('text', values.text);
        values.type && formData.append('type', values.type);
        formData.append('publicationDate', today);
        values.image && formData.append('image', values.image[0]);

        this.props.createArticle(formData);
        alert('Статья успешно обновлена');
        this.props.history.goBack();
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
                                          <textarea {...input}
                                                 rows="10"
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
                          <div className="form-group">
                              <label>Тип</label>
                              <Field name="type" component="select" className="au-input m-l-10">
                                  <option/>
                                  <option value="Статья">Статья</option>
                                  <option value="Новость">Новость</option>
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
