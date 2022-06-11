import react from 'react';
import './login-form.scss'
import {Form, Input, Button, Checkbox} from 'antd'


const LoginForm = () => {

    const onFinish = () => {}

    return(
        <Form
            name="normal_login"
            className="login-form"
            id="form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="Email Address"
                className='form-item'
                rules={[{ required: true, message: 'Please input your Email Address!' }]}
            >
                <Input placeholder="Email Address *" />
            </Form.Item>

            <Form.Item
                name="password"
                className='form-item'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input type="password" placeholder="Password *" />
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
            </Form.Item>
            
            <Form.Item className='last-options'>
                <Form.Item className='options-box' name="remember" valuePropName="checked" noStyle><Checkbox>Remember Password</Checkbox></Form.Item>

                <Form.Item className='options-box' noStyle><a className="login-form-forgot" href="">Forgot password</a></Form.Item>
            </Form.Item>

        </Form>
    )
}

export default LoginForm;