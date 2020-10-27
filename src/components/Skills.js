import React from 'react';

function Skills(props) {
    return (
        <div className="skills">
            <div className="section">
                <h1 className="heading">My Technical Skills</h1>
                <div className="skills-flex-container">
                    <div className="skills-flex">
                        <div>
                            <ul className="nobull">
                                <li><span>JavaScript</span></li>
                                <li><span>React.js</span></li>
                                <li><span>HTML5</span></li>
                                <li><span>CSS3</span></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="nobull">
                                <li><span>Bootstrap</span></li>
                                <li><span>React Bootstrap</span></li>
                                <li><span>Grommet</span></li>
                                <li><span>Responsive Webdesign</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-flex">
                        <div>
                            <ul className="nobull">
                                <li><span>Node.js / Express</span></li>
                                <li><span>RESTful API's</span></li>
                                <li><span>MongoDB / Mongoose</span></li>
                                <li><span>SQL</span></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="nobull">
                                <li><span>Git</span></li>
                                <li><span>GitHub</span></li>
                                <li><span>CMS-Contentful</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;