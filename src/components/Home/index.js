import react from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    return(
        <div id="home-page-container">
            HOME PAGE
            <Link to='/login' replace={true}>Go Back</Link>
        </div>
    )
}

export default Home;