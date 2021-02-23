import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Clones = () => {
    return (
        <>
            <Navigation />
            <div>
                <p>Indeed Clone</p>
                <Link to="/indeed-clone">Indeed Clone</Link>
            </div>
        </>
    )
}

export default Clones;