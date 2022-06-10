import react from 'react'
import './styles/location.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faPen} from '@fortawesome/free-solid-svg-icons'

const Location = () => {
    return(
        <div id="location-box">
            <div id="input-loc-container">
                <FontAwesomeIcon icon={faLocationDot}/>
                <input type="text" placeholder='Noida, India'/>
                <FontAwesomeIcon icon={faPen}/>
            </div>
        </div>
    )
}

export default Location;