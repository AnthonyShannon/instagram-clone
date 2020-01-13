import React from 'react';
import './navbar.css';

const styles = {
    topNav: {
        height: '56px',
        width: '100%',
        position: 'fixed',
        backgroundColor: 'white',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: '90',
        fontSize: '25px',
        borderBottom: 'black solid 1px',
        marginBottom: '20px',
    },
    container: {
        width: '100%',
        maxWidth: '960px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto'
    },
    i: {
        margin: '10px',
    }
}

const Navbar = () => {

    return (
        <div style={styles.topNav}>
            <div style={styles.container}>
                <div>
                    <i className="fa fa-instagram" />
                    <span className="insta">Instagram</span>
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
        </div>
    );
};

export default Navbar;