import React, { useState } from 'react'
import './index.scss'
import Logo from '../../assets/images/header-logo.svg'
import Back from '../../assets/icons/back.svg'
import SearchIcon from '../../assets/icons/search.svg'

const Header = () => {

    const [logged, setLogged] = useState(false)

    return(
        <div id='header-container'>
            <div id="header-box">
                <div id="header-left" className='header-components'>
                    <img src={Logo} id="logo" alt="logo" />
                    <img src={Back} id="back" alt="back" />
                </div>
                <div id="header-mid" className='header-components'>
                    <div id="search-box">
                        <img src={SearchIcon} />
                        <input type='text' placeholder='Search for your favourite groups in AGT'/>
                    </div>
                </div>
                <div id="header-right" className='header-components'>
                {logged ? 
                    <div id='acc-name'>Account Name</div>
                    : 
                    <div id='create-acc'>Create Account. <span id="create-btn">It's free!</span></div> 
                }
                <div id="join-btn">Join Group</div>
                </div>
            </div>
        </div>
    )
}

export default Header;