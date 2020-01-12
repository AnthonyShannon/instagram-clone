import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <header className="TopNav">
            <div className="container">
                <div>
                    <i className="fa fa-instagram" />
                    <span> | Instagram</span>
                </div>
                <form className="searchBar">
                    <input type="text" placeholder="search..." />
                    <button type="submit"><i className="fa fa-search" /></button>
                </form>
                <div className="icons">
                    <i className="fa fa-compass" />
                    <i className="fa fa-heart" />
                    <i className="fa fa-user" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;