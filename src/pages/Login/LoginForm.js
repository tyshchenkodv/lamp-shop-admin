import React, { PureComponent } from "react";
import { Form, Field } from 'react-final-form';

export default class LoginForm extends PureComponent {
    onSubmit = (values) => {
        this.props.login(values);
    };

    render() {
        const { loading } = this.props;

        return (
            <Form onSubmit={ this.onSubmit }
                  render={({ handleSubmit, values}) => (
                      <form onSubmit={ handleSubmit }>
                          <div className="form-group">
                              <label>Email</label>
                              <Field className="au-input au-input--full"
                                     type="email"
                                     name="email"
                                     placeholder="Email"
                                     component="input"/>
                          </div>
                          <div className="form-group">
                              <label>Пароль</label>
                              <Field className="au-input au-input--full"
                                     type="password"
                                     name="password"
                                     placeholder="Пароль"
                                     component="input"/>
                          </div>
                          <button className="au-btn au-btn--block au-btn--green m-b-20"
                                  type="submit"
                                  disabled={ loading }>Войти
                          </button>
                      </form>
                  )}
            />
        );
    };
}
