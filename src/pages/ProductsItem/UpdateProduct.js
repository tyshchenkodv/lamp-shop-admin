import React, { PureComponent } from "react";
import { Form, Field } from 'react-final-form';

const required = value => (value ? undefined : 'Поле обязательное');
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Должно быть больше ${min} символов`;
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export default class UpdateProduct extends PureComponent {
    onSubmit = (values) => {
        const formData = new FormData();

        values.name && formData.append('name', values.name);
        values.description && formData.append('description', values.description);
        values.code && formData.append('code', values.code);
        values.price && formData.append('price', values.price);
        values.promotionalPrice && formData.append('promotionalPrice', values.promotionalPrice);
        values.availability && formData.append('availability', values.availability);
        values.count && formData.append('count', values.count);
        values.category && formData.append('categoryId', values.category);
        values.image && formData.append('image', values.image[0]);

        this.props.updateProduct(formData, this.props.product.id);
        alert('Продукт успешно обновлён!');
        this.props.history.goBack();
    };

    render() {
        const { loading, categories, product } = this.props;

        return (
            <Form initialValues={ product }
                  onSubmit={this.onSubmit}
                  render={({handleSubmit, values}) => (
                      <form onSubmit={handleSubmit}>
                          <Field name="name"
                                 validate={composeValidators(required, minValue(5))}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Название товара</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Название товара"
                                                 className="au-input au-input--full"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <Field name="description"
                                 validate={composeValidators(required, minValue(5))}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Описание товара</label>
                                          <textarea {...input}
                                                    rows="5"
                                                    placeholder="Описание товара"
                                                    className="au-input au-input--full"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <Field name="code"
                                 validate={composeValidators(required, minValue(5))}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Код товара</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Код товара"
                                                 className="au-input w-15 m-l-10"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <Field name="price"
                                 validate={composeValidators(required)}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Цена товара</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Цена товара"
                                                 className="au-input w-15 m-l-10"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <Field name="promotionalPrice">
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Акционная цена товара</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Цена товара"
                                                 className="au-input w-15 m-l-10"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                          <div className="form-group">
                              <label>Наличие</label>
                              <Field name="availability" component="select" className="au-input m-l-10">
                                  <option/>
                                  <option value="В наявності">В наявності</option>
                                  <option value="Немає в наявності">Немає в наявності</option>
                              </Field>
                          </div>
                          <div className="form-group">
                              <label>Категория товара</label>
                              <Field name="category" component="select" className="au-input m-l-10">
                                  <option/>
                                  {categories.map((category) =>
                                      <option value={category.id} key={category.id}>{category.name}</option>)
                                  }
                              </Field>
                          </div>
                          <Field name="count"
                                 validate={composeValidators(required)}>
                              {
                                  ({input, meta}) => (
                                      <div className="form-group">
                                          <label>Количество товара</label>
                                          <input {...input}
                                                 type="text"
                                                 placeholder="Количество товара"
                                                 className="au-input w-15 m-l-10"/>
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
                                          <label>Изображение товара</label>
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
