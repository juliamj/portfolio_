import React from 'react';
import Project from "./Project";
import lola from '../images/lola1.png';

function Portfolio(props) {
    return (
        <div className="portfolio">
            <div className="section">
                <h1 className="heading">My Projects</h1>
                <Project 
                skill1="JavaScripttest" 
                skill2="Jripttest"
                skill3="Jripttest"
                skill4="Jripttest"
                skill5="Jripttest"
                skill6="Jripttest"

                />
            </div>
        </div>
    );
}

export default Portfolio;