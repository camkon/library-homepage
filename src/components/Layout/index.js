import react, {useState, useEffect} from 'react';
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom';


const Layout = () => {

    const nav = useNavigate()
    const userLogin = JSON.parse(localStorage.getItem('vouchAtoolsLogin'))
    
    console.log(userLogin);

    useEffect(() => {
        if(userLogin === null || userLogin.login === false) {
            nav('/login', {replace: true})
        } else {
            userAutoLogin()
        }
    }, [])

    const userAutoLogin = () => {
        fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: "eve.holt@reqres.in",
                password: "5citysilcka"
            })
        })
        .then((res) => res.json())
        .then((data) => {
            nav('/home', {replace: true})
            localStorage.setItem('vouchAtoolsLogin', JSON.stringify({
                login: true
            }))
        })
    }

    return(
        <div id="layout-container">
            <Outlet />
        </div>
    )
}

export default Layout;
