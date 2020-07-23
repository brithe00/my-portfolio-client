import React from 'react';
import { Button } from 'reactstrap';
import './Navbar.css'

import { useHistory } from 'react-router-dom';

function Navbar(props) {

    const history = useHistory();

    return (
        <>
            <div className="navbar-container">
                <div className="logo-container">
                    <div className="title-container">My Portfolio</div>
                    <div className="subtitle-container">Admin Panel</div>
                </div>
                <div className="buttons-container">
                    <Button color="secondary" size="lg" onClick={() => {
                        history.push('/');
                    }}>Redirect to website</Button>
                    
                    <Button color="primary" size="lg" onClick={() => {
                        history.push('/admin');
                    }}>Redirect to login</Button>
                </div>
            </div>
        </>
    );
}

export default Navbar;