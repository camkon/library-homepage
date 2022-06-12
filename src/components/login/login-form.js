import react, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './login-form.scss'
import {Form, Input, Button, Checkbox} from 'antd'
import toast from 'react-hot-toast';


const LoginForm = () => {

    const nav = useNavigate()

    const [sumitCliked, setSubmitClicked] = useState(false)
    const [mail, setMail] = useState()
    const [pass, setPass] = useState()

    const onFinish = () => {
        userLogin()
    }

    const userLogin = () => {
        setSubmitClicked(true)
        fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: mail,
                password: pass 
            })
        })
        .then((res) => {
            if(res.status === 200) {
                toast.success('Login success Please wait...')
                setSubmitClicked(false)
                setTimeout(() => {
                    nav('/home', {replace: true})
                }, 2000);
            }else {
                toast.dismiss();
                toast.error("Username or Password Error!");
                setSubmitClicked(false)
            }
            return res.json()
        })
        .then((data) => {
        })
        setTimeout(() => {
            setSubmitClicked(false);
        }, 5500);
    }

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
                <Input placeholder="Email Address *" onChange={(e) => {setMail(e.target.value)}}/>
            </Form.Item>

            <Form.Item
                name="password"
                className='form-item'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input type="password" placeholder="Password *" onChange={(e) => {setPass(e.target.value)}} />
            </Form.Item>
            
            <Form.Item>
            {
                sumitCliked ? 
                <Button type="primary" className="login-form-button" id="login-checking">
                    Log in <span id="wait-anime"></span>
                </Button>
                :
                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
            }
            </Form.Item>
            
            <Form.Item className='last-options'>
                <Form.Item className='options-box' name="remember" valuePropName="checked" noStyle><Checkbox>Remember Password</Checkbox></Form.Item>

                <Form.Item className='options-box' noStyle><a className="login-form-forgot" href="">Forgot password</a></Form.Item>
            </Form.Item>

        </Form>
    )
}

export default LoginForm;