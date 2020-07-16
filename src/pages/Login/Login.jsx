import React, { PureComponent } from 'react';
import LoginForm from './LoginForm';

import logo from './../../styles/images/icon/logo.png';
import { connect } from "react-redux";
import { login } from "../../actions/login";

class Login extends PureComponent {
    render() {
        const { loading, login } = this.props;

        return (
            <div className="page-wrapper">
                <div className="page-content--bge5">
                    <div className="container">
                        <div className="login-wrap">
                            <div className="login-content">
                                <div className="login-logo">
                                    <a href="#">
                                        <img src={ logo } alt="CoolAdmin"/>
                                    </a>
                                </div>
                                <div className="login-form">
                                    <LoginForm loading={ loading } login={ login }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        loading: store.auth.loading,
    }),
    (dispatch) => ({
        login: (data) => dispatch(login(data)),
    }),
)(Login);
