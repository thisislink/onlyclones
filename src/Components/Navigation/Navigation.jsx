import React from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../Navigation/NavStyle.module.css';

const Navigation = () => {
    return (
        <>
            <nav className={NavigationStyle["style-links"]}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-clones">Clones</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;