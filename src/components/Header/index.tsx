import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg'
import goBackIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface HeaderProps {
    title: string;
    description?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={goBackIcon} alt="Go Bach"/>
                </Link>

                <img src={logo} alt="Proffy Logo"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                
                {props.children}
            </div>

        </header>
    )
}

export default Header;