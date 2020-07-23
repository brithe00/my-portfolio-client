import React, { useState } from 'react';
import './NavbarHome.css'
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Navbar(props) {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <>
            <div className="navbar-container">
                <div className="logo-container">
                    <div className="title-container">Brian THELLIER</div>
                    <div className="subtitle-container">Junior Web Developper</div>
                </div>
                <div className="sections-container">
                    <ul className="sections-ul">
                        <Tooltip placement="top" isOpen={tooltipOpen} target="tooltip-envelope" toggle={toggle}>bthellier51@gmail.com</Tooltip>
                        <li className="sections-li"><FontAwesomeIcon id="tooltip-envelope" icon={faEnvelope} /></li>
                        <li className="sections-li"><a href="https://github.com/brithe00" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li className="sections-li"><a href="https://www.linkedin.com/in/brian-thellier/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;