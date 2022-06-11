import react, {useState, useEffect} from 'react';
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom';


const Layout = () => {

    return(
        <div id="layout-container">
            <Outlet />
        </div>
    )
}

export default Layout;
