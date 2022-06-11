import react from 'react';
import './index.scss'

import {Layout, Button} from 'antd'
import '../../../node_modules/antd/dist/antd.css'

const {Header} = Layout

const LoginHeader = () => {
    return(
        <Header id="login-header-container">
            <h1 id="logo">ATools<span>.</span></h1>
            <div id="header-btns">
                <Button type='primary' className='btns'>Start Free Trial</Button>
                <Button type='primary' className='btns' id="btn2">Login</Button>
            </div>
        </Header>
    )
}

export default LoginHeader;