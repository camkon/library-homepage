import React from 'react'
import './index.scss'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Layout = () => {
    return(
        <div id='layout-container'>
            <Header />
            <div id='outlet-container'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;