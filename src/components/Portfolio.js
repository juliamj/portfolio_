import React from 'react';
import Project from "./Project";
import lola from '../images/lola1.png';

function Portfolio(props) {
    return (
        <div className="portfolio">
            <div className="section-projects">
                <h1 className="heading">My Projects</h1>
                <div className="projects">
                    <Project
                        description="A language exchange Web Application that brings people together to learn languages."
                        skill1="JavaScripttest"
                        skill2="Jripttest"
                        skill3="Jripttest"
                        skill4="Jripttest"
                        skill5="Jripttest"
                        skill6="Jripttest"
                        img={lola}
                        preview=""
                        live="https://lola-tandem.netlify.app/"
                        code="https://github.com/juliamj/Lola-client"
                    />
                    <Project
                        description="A language exchange Web Application that brings people together to learn languages."
                        skill1="JavaScripttest"
                        skill2="Jripttest"
                        skill3="Jripttest"
                        skill4="Jripttest"
                        skill5="Jripttest"
                        skill6="Jripttest"
                        img={lola}
                        preview=""
                        live="https://lola-tandem.netlify.app/"
                        code="https://github.com/juliamj/Lola-client"
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;