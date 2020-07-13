import React, { PureComponent } from 'react';
import LoginForm from "../../components/LoginForm";

import logo from './../../styles/images/icon/logo.png';
import { connect } from "react-redux";

class Login extends PureComponent {
    checkAuth(){
        const { isLoggedIn } = this.props;

        if(isLoggedIn === true) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        this.checkAuth();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkAuth();
    }

    render() {
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
                                    <LoginForm/>
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
        isLoggedIn: store.auth.isLoggedIn,
    }),
)(Login);
