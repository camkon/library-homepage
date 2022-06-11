import react, {useEffect} from 'react';
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom';

import { Toaster } from "react-hot-toast";


const Layout = () => {

    const nav = useNavigate() 

    useEffect(() => {
        nav('/login', {replace: true})
    }, [])

    return(
        <div id="layout-container">
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;


