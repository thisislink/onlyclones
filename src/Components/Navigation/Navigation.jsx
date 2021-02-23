import React from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../Navigation/NavStyle.module.css';

const Navigation = () => {
    return (
        <>
            <p className={NavigationStyle["header-title"]}>Only Clones</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/all-clones">Clones</Link>
            </nav>
        </>
    )
}

export default Navigation;