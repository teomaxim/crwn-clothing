import React from 'react';
import './homepage.style.scss'

const HomePage = () => {
    return <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="cotent">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="cotent">
                    <h1 className="title">JAKETS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="cotent">
                    <h1 className="title">WOMENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="cotent">
                    <h1 className="title">MENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage;