import react from 'react';
import './index.scss'
import { Layout } from 'antd';
import '../../../node_modules/antd/dist/antd.css'

import LoginHeader from './login-header'
import LoginForm from './login-form';

const {Content} = Layout

const Login = () => {
    return(
        <Layout id="login-page-container">
            <LoginHeader />
            <Content id="content-container">
                <div id="login-form-container">
                    <div id="form-head">
                        <div id="form-head-title">Welcome Back</div>
                        <div id="form-head-subtitle">Sub-title text goes here</div>
                    </div>
                    <LoginForm />
                </div>
                <div id="img"></div>
            </Content>
        </Layout>
    )
}

export default Login;