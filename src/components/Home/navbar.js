import React from 'react'
import './styles/navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return(
        <div id="navbar-container">
            <div id="nav-left">
                <span className="left-menus menu-active">All Posts 34</span>
                <span className="left-menus">Article</span>
                <span className="left-menus">Event</span>
                <span className="left-menus">Education</span>
                <span className="left-menus">Job</span>
            </div>
            <div id="nav-right">
                <div className="right-menus">Write a Post<FontAwesomeIcon className='faIcon' icon={faCaretDown}/></div>
                <div className="right-menus"><FontAwesomeIcon className='faIcon' icon={faUserGroup}/>Join Group</div>
            </div>
        </div>
    )
}

export default Nav;