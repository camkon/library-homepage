import React from 'react'
import './styles/index.scss'
import BgSection from './bg-section';
import Nav from './navbar';
import Post from './post';
import Location from './location';

const Home = () => {
    return(
        <div id="home-page">
            <BgSection />
            <div id="main-section">
                <Nav />
                <div id="posts-section">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div id="location-section">
                    <Location />
                </div>
            </div>
        </div>
    )
}

export default Home;