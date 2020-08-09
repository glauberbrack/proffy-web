import React from 'react';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing = () => {
    return (
        <div className="page-landing">
            <div id="page-landing-content" className="container">
                <img src={logo} alt="Proffy Logo"/>
                <h2>Teach or study, make your choice!</h2>

                
                <img src={landing} alt="Landing Hero" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </a>
                    <a href="" className="study">
                        <img src={giveClassesIcon} alt="Study"/>
                        Give Classes
                    </a>
                </div>

                <span className="total-connections">
                    100 connections already made <img src={purpleHeartIcon} alt="Purple Heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;